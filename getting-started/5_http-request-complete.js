import http from 'k6/http';

export let options = {
  vus: 5,
  iterations: 25
};

export function setup(){
  console.log("SETUP - 1 per test");
}

export default function () {
  console.log("EXECUTE - 1 per vu", __VU,  __ITER);
  http.get(__ENV.REST_API_URL);
}

export function teardown(){
  console.log("TEARDOWN - 1 per test");
}