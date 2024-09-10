import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';
import { Pagination } from '../../app/components/pagination/Pagination';

const meta = {
  title: 'Pagination/Pagination',
  component: Pagination,
  parameters: {},
  tags: ['autodocs'],
  args: { onCurrentChange: fn() },
  render: function Render(args): JSX.Element {
    const [{ current }, updateArgs] = useArgs();

    function onCurrentChange(value: number) {
      updateArgs({ current: value });
    }

    return <Pagination
      {...args}
      current={current}
      onCurrentChange={onCurrentChange}
    />;
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyOnePage: Story = {
  args: {
    current: 1,
    total: 1,
  },
};

export const FivePages: Story = {
  args: {
    current: 1,
    total: 5,
  },
};

export const CurrentNr1: Story = {
  args: {
    current: 1,
    total: 10,
  },
};

export const CurrentNr3: Story = {
  args: {
    current: 3,
    total: 10,
  },
};

export const CurrentNr5: Story = {
  args: {
    current: 5,
    total: 10,
  },
};

export const CurrentNr10: Story = {
  args: {
    current: 10,
    total: 10,
  },
};