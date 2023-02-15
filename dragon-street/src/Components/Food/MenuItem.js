import { useState } from "react"
import Card from "../UI/Card"
import classes from './MenuItem.module.css'
import MenuOption from "./MenuOption"

const MenuItem = (props) => {
    const [menuFocus, setMenuFocus] = useState(false)
    const price = `€${props.price.toFixed(2)}`

    const focusHandler = () => {
        if (menuFocus === false) {
            setMenuFocus(true)
        } else {
            setMenuFocus(false)
        }
    }

    const optionList = props.options.map(item => 
        <MenuOption
            key={item}
            name={item}
        />    
    )

    return (
        <li className={classes.List}>
            <Card className={classes.Card}>
                <div className={classes.Presentation} onClick={focusHandler}>
                    <img className={classes.burgerPlaceHolder} src="https://via.placeholder.com/150" alt="a yummy burger"/>
                    <div className={classes.Right}>
                        <div className={classes.Top}>
                            <h3>{props.name}</h3>
                            <div>{price}</div>
                        </div>
                        <div className={classes.Description}>
                            <div>{props.ingredients}</div>
                        </div>
                    </div>
                </div>
                {menuFocus && 
                    <ul className={classes.Options}>
                        <h4>Options:</h4>
                        {optionList}
                    </ul>
                }     
            </Card>
       
        </li> 
    )
}

export default MenuItem