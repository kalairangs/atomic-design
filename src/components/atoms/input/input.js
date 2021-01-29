import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const input = (props) => {
    return (
      <div className="input">
          <input type = "text" placeholder={props.placeholder}></input>
          <FontAwesomeIcon icon={faSearch} />
      </div>
    );
  };
  export default input; 