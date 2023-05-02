import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";

// var socket = new WebSocketConnection('http://localhost:8080/api/stomp');
// console.log(socket);

export class WebSocketConnection {
    constructor() {
        
    //     const newSocket = new WebSocket('ws://localhost:8383/api/stomp');

    // // Set up the event listeners for the WebSocket object
    // newSocket.onopen = () => console.log('WebSocket connection opened');
    // newSocket.onclose = () => console.log('WebSocket connection closed');
    // newSocket.onerror = (event) => console.error('WebSocket error:', event);
    // newSocket.onmessage = (event) => console.log('WebSocket message received:', event.data);


        return Stomp.over(function(){
            return new SockJS(`http://139.144.169.177:8282/api/stomp`);
         })

    }
}