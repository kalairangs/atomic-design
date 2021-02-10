import Text from '../../atoms/text/text';
import "./style.css";

const menu = (props) => {
    return (
        <div className="menu">
            <ul>

                {props.data.navBar.menuItem.map((item, index) => {
                    return <li> <Text title={item}/></li>;
                })}

            </ul>
        </div>
    );
};
export default menu; 