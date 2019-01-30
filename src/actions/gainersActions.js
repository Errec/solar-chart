import { FETCH_CHART } from './types.js';


export const fetchChart = (symbol) => dispath => {
  fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart`)
    .then(chart => chart.json())
    .then(chart => {
      dispath({
        type: FETCH_CHART,
        payload: {
          chart: chart,
          isLoaded: true
        }
      })
  });
}

