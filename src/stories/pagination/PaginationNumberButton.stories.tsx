import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PaginationNumberButton } from '../../app/components/pagination/PaginationNumberButton';

const meta = {
  title: 'Pagination/PaginationNumberButton',
  component: PaginationNumberButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof PaginationNumberButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
    number: 1,
  },
};

export const Inactive: Story = {
  args: {
    number: 2,
  },
};

export const Placeholder: Story = {
  args: {
    number: 3,
    isPlaceholder: true,
  },
};