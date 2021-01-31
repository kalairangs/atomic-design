import { Props } from "./type";
const menuItem = ({item}: Props)  => {
  return (
    <div className="menuItem">
{item}
  </div>
  );
};

export default menuItem; 