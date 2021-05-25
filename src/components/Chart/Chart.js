import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          label={datapoint.label}
          key={datapoint.label}
          maxValue={props.maxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
