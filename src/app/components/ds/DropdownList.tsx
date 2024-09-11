import { DropdownListElement } from '@/app/components/ds/DropdownListElement';
import { DropdownListElementType } from '@/app/types/DropdownListElementType';
import { useMemo } from 'react';

export type DropdownListProps = {
  active: boolean,
  items: string[] | DropdownListElementType[],
  value: string,
  onChange: (value: string) => void,
  itemsAreStrings: boolean,
  search?: string,
};

export const DropdownList = ({
  active = false,
  ...props
}) => {

  const filteredItems: string[] | DropdownListElementType[] = useMemo(() => {
    if (props.items.length === 0) {
      return ['Keine Ergebnisse']
    }

    if (props.search) {
      return props.items
        .filter((item: string | DropdownListElementType) => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(props.search.toLowerCase());
          }
          return item.label.toLowerCase().includes(props.search.toLowerCase());
        })
        .toSorted(
          (a: string | DropdownListElementType, b: string | DropdownListElementType) => {
            if (typeof a === 'string') {
              return a.localeCompare(b as string);
            }
            return a.label.localeCompare((b as DropdownListElementType).label);
          }
        );
    }
    return props.items;
  }, [props.items, props.search]);


  return (
    <div
      className={[
        'absolute w-full top-0 left-0 shadow-menu-shadow bg-gray-50 rounded-lg overflow-clip',
        active ? 'grid' : 'hidden'
      ].join(' ')}
      onClick={props.onClick}
    >
      {
        props.itemsAreStrings
          ? (filteredItems as string[]).map((item, index) => {
            return (
              <DropdownListElement
                key={index}
                label={item}
                active={item === props.value}
                disabled={props.items.length === 0}
                onClick={() => props.onChange(item)}
              />
            );
          })
          : (filteredItems as DropdownListElementType[]).map((item, index) => {
            return (
              <DropdownListElement
                key={index}
                label={item.label}
                active={item.value === props.value}
                disabled={item.disabled}
                onClick={() => props.onChange(item.value)}
              />
            );
          })
      }
    </div>
  );
}


