import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link"],
      description: "ボタンのバリエーション",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "ボタンのサイズ",
    },
    fullWidth: {
      control: "boolean",
      description: "幅を100%にするかどうか",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態かどうか",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "プライマリボタン",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "セカンダリボタン",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "アウトラインボタン",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "ゴーストボタン",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "リンクボタン",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "小サイズ",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "中サイズ",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "大サイズ",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: "🔍",
    size: "icon",
  },
};

export const FullWidth: Story = {
  args: {
    children: "幅100%のボタン",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "無効化ボタン",
    disabled: true,
  },
};

export const CombinationExample: Story = {
  args: {
    children: "組み合わせ例",
    variant: "outline",
    size: "lg",
  },
};
