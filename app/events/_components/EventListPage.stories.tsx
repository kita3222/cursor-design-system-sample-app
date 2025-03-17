import type { Meta, StoryObj } from '@storybook/react';
import { EventListPage } from './EventListPage';
import { Header } from '../../_components/layout/Header';
import { Footer } from '../../_components/layout/Footer';

const meta = {
  title: 'Pages/EventListPage',
  component: EventListPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EventListPage>;

export default meta;
type Story = StoryObj<typeof EventListPage>;

export const Default: Story = {};

export const WithLayout: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <EventListPage />
      </main>
      <Footer />
    </div>
  ),
}; 