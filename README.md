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
+     image: "/bulletin/表紙画像のファイル名.webp",
+     publishedYear: "発行年",
+     color: "表紙のロゴの色",
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

トップ画像を替える際は`/top/`に画像を追加し，`/app/page.tsx`のトップ画像読み込み部分とトップ画像指定部分のパスを書き換えてください．

```diff
  // トップ画像読み込み
- preload("/top/2023.webp", {
+ preload("/top/追加画像のファイル名.webp", {
    as: "image",
  });
```

```diff
  // トップ画像指定
- backgroundImage: 'url("/top/2023.webp")',
+ backgroundImage: 'url("/top/追加画像のファイル名.webp")',
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
