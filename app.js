const express = require('express');
const path = require('path');


const app = express();

app.get('/', (req,res) => {
  
})

//! Middlewares
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
