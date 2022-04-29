import { Fragment } from 'react';
import HeaderCartButton from './HeaderCardButton';

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>IpSam Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image ']}>
            <img src={mealsImage} alt="Food Image on a table" />
        </div>
    </Fragment>
};

export default Header;