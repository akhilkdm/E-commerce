const express = require('express');


const app = express();


 

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));





const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// // enable cors
// app.use(cors(corsOptions));
// app.options('*', cors());

// jwt authentication
// app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
// if (config.env === 'production') {
//   app.use('/v1/auth/', apiLimit);
// }

// v1 api routes
// app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
// app.use(errorConverter);

// handle error
// app.use(errorHandler);

module.exports = app;
