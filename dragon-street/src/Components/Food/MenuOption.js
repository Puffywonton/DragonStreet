import classes from './MenuOption.module.css'

const MenuOption = (props) => {
    return (
        <li className={classes.OptionBox}>
            <label htmlFor={props.name}>Sans {props.name}</label>
            <input type="checkbox" id={props.name}></input>
        </li>    
    )
}

export default MenuOption