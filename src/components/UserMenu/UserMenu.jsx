import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from 'images/svg/user.svg';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userBox}>
      <Icon size={21} />
      <NavLink className={css.user} to="/account">
        Кабінет
      </NavLink>
    </div>
  );
};
