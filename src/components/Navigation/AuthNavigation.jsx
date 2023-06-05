import { NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from 'images/svg/user.svg';
import css from './Navigation.module.css';

export const AuthNavigation = () => {
  return (
    <div className={css.authBox}>
        <Icon size={21} />
      <NavLink className={css.authLink} to="/register">
        Вхід
      </NavLink>

      {/* <NavLink to="/signIn">
        <Icon size={21} />
        Вхід
      </NavLink> */}
    </div>
  );
};
