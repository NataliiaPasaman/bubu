import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { InteractNav } from 'components/InteractNav/InteractNav';
import { SocialsLinks } from 'components/SocialLinks/SocialLinks';
import { LanguagesList } from 'components/LanguagesList/LanguagesList';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Logo } from 'components/Logo/Logo';

import { ReactComponent as Catalog } from 'images/svg/menu.svg';
import css from './Navigation.module.css';

import logo from 'images/logo/headerLogo@1x.png';
import logo2 from 'images/logo/headerLogo@2x.png';
import logoWeb1 from 'images/logo/headerLogo@1x.webp';
import logoWeb2 from 'images/logo/headerLogo@2x.webp';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.navContainer}>
      <div className={css.box}>
        <BurgerMenu setOpen={setOpen} open={open}>
          <div className={css.catalogBox}> 
            <button className={css.menu} type="button">
                <Catalog size={30} />
            </button>
            <p className={css.catalog}>Каталог</p>
            </div>

          <ul className={css.mainNav_list}>
            <li className={css.mainNav_item}>
              <NavLink className={css.navLink} to="/about">Про нас</NavLink>
            </li>
            <li className={css.mainNav_item}>
              <NavLink className={css.navLink} to="/contacts">Контакти</NavLink>
            </li>
            <li className={css.mainNav_item}>
              <NavLink className={css.navLink} to="/delivery">Доставка і оплата</NavLink>
            </li>
            <li className={css.mainNav_item}>
              <NavLink className={css.navLink} to="/return">Повернення і обмін</NavLink>
            </li>
          </ul>

          <a href="tel:(063) 128-46-09" className={css.tel}>(063) 128-46-09</a>
          <SocialsLinks />
          <LanguagesList />
          <UserMenu /> 
        </BurgerMenu>

        <div className={css.logo}>
          <Logo
            logo1={logo}
            logo2={logo2}
            logoW1={logoWeb1}
            logoW2={logoWeb2}
            width={'90px'} />
        </div>

      </div>
      <InteractNav />
    </div>
  );
};
