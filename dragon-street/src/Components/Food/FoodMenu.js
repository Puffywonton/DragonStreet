import MenuItem from "./MenuItem"
import Card from "../UI/Card"
import classes from './FoodMenu.module.css'

const FAKE_BURGER_MENU = [
    {
        id: "m1",
        name: "Krokmou",
        ingredients: "Pain Brioché, Tartare de Tomate, Poulet Krokmou, Mâche, Tomate, Oignon Rouge, Onion Rings",
        price: 9.90,
        options: ["Oignon", "Sauce"],
        veggy: true
    },
    {
        id: "m2",
        name: "LocLac Burger",
        ingredients: "Pain Brioché, Sauce Maison, Steak Smashé, Cubes Loc Lac, Oeuf, Salade, Tomate, Oignon Blanc, Onion Rings",
        price: 9.90,
        options: ["Oeuf", "Oignon", "Sauce"],
        veggy: false
    },
]


const FoodMenu = () => {
    const foodList = FAKE_BURGER_MENU.map(item => 
        <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
            options={item.options}
            veggy={item.veggy}
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