import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Burger',
        description: 'Finest Chicken and Tandoor',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Pizza',
        description: 'A Italian specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Tandoori Chicken',
        description: 'Red..Hot..Spicy..Indian',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;