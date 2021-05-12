import http from 'k6/http';

//console.log("INIT");


export function setup(){
  console.log("SETUP");
}

export default function () {
  console.log("EXECUTE");
  http.get('http://test.k6.io');
}

export function teardown(){
  console.log("TEARDOWN");
}