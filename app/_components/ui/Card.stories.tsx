import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "./Button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "flat"],
      description: "カードのバリエーション",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <CardHeader>
          <CardTitle>カードタイトル</CardTitle>
          <CardDescription>カードの説明文をここに表示します。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            カードのコンテンツ部分です。テキストや画像、その他のコンポーネントを配置できます。
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">アクション</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: (
      <>
        <CardHeader>
          <CardTitle>アウトラインカード</CardTitle>
          <CardDescription>ボーダーのみのカードスタイルです。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            背景が透明で、ボーダーのみが表示されるカードです。軽量な印象を与えます。
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            詳細
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const Flat: Story = {
  args: {
    variant: "flat",
    children: (
      <>
        <CardHeader>
          <CardTitle>フラットカード</CardTitle>
          <CardDescription>背景色のみのカードスタイルです。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            シャドウがなく、背景色のみのシンプルなカードです。フラットデザインに適しています。
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm">
            閉じる
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>フッターなしカード</CardTitle>
          <CardDescription>
            フッターが不要な場合のサンプルです。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            必要に応じて、CardHeader、CardContent、CardFooterなどのサブコンポーネントを
            自由に組み合わせることができます。
          </p>
        </CardContent>
      </>
    ),
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <CardContent>
        <p>
          ヘッダーやフッターを使わずに、コンテンツのみのシンプルなカードも作成できます。
          必要最小限の要素だけを使ったシンプルな表示に適しています。
        </p>
      </CardContent>
    ),
  },
};

export const Interactive: Story = {
  args: {
    className: "hover:shadow-lg transition-shadow cursor-pointer",
    children: (
      <>
        <CardHeader>
          <CardTitle>インタラクティブカード</CardTitle>
          <CardDescription>hover時にシャドウが強調されます。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            カードにクラスを追加することで、ホバー効果などのインタラクションを実装できます。
            カード全体をクリック可能な領域として使用する場合に便利です。
          </p>
        </CardContent>
      </>
    ),
  },
};
