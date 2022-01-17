const express = require('express')
require('dotenv').config()
var port = process.env.PORT || 6000


//const EventEmitter = require('events');
class App {
  constructor() {

    this.server = express();
    this.server.use(express.json());
  }

  async start() {
    await this.server.get('/', (req, res) => {
        console.log("Class App: ");
      res.send('Hello class App!');
    });

    await this.server.listen(port, function() {
        console.log(`Server started on port: ${port}`);
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
