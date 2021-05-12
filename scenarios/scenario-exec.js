import http from 'k6/http';

export let options = {
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

export function callK6() {
    const res = http.get('http://test.k6.io');
}

export function callGoogle() {
    const res = http.get('http://google.com');
}

