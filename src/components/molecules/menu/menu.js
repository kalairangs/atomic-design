import Item from "../../atoms/menuItem/menuItem";
const menu = (props) => {
    return (
        <div className="menu">
            <ul>

                {props.data.navBar.menuItem.map((item, index) => {
                    return <li> {item}</li>;
                })}

            </ul>
        </div>
    );
};
export default menu; 