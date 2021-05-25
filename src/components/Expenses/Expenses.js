import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const getYearFromFilterHandler = (year) => {
    setFilterYear(year);
  };
  const expenses =
    props.expenses &&
    props.expenses.filter(
      (elem) => elem.date.getFullYear().toString() === filterYear
    );
  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={expenses} />
      </Card>
      <Card className="expenses">
        <ExpenseFilter
          onSelectYear={getYearFromFilterHandler}
          selectedYear={filterYear}
        />
        <ExpenseList item={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
