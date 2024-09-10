import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { StellenListButton } from '../../app/components/StellenList/StellenListButton';

const meta = {
  title: 'StellenList/StellenListButton',
  component: StellenListButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof StellenListButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
