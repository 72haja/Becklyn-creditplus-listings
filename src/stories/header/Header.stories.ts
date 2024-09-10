import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from '../../app/components/Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
  },
  tags: ['autodocs'],
  args: { onCurrentChange: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentNr1: Story = {
};
