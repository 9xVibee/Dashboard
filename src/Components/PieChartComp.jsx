import { Pie, PieChart, Tooltip } from "recharts";
import FilterData from "../hooks/FilterData";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";

const PieChartComp = ({ arr }) => {
  const { filteredData } = FilterData();
  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);

  const firstArr = filteredData?.filter(
    (item) => item?.category == arr[0]?.[0]
  );

  const secondTop = filteredData?.filter(
    (item) => item?.category === arr[1]?.[0]
  );

  return (
    <PieChart width={230} height={230}>
      <Pie
        data={firstArr}
        dataKey="price"
        nameKey="title"
        cx="50%"
        cy="50%"
        fill={`${mode === LightMode ? "#7459D9" : "#5E5CE6"}`}
        innerRadius={70}
      />

      <Pie
        data={secondTop}
        dataKey="price"
        nameKey="title"
        cx="50%"
        cy="50%"
        fill={`${mode === LightMode ? "#7459D980" : "#44448A"}`}
        outerRadius={50}
      />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComp;
