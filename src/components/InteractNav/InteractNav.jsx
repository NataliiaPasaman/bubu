import { ReactComponent as Search } from 'images/svg/search.svg';
import { ReactComponent as Like } from 'images/svg/like.svg';
import { ReactComponent as Comparison } from 'images/svg/comparison.svg';
import { ReactComponent as Cart } from 'images/svg/cart.svg';
import css from './InteractNav.module.css';

export const InteractNav = () => {
    return (
        <ul className={css.interactList}>
            <li className={css.interactItem}>
                <button className={css.btnInteract} type="button">
                    <Search size={18} />
                </button>
            </li>
            <li className={css.interactItem}>
                <button className={css.btnInteract} type="button">
                    <Comparison size={20} />
                </button>
            </li>
            <li className={css.interactItem}>
                <button className={css.btnInteract} type="button">
                    <Like size={20} />
                </button>
            </li>
            <li className={css.interactItem}>
                <button className={css.btnInteract} type="button">
                    <Cart size={20} />
                </button>
            </li>
        </ul>
    )
}