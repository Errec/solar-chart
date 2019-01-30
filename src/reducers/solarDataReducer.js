import { FETCH_CHART } from '../actions/types';

const initialState = {
  chartData: {
    chart: [],
    isLoaded: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHART:
      return {
        ...state,
        chartData: action.payload
      }
    default:
       return state;
  }
}