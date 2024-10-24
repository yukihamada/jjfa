# JJFA - Jiu-Jitsu For ALL

JJFAは、柔術の魅力を世界中の人々に届けることを目指すプロジェクトです。Web3技術を活用して、柔術コミュニティの持続可能な成長と公平な価値分配を実現します。

## 主な機能

- 🥋 柔術大会の情報共有と参加登録
- 👥 グローバルなコミュニティプラットフォーム
- 📚 レベル別の技術解説とQ&A
- 🌏 国際交流の促進
- 🎯 トークンを活用したインセンティブシステム

## 技術スタック

- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui
- Supabase (認証・データベース)
- i18n (多言語対応)

## 開発環境のセットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/your-username/jjfa.git
cd jjfa
```

2. 依存関係のインストール:
```bash
npm install
# または
yarn install
```

3. 環境変数の設定:
`.env.example`をコピーして`.env`を作成し、必要な環境変数を設定します:
```bash
cp .env.example .env
```

4. 開発サーバーの起動:
```bash
npm run dev
# または
yarn dev
```

## 環境変数

| 変数名 | 説明 |
|--------|------|
| VITE_SUPABASE_URL | SupabaseのプロジェクトURL |
| VITE_SUPABASE_ANON_KEY | Supabaseの匿名キー |

## コントリビューション

プロジェクトへの貢献を歓迎します！以下の手順で参加できます：

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

- Website: [https://jjforall.com](https://jjforall.com)
- Email: info@jjforall.com