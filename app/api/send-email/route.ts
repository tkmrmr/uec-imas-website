import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, content } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "dach1024@yahoo.co.jp",
      subject: "【D@NPEN】お問い合わせがありました",
      react: EmailTemplate({ name, email, content }),
    });
    if (error) {
      return NextResponse.json({ error: "メールの送信に失敗しました" });
    }
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "エラーが発生しました" });
  }
}
