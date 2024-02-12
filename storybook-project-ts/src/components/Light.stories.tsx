import { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta = {
  component: Light,
  title: "Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["green", "yellow", "red"],
    },
  },
} satisfies Meta<typeof Light>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    variant: "green",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Group: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
