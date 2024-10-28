# uec-imas-website

## 環境

[Node.js](https://nodejs.org/)（推奨バージョン: 20.x）

## 導入

### リポジトリをクローン

```bash
git clone https://github.com/tkmrmr/uec-imas-website.git
```

### パッケージのインストール

```bash
cd uec-imas-website
npm install
```

### 開発サーバ起動

```bash
npm run dev
```

http://localhost:3000 にアクセスしてください．

## コンテンツの編集の仕方

TOP のお知らせは`/lib/notices.ts`の`notices`に以下の形式で追加してください．

```diff-typescript
export const notices: Notice[] = [
+ {
+   date: "edit_date",
+   title: "notice_title",
+   content: "notice_content",
+ },
  {
    date: "2024/10/25",
    title: "ホームページをリニューアルしました！",
    content:
      "電通大アイマス研の旧ホームページは長らく更新が途絶えていましたが、この度リニューアルして再開しました。",
  },
];
```

WORKS の制作物(会報)追加は`lib/bulletins.ts`の`bulletins`に以下の形式で追加してください．

```diff-typescript
export const bulletins: Bulletin[] = [
+   {
+   id: 9
+   title: "new_bulletin_title",
+   image: "/bulletin/new_bulletin_image.webp",
+   publishedYear: "new_bulletin_published_year",
+   color: "new_bulletin_logo_color",
+ },
  {
    id: 8,
    title: "D@NPEN会報第八号",
    image: "/bulletin/vol_8.webp",
    publishedYear: "2022",
    color: "#E06A8F",
  },
  ...
]
```

## その他

動作には.env.local ファイルが必要となります．

```.env.local
RESEND_API_KEY="your_resend_api_key"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_turnstile_site_key"
TURNSTILE_SECRET_KET="your_turnstile_secret_key"
EMAIL="your_email_address"
```

詳細は[@amatkmr](https://twitter.com/amatkmr)までお願いします．
