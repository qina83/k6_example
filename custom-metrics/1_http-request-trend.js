import http from 'k6/http';
import { Trend } from 'k6/metrics';

let aTrendDuration = new Trend('aTrend-duration');
//il trend mi da min, max, avg, med, p90, p95

export function setup(){
  http.get('https://jsonplaceholder.typicode.com/photos');
}

export default function () {
  const res = http.get('http://test.k6.io');
  aTrendDuration.add(res.timings.duration);
  //non posso prendere i risultati in itinere
  
}