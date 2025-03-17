import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../_components/layout/Header';
import { Footer } from '../../_components/layout/Footer';
import { EventListPage } from './EventListPage';

const meta = {
  title: 'Layout/PageLayout',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const EventsPageLayout: Story = {
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

export const EventsPageLayoutMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
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