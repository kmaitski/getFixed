const express = require('express');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const multer = require('multer');
const iplocation = require('iplocation');

const graphQLExp = require('apollo-server-express');
const schema = require('./graphQL/schema.js');
const cors = require('cors');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const settings = require('./../config/.cloudinary.js');

const app = express();
const router = require('./router/index.js');

const db = require('./database/index.js');

const PORT = process.env.PORT || 8080;

app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.secure || req.headers.host === 'localhost:8080') {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
require('./passport/passport.js')(passport, db.users);

app.use(express.static(path.join(__dirname, '../client/dist')));

const authRoute = require('./router/routes/auth.js')(app, db, passport);

app.use(
  '/graphql',
  bodyParser.json(),
  graphQLExp.graphqlExpress({ schema, graphiql: true })
);
app.use(
  '/graphiql',
  graphQLExp.graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'wss://subscriptions'
  })
);

const ws = createServer(app);

app.get('/ip', (req, res) => {
  if (req.headers.host === 'localhost:8080') {
    res.end();
  } else {
    const ip = req.headers['x-forwarded-for'].split(',')[0];
    iplocation(ip, (err, response) => {
      res.send(response);
    });
  }
});

const storage = multer.memoryStorage();
const upload = multer({ storage });
cloudinary.config(settings);

app.post('/api/cloudinaryUpload', upload.single('problemImage'), (req, res) => {
  cloudinary.uploader
    .upload_stream(result => {
      res.status(200).send(result);
    })
    .end(req.file.buffer);
});

router(app, db);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, function() {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
