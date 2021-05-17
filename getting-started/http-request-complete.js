import http from 'k6/http';

//console.log("INIT 1 -per VU");

export let options = {
  vus: 5,
  //duration: '10s'
  iterations: 10
};

export function setup(){
//  console.log("SETUP - 1 per test");
}

export default function () {
  console.log("EXECUTE - 1 per vu", __VU,  __ITER);
  http.get(__ENV.REST_API_URL);
}

export function teardown(){
//  console.log("TEARDOWN - 1 per test");
}