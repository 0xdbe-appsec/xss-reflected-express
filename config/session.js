const cookieConfig = {
  path: '/',
  httpOnly: false,
  secure: false,
  maxAge: 600000,
  sameSite: 'strict'
};

const sessionConfig = {
  cookie: cookieConfig,
  resave: false,
  saveUninitialized: true,
  secret: 'mySecret'
};

module.exports = sessionConfig;
