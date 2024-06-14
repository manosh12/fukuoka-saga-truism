// src/components/Header.jsx
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../App.css';
import { TopScroll } from "./TopScroll.jsx";
import i18n from '../i18n';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { name: t('Navbar.home'), link: "/" },
    { name: t('Navbar.confirmation'), link: "/#fukuokaTruism" },
    { name: t('Navbar.payment'), link: "/#sagaTruism" },
    { name: t('Navbar.complete'), link: "/#contact" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" onClick={TopScroll}>
            <div className="flex justify-start items-start gap-2">
              <img src="/images/logo.png" alt="logo" className="w-10 h-auto" />
              <h4 className="font-bold text-lg mt-2">{t('Navbar.home')}</h4>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 justify-end items-center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={index === 0}>
              <Link
                to={item.link}
                className="nav-link font-bold text-md text-gray-800 hover:text-cyan-700"
                onClick={TopScroll}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="flex items-center text-sm border-1"
                aria-label="Select language"
                radius="sm"
              >
                <FaGlobe className="" size={20} />
                {i18n.language === "en" ? "English" : "日本語"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => handleLanguageChange(key)}
              className="dropdown-menu"
            >
              <DropdownItem key="en">
                <div className="flex items-center">
                  English
                </div>
              </DropdownItem>
              <DropdownItem key="jp">
                <div className="flex items-center">
                  日本語
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>

      {/*mobile*/}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="mobile-menu-item">
            <Link
              to={item.link}
              className="w-full"
              onClick={() => {
                handleMenuClose();
                TopScroll();
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mobile-menu-item">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="flex items-center w-full"
                aria-label="Select language"
              >
                <FaGlobe className="mr-2" size={20} />
                {i18n.language === "en" ? "English" : "日本語"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => handleLanguageChange(key)}
              className="dropdown-menu"
            >
              <DropdownItem key="en">
                <div className="flex items-center">
                  <FaGlobe className="mr-2" size={20} />
                  English
                </div>
              </DropdownItem>
              <DropdownItem key="jp">
                <div className="flex items-center">
                  <FaGlobe className="mr-2" size={20} />
                  日本語
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
