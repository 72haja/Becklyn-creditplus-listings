import { PaginationButton } from '@/app/components/pagination/PaginationButton';
import { PaginationNumberButton } from '@/app/components/pagination/PaginationNumberButton';
import React, { useMemo } from 'react';

export interface PaginationProps {
  current: number;
  total: number
  onCurrentChange: (current: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Pagination = ({
  ...props
}: PaginationProps) => {


  function onClickPrev() {
    if (props.current === 1) return;
    props.onCurrentChange(props.current - 1);
  }

  function onClickNext() {
    if (props.current === props.total) return;
    props.onCurrentChange(props.current + 1);
  }

  function onClickNumber(number: number) {
    props.onCurrentChange(number);
  }

  const shownButtons = useMemo(() => {
    if (props.total <= 5) {
      return Array.from({ length: props.total }, (_, i) => i + 1).map((i) => (
        <PaginationNumberButton key={i} active={props.current === i} number={i} onClick={() => onClickNumber(i)} />
      ));
    }

    const buttons = [
      <PaginationNumberButton key={1} active={props.current === 1} number={1} onClick={() => onClickNumber(1)} />,
      <PaginationNumberButton key={2} active={props.current === 2} number={2} onClick={() => onClickNumber(2)} />,
    ];
    if (props.current > 3) {
      buttons.push(<PaginationNumberButton key={-1} number={NaN} isPlaceholder />);
    }
    for (let i = Math.max(2, props.current - 1); i < Math.min(props.total, props.current + 2); i++) {
      if (i !== 1 && i !== 2 && i !== props.total - 1 && i !== props.total) {
        buttons.push(<PaginationNumberButton key={i} active={props.current === i} number={i} onClick={() => onClickNumber(i)} />);
      }
    }
    if (props.current < props.total - 2) {
      buttons.push(<PaginationNumberButton key={-2} number={NaN} isPlaceholder />);
    }
    buttons.push(<PaginationNumberButton key={props.total - 1} active={props.current === props.total - 1} number={props.total - 1} onClick={() => onClickNumber(props.total - 1)} />);
    buttons.push(<PaginationNumberButton key={props.total} active={props.current === props.total} number={props.total} onClick={() => onClickNumber(props.total)} />);

    return buttons;
  }, [props.current, props.total]);

  return (
    <div className='w-full flex justify-between items-center border-t border-gray-200 pt-[20.5px]'>
      <PaginationButton direction='prev' onClick={onClickPrev} />
      <div className='flex'>
        {shownButtons}
      </div>
      <PaginationButton direction='next' onClick={onClickNext} />
    </div>
  );
};
