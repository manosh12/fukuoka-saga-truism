import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import '../App.css';
import { TopScroll } from "./TopScroll.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "福岡観光", link: "/#fukuokaTruism" },
    { name: "佐賀観光", link: "/#sagaTruism" },
    { name: "お問い合わせ", link: "/#contact" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" onClick={TopScroll}>
            <div className="flex justify-start items-start gap-2">
              <img src="/images/logo.png" alt="logo" className="w-10 h-auto" />
              <h4 className="font-bold text-lg mt-2">福岡・佐賀観光</h4>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 justify-end">
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
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>
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
      </NavbarMenu>
    </Navbar>
  );
}
