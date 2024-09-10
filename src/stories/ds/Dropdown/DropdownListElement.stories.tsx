import type { Meta, StoryObj } from '@storybook/react';
import { DropdownListElement } from '../../../app/components/ds/DropdownListElement';
import { fn } from '@storybook/test';

const meta = {
  title: 'ds/Dropdown/DropdownListElement',
  component: DropdownListElement,
  parameters: {
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof DropdownListElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Berlin',
  }
};

export const Active: Story = {
  args: {
    label: 'Bremen',
    active: true,
  }
};
