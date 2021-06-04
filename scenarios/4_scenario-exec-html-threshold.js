import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
//import { htmlReport } from "../k6-reporter/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
     stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

const all200Response = {
    http_req_failed: ['rate<0.01']
}

export let options = {
    thresholds: all200Response,
    scenarios: {
        scenario_callK6: {
            exec: 'callK6',
            executor: 'shared-iterations',
            vus: 1,
            iterations: 10,
        },
        scenario_callGoogle_1: {
            startTime: '2s',
            exec: 'callK6',
            executor: 'shared-iterations',
            vus: 1,
            iterations: 10,
        },
        scenario_callGoogle_2: {
            startTime: '4s',
            exec: 'callK6',
            executor: 'shared-iterations',
            vus: 10,
            iterations: 10,
        },
    }
}

options.thresholds[`http_req_duration{scenario:scenario_callK6}`] = ['avg < 150', 'max < 1500'];
options.thresholds[`http_req_duration{scenario:scenario_callGoogle_1}`] = ['avg < 100', 'max < 1500'];
options.thresholds[`http_req_duration{scenario:scenario_callGoogle_2}`] = ['avg < 200', 'max < 1500'];




export function callK6() {
    const res = http.get('http://test.k6.io');
}

export function callGoogle() {
    const res = http.get('http://google.com');
}

