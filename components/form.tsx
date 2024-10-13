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
  Spinner,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";

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
  token: z.string(),
});

type Contact = z.infer<typeof contactSchema>;

export default function Form() {
  const [isOnLoad, setisOnLoad] = useState(false);
  const recaptchaSize = useBreakpointValue({
    base: "compact",
    sm: "normal",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitSuccessful, isSubmitting },
  } = useForm<Contact>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", content: "" },
  });

  const onSubmit = handleSubmit(async (data: Contact) => {
    if (isValid) {
      await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
      });
    }
  });

  const onChange = (value: string) => {
    setValue("token", value);
    console.log("Captcha value:", value);
  };

  const OnLoad = () => {
    setisOnLoad(true);
  };

  return (
    <Box>
      {isSubmitSuccessful ? (
        <Text pt="8px">
          送信しました。
          <br />
          担当者が確認しますので、返信までしばらくお待ちください。
        </Text>
      ) : (
        <form onSubmit={onSubmit} method="POST">
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
              <Stack spacing={4}>
                <Box>
                  {!isOnLoad && (
                    <Box
                      textAlign="center"
                      my={4}
                      w={{ base: "164px", sm: "304px" }}
                      h={{ base: "112px", sm: "46px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Spinner
                        size={{ base: "xl", sm: "lg" }}
                        lineHeight="50%"
                      />
                    </Box>
                  )}
                  <Box
                    style={{
                      visibility: isOnLoad ? "visible" : "hidden",
                    }}
                  >
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={onChange}
                      size={recaptchaSize}
                      asyncScriptOnLoad={OnLoad}
                    />
                  </Box>
                </Box>
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
