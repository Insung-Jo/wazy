'use client';

import { ReactNode, useContext } from 'react';
import { DropdownContext } from './Dropdown';
import cn from '@/utils/cn';

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content = ({ children, className }: ContentProps) => {
  const context = useContext(DropdownContext);
  if (!context || !context.isOpen) return null;

  return (
    <div
      className={cn(
        'absolute z-1 mt-2 flex w-95 flex-col rounded-lg border-2 border-[#DFDFDF] bg-white shadow-md',
        className ?? '',
      )}
    >
      {children}
    </div>
  );
};

export default Content;
