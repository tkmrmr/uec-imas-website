import { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Text,
  Button,
  Center,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, WidgetSize } from "@marsidev/react-turnstile";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "1文字以上で入力してください。")
    .max(20, "20文字以下で入力してください。"),
  email: z.string().email("メールアドレスの形式で入力してください。"),
  content: z
    .string()
    .min(1, "1文字以上で入力してください。")
    .max(200, "200文字以下で入力してください。"),
});

type Contact = z.infer<typeof contactSchema>;

export default function Form() {
  const [isVerified, setIsVerified] = useState(false);
  const turnstileSize: WidgetSize =
    useBreakpointValue({
      base: "compact",
      sm: "normal",
    }) || "normal";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful, isSubmitting },
  } = useForm<Contact>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
  });

  const onVerifySuccess = async (token: string) => {
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Verification failed");
      }
      const verifyData = await res.json();
      setIsVerified(verifyData.success);
    } catch (error) {
      console.error("Error verifying token:", error);
      setIsVerified(false);
    }
  };

  const onSubmit = async (data: Contact) => {
    console.log(data);
    console.log(isVerified);
    if (isValid && isVerified) {
      try {
        await fetch("/api/send-email", {
          method: "POST",
          body: JSON.stringify(data),
        });
      } catch (error) {
        throw error;
      }
    } else {
      throw errors;
    }
  };

  return (
    <Box mx={{ base: 0, md: 7 }} my={{ base: 4, md: 7 }}>
      {isSubmitSuccessful ? (
        <Text pt="8px">
          送信しました。
          <br />
          担当者が確認しますので、返信までしばらくお待ちください。
        </Text>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <Stack spacing={4} pt="8px">
            <FormControl>
              <FormLabel htmlFor="name">お名前</FormLabel>
              <Input
                type="text"
                id="name"
                placeholder="電通太郎"
                {...register("name")}
              />
              {errors.name && (
                <Text color="red.500">{errors.name.message}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input
                id="email"
                placeholder="dentsutaro@uec.ac.jp"
                {...register("email")}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="content">お問い合わせ内容</FormLabel>
              <Textarea
                placeholder=""
                id="content"
                resize="none"
                height="10em"
                {...register("content")}
              />
              {errors.content && (
                <Text color="red.500">{errors.content.message}</Text>
              )}
            </FormControl>
            <Center>
              <Stack spacing={4} mt={5}>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                  options={{ theme: "light", size: turnstileSize }}
                  onSuccess={onVerifySuccess}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  loadingText="送信中"
                  colorScheme="teal"
                >
                  送信
                </Button>
              </Stack>
            </Center>
          </Stack>
        </form>
      )}
    </Box>
  );
}
