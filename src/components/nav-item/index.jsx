import React, { useState } from 'react';
import ArrowDownIcon from '../../images/icon-arrow-down.svg?react';
import ArrowUpIcon from '../../images/icon-arrow-up.svg?react';

export default function NavItem({ text = '', children }) {
  const [selected, setSelected] = useState('');
  return (
    <div className="relative">
      <div className="flex space-x-2 cursor-pointer items-center">
        <span
          className="text-medium-gray hover:text-almost-black"
          onClick={() => children && setSelected(text !== selected ? text : '')}
        >
          {text}
        </span>
        {children && selected !== text && <ArrowDownIcon />}
              {children && selected === text && <ArrowUpIcon />}
              {/* Идея чата гпт как пофиксить Акуратно мб будет баг */}
        {selected === text && children && <div className="">{children}</div>}
      </div>
    </div>
  );
}
