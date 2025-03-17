import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    isLoggedIn: false,
  },
};

export const MobileLoggedIn: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    isLoggedIn: true,
  },
}; 