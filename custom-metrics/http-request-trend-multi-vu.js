import http from 'k6/http';
import { Trend, Counter, Gauge, Rate } from 'k6/metrics';


let trend = new Trend('aTrend');
let counter = new Counter('aCounter');
let gauge = new Gauge('aGauge');
let rate = new Rate('aRate');

export let options = {
  vus: 5,
  //duration: '10s'
  iterations: 10,
};

export default function () {
  const res = http.get('http://test.k6.io');
  trend.add(res.timings.duration);
  counter.add(1);
  gauge.add(res.body.length);
  rate.add(__VU % 2);

}