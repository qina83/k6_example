import http from 'k6/http';
import { Trend } from 'k6/metrics';

let youAreMyBestTrend = new Trend('youAreMyBestTrend');


export default function () {
  const res = http.get('http://test.k6.io');
  youAreMyBestTrend.add(res.timings.duration);
  //non posso prendere i risultati in itinere
}