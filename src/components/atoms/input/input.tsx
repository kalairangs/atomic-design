import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Props } from "./type";

const input =  ({placeholder }: Props)  => {
    return (
      <div className="input">
          <input type = "text" placeholder={placeholder}></input>
          <FontAwesomeIcon icon={faSearch} />
      </div>
    );
  };
  export default input; 