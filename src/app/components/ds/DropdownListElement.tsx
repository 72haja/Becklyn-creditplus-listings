import React, { useMemo } from 'react';
import { FiCheck } from "react-icons/fi";

export type DropdownListElementProps = {
  label: string,
  active: boolean,
  onClick?: () => void,
};

export const DropdownListElement = ({
  active = false,
  ...props
}) => {

  return (
    <div className={['flex gap-2 items-center px-[15px] py-[13px] ', active ? 'bg-primary-50' : 'bg-gray-50'].join(' ')} onClick={props.onClick}>
      <span className={
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


