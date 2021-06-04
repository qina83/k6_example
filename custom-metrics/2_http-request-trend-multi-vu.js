import http from 'k6/http';
import { Trend, Counter, Gauge, Rate } from 'k6/metrics';

let aTrend = new Trend('aTrend');
let counter = new Counter('aCounter'); //il counter mi da count
let gauge = new Gauge('aGauge'); // il gauge mi da min, max, last
let rate = new Rate('aRate'); //% di valori != 0 su numero totale di valori aggiunti (1 = 100%)

export let options = {
  vus: 10,
  //duration: '10s'
  iterations: 100,
};

export function setup(){
  http.get('https://jsonplaceholder.typicode.com/photos');
}

export default function () {
  const res = http.get('http://test.k6.io');
  aTrend.add(res.timings.duration);
  counter.add(1);
  gauge.add(res.body.length);
  rate.add(__VU % 2);
}