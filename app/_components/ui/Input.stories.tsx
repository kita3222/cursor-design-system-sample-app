import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態かどうか",
    },
    error: {
      control: "boolean",
      description: "エラー状態かどうか",
    },
    helperText: {
      control: "text",
      description: "ヘルパーテキスト（説明文やエラーメッセージ）",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
      description: "入力タイプ",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "入力してください",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "入力してください",
    value: "サンプルテキスト",
  },
};

export const WithHelperText: Story = {
  args: {
    placeholder: "入力してください",
    helperText: "この項目はオプションです",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "入力してください",
    error: true,
    helperText: "この項目は必須です",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "入力してください",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "パスワードを入力",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "メールアドレスを入力",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "数値を入力",
  },
};

export const Required: Story = {
  args: {
    placeholder: "必須項目",
    required: true,
  },
};
