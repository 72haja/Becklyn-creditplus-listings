import { DropdownActivator } from '@/app/components/ds/DropdownActivator';
import { DropdownList } from '@/app/components/ds/DropdownList';
import { useMemo, useState } from 'react';

export type DropdownProps = {
  label?: string,
  placeholder: string,
  items: string[] | { label: string, value: string }[],
  disabled?: boolean,
  onChange: (value: string) => void,
  value?: string,
};

export const Dropdown = ({
  ...props
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  function onItemChange(value: string) {
    setSearch('');
    if(value === props.value) {
      props.onChange('');
    } else {
      props.onChange(value);
    }
  }

  function onSearchChange(value: string) {
    setSearch(value);
  }

  const itemsAreStrings = props.items.every((item: string) => typeof item === 'string');

  const shownValue = useMemo(() => itemsAreStrings
    ? props.value
    : props.items.find((item: { label: string, value: string }) => item.value === props.value)?.label
  , [props.value, props.items]);

  return (
    <div className='relative'>
      <DropdownActivator
        isOpen={isOpen}
        key={props.value}
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled}
        search={search}
        value={shownValue}
        itemsAreStrings={itemsAreStrings}
        onChange={setSearch}
        onSearchChange={onSearchChange}
        onUpdateIsOpen={setIsOpen}
        onClear={() => onItemChange('')}
        list={<DropdownList
          active={isOpen}
          items={props.items}
          search={search}
          value={props.value}
          itemsAreStrings={itemsAreStrings}
          onChange={onItemChange}
        />}
      />
    </div>
  );
}


