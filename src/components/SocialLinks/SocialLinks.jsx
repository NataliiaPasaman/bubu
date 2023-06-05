import React from 'react';
import { ReactComponent as Instagram } from 'images/svg/instagram.svg';
import { ReactComponent as Youtube } from 'images/svg/youtube.svg';
import { ReactComponent as Facebook } from 'images/svg/facebook.svg';
import css from './SocialLinks.module.css';

export const SocialsLinks = () => {
  return (
    <ul className={css.socLink_list}>
      <li className={css.socLink_items}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram size={20} />
        </a>
      </li>
      <li className={css.socLink_items}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Youtube size={20} />
        </a>
      </li>
      <li className={css.socLink_items}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Facebook size={20} />
        </a>
      </li>
    </ul>
  );
};
