import React from 'react';
import LogoIcon from '../../images/logo.svg?react'; 
import NavItem from '../nav-item';
import { NavMenu } from '../nav-menu';
import { FEATURES, COMPANY } from './constant';
import { Button } from '../button';

export default function Header() {
  return (
    <header className="flex gap-6 ml-8 items-center">
      <LogoIcon />
      <nav className="flex space-x-5">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>

        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers"></NavItem>
        <NavItem text="About"></NavItem>
      </nav>
      <div className="ml-auto flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder= {true }>Register</Button>
      </div>
    </header>
  );
}
