import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{ text: string; onRemove: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemove}>
      {props.text}
    </li>
  );
};

export default ToDoItem;
