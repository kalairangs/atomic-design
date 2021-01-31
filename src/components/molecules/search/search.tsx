import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import { Props } from "./type";

const search = ({
    searchPlaceholder,
    buttonText
  }: Props) => {
    return (
        <div className="search">
            <Input placeholder={searchPlaceholder}/>
            <Button name={buttonText} />
        </div>
    );
};

export default search; 