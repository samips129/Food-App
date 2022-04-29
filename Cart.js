import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = totalAmount > 0;
    const addItemHandler = item => { };
    const removeItemHandler = id => { };
    const cartItems = <ul className={classes['cart-items']}>{cartCtx?.items?.map(item => <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={addItemHandler.bind(null, item)} onRemove={removeItemHandler.bind(null, item.id)} />)}</ul>
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;