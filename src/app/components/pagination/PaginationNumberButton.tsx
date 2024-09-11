import { useMemo } from 'react';

export interface ButtonProps {
  active?: boolean;
  number: number;
  isPlaceholder?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PaginationNumberButton = ({
  active = false,
  isPlaceholder = false,
  ...props
}: ButtonProps) => {

  const [fontColor, bgColor] = useMemo(() => {
    if (isPlaceholder) {
      return ['text-gray-600', 'bg-transparent'];
    }
    if (active) {
      return ['text-primary', 'bg-primary-75 hover:bg-primary-100 active:bg-primary-200'];
    }
    return ['text-gray-600', 'bg-transparent hover:bg-gray-100 active:bg-gray-200'];
  }, [active, isPlaceholder]);


  return (
    <button
      type="button"
      className={["border-none rounded-full grid place-items-center size-10", bgColor].join(' ')}
      {...props}
      disabled={isPlaceholder}
    >
      <span
        className={['font-gotham font-medium text-text-sm', fontColor].join(' ')}
      >
        {isPlaceholder
          ? '...'
          : props.number
        }
      </span>
    </button>
  );
};
