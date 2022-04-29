import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = props => {
    const [amountValid, setAmountValid] = useState(true);
    const amountRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value * 1;
        if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountRef}
            label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
        {!amountValid && <p>Please enter a valid amount from 1-5</p>}
    </form>
};

export default MealItemForm;