const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/api/whoami',(req,res) => {
 const IPadress = req.ip;
 const lang = req.acceptsLanguages();
 const OS = `${req.useragent.browser} ${req.useragent.os}`;
console.log(IPadress,lang,OS);

 res.json({"IPadress":IPadress,"lang":lang[0],"OS":OS});
});

app.listen(3000,()=>console.log("Server Runing!!!"));
