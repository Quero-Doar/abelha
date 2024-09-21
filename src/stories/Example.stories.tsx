import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const Example: React.FC = () => (
  <div className="rounded-full p-8 bg-red-500">
    <p>Ixxto err um exemplorr</p>
  </div>
);

const meta = {
  component: Example,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
