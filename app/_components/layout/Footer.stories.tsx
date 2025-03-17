import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 