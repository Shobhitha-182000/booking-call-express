const express = require('express');
const call = express();
const db = require('./util/database');
const userRoutes = require('./routes/userRouter');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module here, if it's needed in this file
const pathDir=require('./util/path');

call.use(bodyParser.urlencoded({ extended: false }));
call.use(bodyParser.json());
// call.use(express.static(path.join(__dirname, 'public')));

call.use(userRoutes);

db.sequelize
  .sync()
  .then((result) => {
    console.log('TABLE CREATED.....');
    call.listen(3000, () => {
      console.log('3000 port is started....');
    });
  })
  .catch((err) => console.log(err));

// call.use('/', (req, res, next) => {
//   res.send('<h1>Page Not Found</h1>');
// });
 