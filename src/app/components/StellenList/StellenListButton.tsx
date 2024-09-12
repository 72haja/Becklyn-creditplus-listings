import { FiArrowUpRight } from "react-icons/fi";

export interface ButtonProps {
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const StellenListButton = ({
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className="border-none flex gap-[8px] items-center h-[18px]"
      {...props}
    >
      <span
        className='font-gotham font-medium text-text-md text-primary
          tablet:block
          hidden'
      >
        Stelle anzeigen
      </span>
      <FiArrowUpRight className='w-5 h-5 text-primary' />
    </button>
  );
};
