import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().min(1, "名前は必須です").max(20, "名前は20文字以内で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください").max(254, "メールアドレスが長すぎます"),
  category: z.enum(["入会希望", "サークルについて", "このサイトについて", "その他"], {
    errorMap: () => ({ message: "カテゴリーを選択してください" }),
  }),
  content: z.string().min(1, "お問い合わせ内容は必須です").max(200, "お問い合わせ内容は200文字以内で入力してください"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = emailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "入力内容に誤りがあります", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, category, content } = result.data;

    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      console.error("CONTACT_EMAIL is not defined");
      return NextResponse.json(
        { error: "サーバー設定エラーが発生しました" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "D@NPEN お問い合わせ通知 <onboarding@resend.dev>",
      to: contactEmail,
      subject: "【D@NPEN】お問い合わせがありました",
      react: EmailTemplate({ name, email, category, content }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
