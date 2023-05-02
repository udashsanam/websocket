import logo from './logo.svg';
import './App.css';
import { WebSocketConnection } from "./sockjs/WebSocketClient.js";




function App() {
  const socket_success_callBack = () => {
    events.map((item) => {
      client.subscribe(item, (payload) => {

        let notification = {
          message: JSON.parse(payload.body).message,
          view_status: false,
        };
        console.log("Events: ", notification);

        switch (item) {
          case "/user/topic/video/chat":
            console.log("Flash Notification: ", payload.body);
            break;

          default:

            break;
        }
      });
    });
  };


  const socket_error_callBack = () => {
    console.log("not connected")
  };
  const client = new WebSocketConnection();
  const events = [
    "/user/topic/video/chat"
  ];
  let tokenAuth = { token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWJpbmthcmtpNDIzQGdtYWlsLmNvbSIsImRpc3BsYXlOYW1lIjoiTmFiaW4gS2Fya2kiLCJhcHBVc2VySWQiOjE2NSwiYXV0aCI6IlJPTEVfTU9ERVJBVE9SIiwiaWF0IjoxNjgzMDI5ODk3fQ.5lERzDeirU02zoA_Zm2lzxEYG3awrUkgKswV5UaAzbk" };
  client.connect(
    { ...tokenAuth },
    socket_success_callBack,
    socket_error_callBack
  );
  client.reconnect_delay = 5000;





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
