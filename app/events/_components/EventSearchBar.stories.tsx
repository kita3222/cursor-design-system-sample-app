import type { Meta, StoryObj } from '@storybook/react';
import { EventSearchBar } from './EventSearchBar';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Events/EventSearchBar',
  component: EventSearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventSearchBar>;

export default meta;
type Story = StoryObj<typeof EventSearchBar>;

export const Default: Story = {
  args: {
    onSearch: action('onSearch'),
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <EventSearchBar {...args} />
    </div>
  ),
}; 