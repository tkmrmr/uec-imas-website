export const EmailTemplate = ({
  name,
  email,
  content,
}: {
  name: string;
  email: string;
  content: string;
}) => {
  return (
    <div>
      <p>{name} さんよりお問い合わせがありました。</p>
      <dl>
        <dt>【お名前】</dt>
        <dd>{name}</dd>
        <dt>【メールアドレス】</dt>
        <dd>{email}</dd>
        <dt>【お問い合わせ内容】</dt>
        <dd>{content}</dd>
      </dl>
    </div>
  );
};
