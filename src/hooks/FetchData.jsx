import { useDispatch } from "react-redux";
import { LoadingTrue } from "../redux/fake-api-data/fakeApiDataTypes";
import FormatData from "../utils/FormatApiData";

const FetchData = () => {
  const dispatch = useDispatch();

  const fetchDataFn = async () => {
    dispatch({
      type: LoadingTrue,
    });

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const formattedData = FormatData(data);
      return formattedData;
    } catch (error) {
      console.log("Error in fetchData!", error);
    }
  };

  return { fetchDataFn };
};

export default FetchData;
