import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FilterData = () => {
  const { count, date } = useSelector((store) => store.fakeapidata);
  const data = useSelector((store) => store.fakeapidata.data);

  const [filteredData, setFilteredData] = useState(data);

  const filterData = () => {
    let newFilteredData = data;

    if (count) {
      newFilteredData = data?.filter((item) => {
        if (count === "below 100" && item?.rating?.count <= 100) return item;
        else if (count === "above 100" && item?.rating?.count > 100)
          return item;
      });
    }

    if (date) {
      console.log(date);
      newFilteredData = filteredData?.filter((item) => {
        return item.date == date;
      });
    }

    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    filterData(data);
  }, [date, count, data]);

  return { filteredData };
};

export default FilterData;
