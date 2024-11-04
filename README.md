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

TOP ページのお知らせの更新と WORKS ページの会報追加には[microCMS](https://uec-imas.microcms.io)を用います．それぞれ「お知らせ」「会報」という API が割り当てられているので，各ページ右上の「追加」ボタンからコンテンツを追加して公開してください．
なお，会報を追加する際，「表紙」には WebP 形式の表紙画像（650×900 以上，なるべく 150KB 以下）を，「イメージカラー」には表紙のキャッチコピー「断片、〇〇。」のカラーコードを割り当ててください．WebP への変換方法がわからない場合は[これ](https://github.com/tkmrmr/converter-to-webp/releases/tag/v1.0)を使ってください．

トップ画像を替える際は`/public/top.webp`を差し替えてデプロイしてください．

## その他

ローカル環境での動作には.env.local ファイルが必要となります．

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
