# AGENTS.md

このプロジェクトのコーディング規約とルールをまとめたガイドです。
AIコーディングエージェント(Cursor、Claude Codeなど)はこのファイルの指示に従ってください。

## プロジェクト概要

- Next.js 16(App Router) + TypeScript + Tailwind CSS v4
- ヘッドレスCMS: microCMS
- デプロイ先: Vercel

## ディレクトリ構成

- `app/` — ページ・ルーティング(App Router)
- `components/` — 再利用可能なUIコンポーネント
- `lib/` — CMS取得処理・ユーティリティ関数
- `types/` — TypeScriptの型定義

## コーディングルール

- コンポーネントは関数コンポーネント + TypeScriptで記述する(class componentは使わない)
- スタイリングはTailwind CSSのユーティリティクラスのみを使用し、CSS Modulesやstyled-componentsは使わない
- カラーは以下のテーマカラーを使用すること(グローバルCSSの@theme参照):
  - 背景: `#FEFEFE`
  - サブ背景: `#F8F8F8`
  - アクセント: `#2059A6`
  - テキスト: `#2C2C2A`
- 画像は必ず`next/image`の`<Image>`コンポーネントを使用する(`<img>`タグは使わない)
- データ取得はServer Componentを優先し、必要な場合のみ`"use client"`を明示する
- microCMSからのデータ取得処理は`lib/microcms.ts`に集約する

## 命名規則

- コンポーネントファイル: PascalCase(例: `WorkCard.tsx`)
- 関数・変数: camelCase
- 型定義: `types/`配下に配置し、インターフェース名は`I`prefixを付けない(例: `WorkItem`)

## 禁止事項

- 非推奨のPages Router(`pages/`ディレクトリ)は使用しない
- インラインスタイル(`style={{}}`)は原則使用しない
- APIキーやシークレットをコード内にハードコーディングしない(`.env.local`を使用する)
