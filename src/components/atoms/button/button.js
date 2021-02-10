import "./style.css"
const button = (props) => {
  return (
    <div className="button">
    <button>{props.name}</button>
    </div>
  );
};

export default button; 