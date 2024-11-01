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

TOP ページのお知らせの更新には[microCMS](https://uec-imas.microcms.io/apis/notices)を用います．右上の「追加」ボタンからお知らせのタイトルと内容を入力し，公開してください．

WORKS ページの制作物(会報)追加は`/lib/bulletins.ts`の`bulletins`の先頭に以下の形式で追加してください．画像の形式は WebP でお願いします．

```diff
  export const bulletins: Bulletin[] = [
+   {
+     id: 9
+     title: "タイトル",
+     image: "/bulletin/表紙画像.webp",
+     publishedYear: "発行年",
+     color: "「断片、〇〇。」の色",
+   },
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

トップ画像を替える際は`/public/top.webp`を差し替えてデプロイしてください．

## その他

動作には.env.local ファイルが必要となります．

```.env.local
RESEND_API_KEY="your_resend_api_key"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_turnstile_site_key"
TURNSTILE_SECRET_KET="your_turnstile_secret_key"
EMAIL="your_email_address"
MICROCMS_SERVICE_DOMAIN="service_domain"
MICROCMS_API_KEY="your_microcms_api_key"
MICROCMS_WEBHOOK_SIGNATURE_SECRET="your_webhook_signature_secret"
```

詳細は[@amatkmr](https://twitter.com/amatkmr)までお願いします．
