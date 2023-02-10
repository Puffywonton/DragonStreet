import MenuItem from "./MenuItem"
import Card from "../UI/Card"
import classes from './FoodMenu.module.css'

const FAKE_BURGER_MENU = [
    {
        id: "m1",
        name: "Le Basic",
        ingredients: ["Homemade Toasted Bread", "Steak", "Poulet Krokmou", "Mâche", "Tomate", "Oignon Rouge", "Onion Rings"],
        price: 4.90,
        specialPrice: 5.99, 
    },
    {
        id: "m2",
        name: "Le Cheeseburger",
        ingredients: ["Homemade Toasted Bread", "Sauce Maison", "Steak Smashé", "Cubes Loc Lac", "Oeuf", "Salade", "Tomate", "Oignon Blanc", "Onion Rings"],
        price: 8.90,
        specialPrice: undefined,
    },
    {
        id: "m3",
        name: "Le Special",
        ingredients: ["Homemade Toasted Bread", "Tartare de Tomate", "Poulet Krokmou", "Mâche", "Tomate", "Oignon Rouge", "Onion Rings"],
        price: 12.90,
        specialPrice: 5.99, 
    },
    {
        id: "m4",
        name: "Le Ultimate",
        ingredients: ["Homemade Toasted Bread", "Sauce Maison", "Steak Smashé", "Cubes Loc Lac", "Oeuf", "Salade", "Tomate", "Oignon Blanc", "Onion Rings"],
        price: 15.90,
        specialPrice: undefined,
    },
]


const FoodMenu = () => {
    const foodList = FAKE_BURGER_MENU.map(item => 
        <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
        />
        )
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {foodList}
                </ul>
            </Card>

        </section>  
    )
}

export default FoodMenu