const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

const noticiasRoutes = require('./routes/noticiasRoutes')

const app = express();
app.use(cors());
dotenv.config();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '20mb' }));

const PORT = process.env.PORT;

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/noticias', noticiasRoutes)


// app.listen(PORT, () => { console.log(`server listening on port ${PORT}`) })

const options = {
    key: fs.readFileSync('/home/galonso/scfg0cbqs'),
    cert: fs.readFileSync('/home/galonso/scfg0cbqs'),
    //ca: fs.readFileSync('/opt/psa/var/certificates/scfqdiDyQ') // si tienes un archivo CA bundle
  };
  
  https.createServer(options, app).listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
  
  
//   app.listen(3000, () => {
//     console.log(`server listening on port 3000`);
//   });
  