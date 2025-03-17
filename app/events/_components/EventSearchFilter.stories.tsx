import type { Meta, StoryObj } from '@storybook/react';
import { EventSearchFilter } from './EventSearchFilter';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Events/EventSearchFilter',
  component: EventSearchFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventSearchFilter>;

export default meta;
type Story = StoryObj<typeof EventSearchFilter>;

export const Default: Story = {
  args: {
    onSearch: action('onSearch'),
    onCategoryChange: action('onCategoryChange'),
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <EventSearchFilter {...args} />
    </div>
  ),
};

export const WithCustomCategories: Story = {
  args: {
    onSearch: action('onSearch'),
    onCategoryChange: action('onCategoryChange'),
    categories: ['すべて', 'バレエ', 'ジャズ', 'クラシック', '演劇', 'コンテンポラリー', 'ストリートダンス', '伝統芸能'],
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <EventSearchFilter {...args} />
    </div>
  ),
}; 