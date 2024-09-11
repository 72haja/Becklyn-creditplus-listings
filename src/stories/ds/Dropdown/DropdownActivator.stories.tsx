import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/internal/preview-api';
import { DropdownActivator } from '../../../app/components/ds/DropdownActivator';

const meta = {
  title: 'ds/Dropdown/DropdownActivator',
  component: DropdownActivator,
  tags: ['autodocs'],
  args: {},
  render: function Render(args): JSX.Element {
    const [{ isOpen }, updateArgs] = useArgs();

    function onUpdateIsOpen(value: boolean) {
      updateArgs({ isOpen: value });
    }

    return <DropdownActivator
      {...args}
      isOpen={isOpen}
      onUpdateIsOpen={onUpdateIsOpen}
    />;
  },
} satisfies Meta<typeof DropdownActivator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Standort',
    placeholder: "Wähle einen Standort",
  }
};

export const IsOpen: Story = {
  args: {
    label: 'Standort',
    placeholder: "Wähle einen Standort",
    isOpen: true,
  }
};
