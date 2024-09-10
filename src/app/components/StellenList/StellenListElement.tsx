import { FiMapPin, FiClock } from 'react-icons/fi'; // Icons für Standort und Uhrzeit
import { FaArrowRight } from 'react-icons/fa';
import { StellenListButton } from '@/app/components/StellenList/StellenListButton';

export interface StellenListElementProps {
  title: string;
  jobTitle: string;
  location: string;
  time: string;
}

export const StellenListElement = ({
  ...props
}: StellenListElementProps) => {

  return (
    <div className="relative w-full grid justify-between items-center px-6 py-[31px] bg-gray-50 border border-gray-200 rounded-2xl">
      <div>
        <p className="unnamed-character-style-9 text-primary">
          {props.title}
        </p>
        <p className="unnamed-character-style-7 mt-[10px] text-unnamed-color-292929">
          {props.jobTitle}
        </p>
        <div className="flex items-center text-gray-500 text-sm mt-[21px] gap-6">
          <div className="flex items-center">
            <FiMapPin className="mr-1 size-[20px] text-gray-700" />
            <span className='unnamed-character-style-13 text-gray-700'>
              {props.location}
            </span>
          </div>
          <div className="flex items-center">
            <FiClock className="mr-1 size-[22px] text-gray-700" />
            <span className='unnamed-character-style-13 text-gray-700'>
              {props.time}
            </span>
          </div>
        </div>
      </div>
      <div className='absolute top-[30px] right-[24px]'>
        <StellenListButton />
      </div>
    </div>
  );
}
