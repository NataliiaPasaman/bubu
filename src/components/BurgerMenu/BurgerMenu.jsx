import React from 'react';
import { ReactComponent as OpenMenu } from 'images/svg/open.svg';
import { ReactComponent as Close } from 'images/svg/close.svg';
import css from './BurgerMenu.module.css';

export const Menu = ({ open, children }) => {
  return (
    <div className={css.burgerContainer} open={open}>
      {children}
    </div>
  );
};

export const Burger = ({ open, setOpen }) => {
  return (
    <>
      {open ? (
        <button className={css.btnClose} onClick={() => setOpen(!open)}>
          <Close size={25} />
        </button>
      ) : (
        <button className={css.btnOpen} onClick={() => setOpen(!open)}>
          <OpenMenu size={30} />
        </button>
      )}
    </>
  );
};

export const BurgerMenu = ({ children, open, setOpen }) => {
  const node = React.useRef();
  const body = document.body;
  if (open) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} children={children} />
    </div>
  );
};
