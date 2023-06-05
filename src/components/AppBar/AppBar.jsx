import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Navigation } from 'components/Navigation/Navigation';
// import { AuthNavigation } from 'components/Navigation/AuthNavigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.header}>
        <nav>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNavigation />} */}
        </nav>
      </header>
      <Outlet />
    </>
  );
};