import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export interface ButtonProps {
  direction: 'next' | 'prev';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PaginationButton = ({
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      className={"border-none flex gap-1 items-center h-[15px]"}
      onClick={props.onClick}
    >
      { 
        props.direction === 'prev' && <FiArrowLeft className='text-gray-600 size-[19px]' />
      }
      <span
        className='font-gotham font-medium text-text-sm text-gray-600
          tablet:block
          hidden'
      >
        { props.direction === 'prev' ? 'Vorherige' : 'Nächste' }
      </span>
      {
        props.direction === 'next' && <FiArrowRight className='text-gray-600 size-[19px]' />
      }
    </button>
  );
};
