import http from 'k6/http';

export let options = {
    scenarios: {
        scenario_shared_iterations: {
            executor: 'shared-iterations',
            vus: 10,
            iterations: 10,
        },
        // scenario_constant_arrival_rate: {
        //     executor: 'constant-arrival-rate',
        //     rate: 3, // 200 RPS, since timeUnit is the default 1s
        //     duration: '10s',
        //     preAllocatedVUs: 50,
        //     maxVUs: 100,
        // }
    }
}

export default function () {
    console.log("Partito", __VU, new Date());
    const res = http.get('http://test.k6.io');
}

