import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "success", "warning", "error", "info"],
      description: "バッジのバリエーション（色）",
    },
    style: {
      control: "select",
      options: ["filled", "outline"],
      description: "バッジのスタイル（塗りつぶしまたはアウトライン）",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "デフォルト",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "セカンダリー",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "成功",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "警告",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "エラー",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    children: "情報",
    variant: "info",
  },
};

export const OutlineDefault: Story = {
  args: {
    children: "アウトライン",
    variant: "default",
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: "アウトライン",
    variant: "secondary",
  },
};

export const OutlineSuccess: Story = {
  args: {
    children: "アウトライン",
    variant: "success",
  },
};

export const OutlineWarning: Story = {
  args: {
    children: "アウトライン",
    variant: "warning",
  },
};

export const OutlineError: Story = {
  args: {
    children: "アウトライン",
    variant: "error",
  },
};

export const OutlineInfo: Story = {
  args: {
    children: "アウトライン",
    variant: "info",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
        アイコン付き
      </>
    ),
    variant: "info",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "カスタムクラス",
    variant: "default",
    className: "px-6 py-3 text-lg font-bold",
  },
};
