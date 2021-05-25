import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const dataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  const maxValue = props.expenses.reduce((acc, { amount }) => acc + amount, 0);
  props.expenses.forEach((element) => {
    let month = element.date.getMonth();
    dataPoints[month].value += element.amount;
  });
  return <Chart dataPoints={dataPoints} maxValue={maxValue} />;
};
export default ExpenseChart;
