const express = require('express')
var port = 3000


//const EventEmitter = require('events');

class App {
  constructor() {

    this.server = express();
    this.server.use(express.json());
  }

  start() {
    this.server.get('/', (req, res) => {
        console.log("Class App: ");
      // process.exit();
      res.send('Hello class App!');
    });

    this.server.listen(port, () => {
      console.log('Server started on port 3000')
      //this.emit('start');
    });
  }

  stop() {
    if (this.stopped) 
        return;
    console.log('Server stopped');
    //this.emit('stop');
    this.stopped = true;
    process.exit();
  }
}

const app = new App();
app.start();



/* ["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "SIGTERM", "uncaughtException"].forEach(event => {
  process.on(event, () => app.stop());
}); */
