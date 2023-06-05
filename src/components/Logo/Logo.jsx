import { NavLink } from 'react-router-dom';

export const Logo = ({ logo1, logo2, logoW1, LogoW2, width }) => { 
    return (
        <NavLink to="/">
          <picture>
            <source srcSet={`${logoW1}`} type="image/webp" />
            <source srcSet={`${LogoW2}`} type="image/webp" />

            <source srcSet={`${logo1}`} type="image/png" />
            <source srcSet={`${logo2}`} type="image/png" />

            <img src={logo1} alt="Logo BUBU" width={width} />
          </picture>
        </NavLink>
    );
}