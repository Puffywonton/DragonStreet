import burgerPlaceHolder from "../../Assets/burgerPlaceHolder.avif"
import Card from "../UI/Card"
import classes from './MenuItem.module.css'

const MenuItem = (props) => {
    const price = `€${props.price.toFixed(2)}`

    return (
        <li className={classes.menuItemList} onClick={}>
            <Card className={classes.menuItemCard}>
                <div>
                    <img className={classes.burgerPlaceHolder} src={burgerPlaceHolder} alt="a yummy burger"/>
                </div>
                <div className={classes.menuItemDescription}>
                    <h3>{props.name}</h3>
                    <div>{price}</div>
                </div>
            </Card>
        </li> 
    )
}

export default MenuItem