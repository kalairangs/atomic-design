import Logo from "../../molecules/logo/logo";
import Menu from "../../molecules/menu/menu";
import Search from "../../molecules/search/search";
const navBar = (props) => {
    return (
        <div className="navBar">
            <Logo />
            <Menu data={props.data}/>
            <Search data={props.data}/>
        </div>
    );
};

export default navBar;