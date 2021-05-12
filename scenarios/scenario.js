import http from 'k6/http';

export let options = {
    scenarios: {
        scenario_1: {
            executor: 'shared-iterations',
            vus: 1,
            iterations: 10,
        },
        scenario_2: {
            startTime: '3s',
            executor: 'constant-vus',
            vus: 1,
            duration: '5s'
        },
        scenario_3: {
            startTime: '9s',
            executor: 'constant-vus',
            vus: 10,
            duration: '5s'
        }
    }
}

export default function () {
    const res = http.get('http://test.k6.io');
}

