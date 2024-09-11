import { DropdownListElementType } from '@/app/types/DropdownListElementType';
import { FiCheck } from "react-icons/fi";

export type DropdownListElementProps = DropdownListElementType & {
  onClick: () => void,
};

export const DropdownListElement = ({
  active = false,
  ...props
}) => {

  function handleClick() {
    if (props.disabled) return;
    props.onClick();
  }

  return (
    <div
      className={[
        'flex gap-2 items-center px-[15px] py-[13px] ',
        active ? 'bg-primary-50' : 'bg-gray-50',
        props.disabled && 'opacity-50'
      ].join(' ')}
      onClick={handleClick}
    >
      <span
        className={
          ['unnamed-character-style-8 w-full', active ? 'text-primary-700' : 'text-gray-900'].join(' ')
        }
      >
        {props.label}
      </span>
      {
        active && <FiCheck className='size-[21px] text-primary-700' />
      }
    </div>
  );
}


