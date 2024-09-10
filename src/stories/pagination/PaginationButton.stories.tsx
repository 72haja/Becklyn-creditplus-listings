import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PaginationButton } from '../../app/components/pagination/PaginationButton';

const meta = {
  title: 'Pagination/PaginationButton',
  component: PaginationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof PaginationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vorherige: Story = {
  args: {
    direction: 'prev',
  },
};

export const Nächste: Story = {
  args: {
    direction: 'next',
  },
};
