import React from 'react';
import LogoIcon from '../../images/logo.svg?react'; 
import NavItem from '../nav-item';


export default function Header() {
  return (
    <header className="flex space-x-6 ml-8 items-center">
      <LogoIcon />
      <nav className='flex gap-6'>
        <NavItem text='Feature'>
        ыаа
        </NavItem>
        
        <NavItem text='Company'> </NavItem>
        <NavItem text='Careers'></NavItem>
        <NavItem text='About'></NavItem>
      </nav>
    </header>
  );
}
