const express = require('express')
const path = require('path');
const formidable = require('formidable');
require('dotenv').config()
var port = process.env.PORT || 6000
var upload = require('./services/upload_file')


//const EventEmitter = require('events');
class App {
    constructor() {

        this.server = express();
        this.server.use(express.json());
    }

    async start() {
        var render_html_file;
        await this.server.get('/', (req, res) => {
            
            let upload_file = path.join(__dirname +'/public/d.txt');

            render_html_file = upload.upload_file(null, function (data, error) {
                //console.log("App start: ", data);
                
                res.sendFile(data);
            })
            //console.log("Class App: ",form );
           
        });

        await this.server.listen(port, function () {
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
