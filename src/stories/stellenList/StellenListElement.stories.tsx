import type { Meta, StoryObj } from '@storybook/react';
import { StellenListElement } from '../../app/components/StellenList/StellenListElement';

const meta = {
  title: 'StellenList/StellenListElement',
  component: StellenListElement,
  parameters: {
  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof StellenListElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'IT & Projektmanagement',
    jobTitle: '(Junior) Full Stack Developer (m/w/d)',
    location: 'Stuttgart',
    time: 'Vollzeit',
  }
};
