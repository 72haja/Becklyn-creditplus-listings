import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../../../app/components/ds/Dropdown';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta = {
  title: 'ds/Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  render: function Render(args) {
    const [value, setValue] = useState('');

    return <div>
      <Dropdown
        className='w-full'
        {...args}
        value={value}
        onChange={setValue}
      />

      <div>Selected value: {value}</div>
    </div>
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Strings: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: ['Berlin', 'Bremen', 'Hamburg', 'München'],
  }
};

export const Objects: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: [
      { label: 'Berlin', value: 'berlin' },
      { label: 'Bremen', value: 'bremen' },
      { label: 'Hamburg', value: 'hamburg' },
      { label: 'München', value: 'münchen' },
    ],
  }
};

export const NoItemsInList_String: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: [],
    itemsAreStrings: true,
  }
};

export const NoItemsInList_Object: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: [],
  }
};

export const Disabled: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: ['Berlin', 'Bremen', 'Hamburg', 'München'],
    disabled: true,
  }
};

export const Loading: Story = {
  args: {
    labe: 'Stadt',
    placeholder: 'Wähle eine Stadt',
    items: ['Berlin', 'Bremen', 'Hamburg', 'München'],
    loading: true,
  }
};
