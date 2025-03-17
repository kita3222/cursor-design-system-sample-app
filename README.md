# cursor-design-system-sample-app

- Cursor上でデザインシステムを管理しながらシステム開発を行うためのサンプルリポジトリ
- 最低限のデザインシステムを構築した上で、サンプルページを1ページ構築した状態

## 技術スタック

- **フレームワーク**: [Next.js 14](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIドキュメント**: [Storybook](https://storybook.js.org/)
- **バックエンド**: [Supabase](https://supabase.com/) (計画中)
- **テスト**: [Vitest](https://vitest.dev/)

## プロジェクト構造

プロジェクトは以下のパターンに基づいて構成されています：

```
app
├── <Segment> (例: events, dashboard, settings など)
│  ├── page.tsx           # ページコンポーネント
│  ├── layout.tsx         # セグメント特有のレイアウト
│  ├── _components/       # セグメント特有のコンポーネント
│  └── ...
├── _components/          # アプリケーション全体で使用する汎用コンポーネント
│  ├── ui/                # 基本的なUIコンポーネント
│  ├── layout/            # レイアウト関連コンポーネント
│  └── ...
├── _lib/                 # アプリケーション全体で使用する汎用関数
└── ...
```

## 開発環境の準備

### 必要条件

- Node.js 18.17.0以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd dance

# 依存関係のインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
# 開発サーバーの起動
npm run dev
# または
yarn dev
```

[http://localhost:3000](http://localhost:3000) にアクセスして開発中のアプリケーションを確認できます。

### Storybookの起動

UIコンポーネントの開発とドキュメント化にはStorybookを使用しています。

```bash
npm run storybook
# または
yarn storybook
```

[http://localhost:6006](http://localhost:6006) にアクセスしてコンポーネントカタログを確認できます。

## 開発ガイドライン

### コーディング規約

- コンポーネントは機能ごとにセグメントに分離し、適切な場所に配置してください
- UIコンポーネントは`app/_components/ui`に配置してください
- セグメント特有のコンポーネントは各セグメントの`_components`ディレクトリに配置してください
- TypeScriptの型は厳密に定義してください
- Storybookを使用してコンポーネントをドキュメント化してください

### ブランチ戦略

- `main`: プロダクション環境用ブランチ
- `develop`: 開発用ブランチ
- `feature/*`: 新機能開発用ブランチ
- `fix/*`: バグ修正用ブランチ

## ビルドと本番環境

```bash
# 本番用ビルド
npm run build
# または
yarn build

# 本番環境での実行
npm run start
# または
yarn start
```

## ライセンス

© 2023 Dance Team. All rights reserved.
