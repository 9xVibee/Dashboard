import { SetCount, SetData, SetDate, SetLoading } from "./fakeApiDataTypes";

const initialState = {
  data: [],
  loading: true,
  count: null,
  date: null,
};

const FakeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetData: {
      return {
        ...state,
        data: [...action.data],
      };
    }

    case SetDate: {
      return {
        ...state,
        date: action.date,
      };
    }

    case SetLoading: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case SetCount: {
      return {
        ...state,
        count: action.count,
      };
    }
    default:
      return state;
  }
};

export default FakeApiReducer;
