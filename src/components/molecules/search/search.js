import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

const search = (props) => {
    return (
        <div className="search">
            <Input placeholder={props.data.navBar.searchPlaceholder}/>
            <Button name={props.data.navBar.buttonText} />
        </div>
    );
};

export default search; 