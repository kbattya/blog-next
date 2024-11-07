'use client'
import React from "react";

const BurgerMenu = ({open, setOpen, children}) => {
  return (
    <>
      <div className={`burger-icon ${open ? 'open' : ''}`} onClick={(e) => {e.stopPropagation(); setOpen(!open)} }>
				<div className={open ? 'open' : ''} />
				<div className={open ? 'open' : ''} />
				<div className={open ? 'open' : ''} />
			</div>

			{children}
    </>
  );
};

export default BurgerMenu;
