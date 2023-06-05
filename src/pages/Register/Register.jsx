import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { register } from 'redux/auth/operations';
import { Logo } from 'components/Logo/Logo';
import css from './Register.module.css';

import logo from 'images/logo/logo@1x.png';
import logo2 from 'images/logo/logo@2x.png';
import logoWeb1 from 'images/logo/logo@1x.webp';
import logoWeb2 from 'images/logo/logo@2x.webp';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, phone, email, password }));
    clearForm();
  };

    return (
      <section>
        <div className={css.background_top}></div>

        <div className={css.logo}>
          <Logo
            logo1={logo}
            logo2={logo2}
            logoW1={logoWeb1}
            logoW2={logoWeb2}
            width={'190px'} />
        </div>

        <h1 className={css.title}>Реєстрація</h1>
        <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
          <label className={css.label}>
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              placeholder="Ім’я"
              onChange={handleChange}
            />
          </label>

          <label className={css.label}>
            <input
              className={css.input}
              type="phone"
              name="phone"
              value={phone}
              placeholder="Телефон"
              onChange={handleChange}
            />
          </label>

          <label className={css.label}>
            <input
              className={css.input}
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </label>

          <label className={css.label}>
            <input
              className={css.input}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={handleChange}
            />
          </label>

          <button type="submit" className={css.btn_register}>
            Зареєструватись
          </button>
          <button type="button" className={css.btn}>
            У мене є акаунт
          </button>
        </form>

        <div className={css.variant_box}>
          <p className={css.variant}>Або</p>
        </div>
        <h2 className={css.title_signup}>Увійти за допомогою:</h2>
        <div className={css.btn_box}>
          <button type="button" className={css.btn_signup}>
            G
          </button>
          <button type="button" className={css.btn_signup}>
            F
          </button>
        </div>

        <div className={css.background_bottom}></div>
      </section>
    );
}