import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  return (
    <ul className="expenses-list">
      {props.item.map((val) => (
        <ExpenseItem
          title={val.title}
          amount={val.amount}
          date={val.date}
          key={val.id}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
