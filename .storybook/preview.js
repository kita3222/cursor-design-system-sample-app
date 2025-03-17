import React from "react";
import "./fix-tailwind.css";
import "../app/globals.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans">
        <Story />
      </div>
    ),
  ],
};

export default preview;
