import Logo from "../../molecules/logo/logo";
import Menu from "../../molecules/menu/menu";
import Search from "../../molecules/search/search";
import { Props } from "./type";
import menuItem from "../../atoms/menuItem/menuItem";
const navBar = ({ className, data }: Props) => {
    return (
        <div className="navBar">
            <Logo url={data.logo}/>
            <Menu menuItem={data.menuItem}/>
            <Search buttonText={data.buttonText} searchPlaceholder={data.searchPlaceholder}/>
        </div>
    );
};

export default navBar;