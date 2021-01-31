import Item from "../../atoms/menuItem/menuItem";

import { Props } from "./type";
const menu = ({ menuItem}: Props) => {
    return (
        <div className="menu">
            <ul>

                {menuItem.map((item, index) => {
                    return <li><Item item={item} /></li>;
                })}

            </ul>
        </div>
    );
};
export default menu; 