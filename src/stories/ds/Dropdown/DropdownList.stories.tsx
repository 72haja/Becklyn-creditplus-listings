import type { Meta, StoryObj } from '@storybook/react';
import { DropdownList } from '../../../app/components/ds/DropdownList';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta = {
  title: 'ds/Dropdown/DropdownList',
  component: DropdownList,
  parameters: {
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    function onUpdateIsOpen(value: boolean) {
      setIsOpen(value);
    }

    return <div>
      <div className='w-1/2'>
        <button 
          className='w-max'
          onClick={() => onUpdateIsOpen(!isOpen)}
        >
          Toggle Dropdown
        </button>
        <div className='relative'>
          <DropdownList
            {...args}
            active={isOpen}
            value={value}
            onChange={setValue}
            />
        </div>
      </div>
      <div>Selected value: {value}</div>
    </div>
  },
} satisfies Meta<typeof DropdownList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Strings: Story = {
  args: {
    items: ['Berlin', 'Bremen', 'Hamburg', 'München'],
    itemsAreStrings: true,
  }
};

export const Objects: Story = {
  args: {
    items: [
      { label: 'Berlin', value: 'berlin' },
      { label: 'Bremen', value: 'bremen' },
      { label: 'Hamburg', value: 'hamburg' },
      { label: 'München', value: 'münchen' },
    ],
    itemsAreStrings: false,
  }
};
