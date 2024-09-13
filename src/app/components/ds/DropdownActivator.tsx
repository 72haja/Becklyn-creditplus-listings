import React, { useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export type DropdownProps = {
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  loading?: boolean,
  isOpen: boolean,
  value?: string,
  search?: string,
  onChange?: (value: string) => void,
  onUpdateIsOpen: (isOpen: boolean) => void,
  onClear?: () => void,
  list: React.ReactNode,
};

export const DropdownActivator = ({
  isOpen = false,
  ...props
}) => {

  function useOutsideAlerter(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          props.onUpdateIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function handleOnClick() {
    if (props.disabled || props.loading) return
    props.onUpdateIsOpen(true);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Backspace' && props.search.length < 1) {
      props.onClear();
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`w-full group relative ${props.disabled && 'opacity-30'}`}
    >
      {
        props.label &&
        <span className='unnamed-character-style-9 mb-[9px]'>{props.label}</span>
      }
      <div
        className={`grid items-center gap-1 bg-gray-50
          ${props.value ? 'grid-cols-[max-content_1fr_max-content]' : 'grid-cols-[1fr_max-content]'}
          relative w-full border rounded-lg pl-[14px] pr-[9px] py-[13px]
          hover:border-[#838383]
          ${isOpen ? '!border-primary-300' : 'border-[#C3C3C3]'}
          transition duration-150 ease-in-out
          focus-within:!ring-4 focus-within:!ring-primary-100
          focus-within:!border-primary-300 
          ${props.loading && 'cursor-wait'}`}
        onClick={handleOnClick}
      >
        {
          props.value && <span className='unnamed-character-style-8 text-gray-900 group-hover:text-gray-900 
              group-focus:text-gray-900'>
            {typeof props.value === 'string' ? props.value : props.value.label}
          </span>
        }
        {
          props.loading
            ? <div className="flex gap-1 py-1">
              <div className="animate-[pulse_1s_infinite_0ms] h-2 w-2 bg-primary-200 rounded"></div>
              <div className="animate-[pulse_1s_infinite_300ms] h-2 w-2 bg-primary-200 rounded"></div>
              <div className="animate-[pulse_1s_infinite_600ms] h-2 w-2 bg-primary-200 rounded"></div>
            </div>
            : <input
              type='text'
              placeholder={props.value || props.loading ? '' : props.placeholder}
              value={props.search}
              onChange={(e) => props.onChange(e.target.value)}
              className={[`flex items-center justify-between w-full rounded-lg
                focus:outline-none unnamed-character-style-8 text-gray-900 group-hover:text-gray-900 
                group-focus:text-gray-900 placeholder:text-gray-600 
                group-hover:placeholder:text-gray-900 group-focus-within:placeholder:text-gray-900`].join(' ')
              }
              onKeyDown={handleKeyPress}
              disabled={props.disabled || props.loading}
            >
            </input>
        }
        <div className=''>
          {
            isOpen
              ? <FiChevronUp className="size-5 text-[#272727]" />
              : <FiChevronDown className="size-5 text-[#272727]" />
          }
        </div>
      </div>
      <div className='relative w-full mt-2 z-10'>
        {props.list}
      </div>
    </div>
  );
}
