import { DropdownListElement } from '@/app/components/ds/DropdownListElement';
import { useMemo } from 'react';

export type DropdownListProps = {
  active: boolean,
  items: string[] | { label: string, value: string }[],
  value: string,
  onChange: (value: string) => void,
  itemsAreStrings: boolean,
  search?: string,
};

export const DropdownList = ({
  active = false,
  ...props
}) => {

  const filteredItems: string[] | { label: string, value: string }[] = useMemo(() => {
    if (props.search) {
      return props.items
        .filter((item: string | { label: string, value: string }) => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(props.search.toLowerCase());
          }
          return item.label.toLowerCase().includes(props.search.toLowerCase());
        })
        .toSorted(
          (a: string | { label: string, value: string }, b: string | { label: string, value: string }) => {
            if (typeof a === 'string') {
              return a.localeCompare(b as string);
            }
            return a.label.localeCompare((b as { label: string, value: string }).label);
          }
        );
    }
    return props.items;
  }, [props.items, props.search]);


  return (
    <div className={['absolute w-full top-0 left-0 shadow-menu-shadow bg-gray-50 rounded-lg overflow-clip', active ? 'grid' : 'hidden'].join(' ')} onClick={props.onClick}>
      {
        props.itemsAreStrings
          ? (filteredItems as string[]).map((item, index) => {
            return (
              <DropdownListElement key={index} label={item} active={item === props.value} onClick={() => props.onChange(item)} />
            );
          })
          : (filteredItems as { label: string, value: string }[]).map((item, index) => {
            return (
              <DropdownListElement key={index} label={item.label} active={item.value === props.value} onClick={() => props.onChange(item.value)} />
            );
          })
      }
    </div>
  );
}


