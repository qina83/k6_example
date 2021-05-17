import http from 'k6/http';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, //target è il valore a 10s
    { duration: '5s', target: 10 },
    { duration: '10s', target: 35 },
    { duration: '5s', target: 35 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  http.get('http://test.k6.io');
}