import ws from 'k6/ws';
import { check } from 'k6';
import {  Counter } from 'k6/metrics';

let count = 0;
let counter = new Counter('aCounter');

export let options = {
    thresholds: {
     // aCounter: ['count>3'], 
      aCounter: ['count>3'], 
    },
  };
  

export default function () {
  const url = 'ws://echo.websocket.org';
  const params = { tags: { my_tag: 'hello' } };
  const res = ws.connect(url, params, function (socket) {
    socket.on('open', () => {
        console.log('connected');
        socket.setInterval(()=>{
            socket.send("message");
            count++;
            counter.add(1);
            if (count>3)
                socket.close();
        }, 1000);
    });
    socket.on('message', (data) => console.log('Message received: ', data));
    socket.on('close', () => console.log('disconnected'));
  });


  check(res, { 'status is 101': (r) => r && r.status === 101 });
}