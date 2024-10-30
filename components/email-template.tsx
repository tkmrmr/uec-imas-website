export const EmailTemplate = ({
  name,
  email,
  category,
  content,
}: {
  name: string;
  email: string;
  category: "入会希望" | "サークルについて" | "このサイトについて" | "その他";
  content: string;
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        padding: "20px",
        borderRadius: "10px",
        margin: "0 auto",
      }}
    >
      <div>
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          {name} さんよりD@NPENへのお問い合わせがありました。
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <p
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #ccc",
                fontSize: "18px",
              }}
            >
              名前
            </p>
            <p style={{ marginTop: "10px" }}>{name}</p>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #ccc",
                fontSize: "18px",
              }}
            >
              メールアドレス
            </p>
            <p style={{ marginTop: "10px" }}>{email}</p>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #ccc",
                fontSize: "18px",
              }}
            >
              お問い合わせ内容
            </p>
            <p style={{ marginTop: "10px" }}>{category}</p>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid #ccc",
                fontSize: "18px",
              }}
            >
              お問い合わせ内容
            </p>
            <p style={{ marginTop: "10px" }}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
