import React from 'react';
import css from './LanguagesList.module.css';

export const LanguagesList = () => {
  return (
    <ul className={css.languages_list}>
      <li className={css.lang_item}>
        <p className={css.lang}>Укр</p>
      </li>
      <li className={css.lang_item}>
        <p className={css.lang_ru}>Рус</p>
      </li>
    </ul>
  );
};
