import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FilterData = () => {
  const { count, startDate, endDate } = useSelector(
    (store) => store.fakeapidata
  );
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

    if (startDate) {
      newFilteredData = newFilteredData?.filter((item) => {
        return item.date >= startDate && item.date <= endDate;
      });
    }

    newFilteredData?.sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    filterData(data);
  }, [startDate, count, data]);

  return { filteredData };
};

export default FilterData;
