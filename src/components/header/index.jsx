import React, { useState } from 'react';
import LogoIcon from '../../images/logo.svg?react';
import MenuIcon from '../../images/icon-menu.svg?react';
import MenuCloseIcon from '../../images/icon-close-menu.svg?react';
import NavItem from '../nav-item';
import { NavMenu } from '../nav-menu';
import { FEATURES, COMPANY } from './constant';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="flex gap-6 xl:ml-8 items-center">
      <LogoIcon />
      <nav className="hidden xl:flex space-x-5 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>

        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers"></NavItem>
        <NavItem text="About"></NavItem>
      </nav>
      <div className="hidden ml-auto xl:flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
      <div
        className="flex xl:hidden ml-auto cursor-pointer z-30"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <MenuCloseIcon/> : <MenuIcon /> }
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} /> 
    </header>
  );
}
