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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<Contact>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", content: "" },
  });

  const onSubmit = handleSubmit(async (data: Contact) => {
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  });

  return (
    <Box>
      {isSubmitted && (
        <Text pt="8px">送信しました。返信までしばらくお待ちください。</Text>
      )}
      {!isSubmitted && (
        <form onSubmit={onSubmit} method="POST">
          <Stack spacing={4} pt="8px">
            <FormControl isRequired>
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
            <FormControl isRequired>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="dentsutaro@uec.ac.jp"
                {...register("email")}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
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
              <Button
                type="submit"
                disabled={!isValid}
                isLoading={isSubmitted}
                colorScheme="teal"
              >
                送信
              </Button>
            </Center>
          </Stack>
        </form>
      )}
    </Box>
  );
}
