
const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const cors = require('cors')
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3001;
const config = require('./config/config');

require('dotenv').config();

app.use(cors());

app.use(require('serve-static')(__dirname + '/../../public'));

// Set up Mongoose
// mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.connect(config.db_dev);
mongoose.Promise = global.Promise;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require('./routes')(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
  //   process.env.MONGODB_URI || "mongodb://pet2pet-still-peak:pF**IBL1xOKiSx&IZcljT@ds139768.mlab.com:39768/heroku_qmhw2gzx"
  // );
  
  
  // Start the API server
  app.listen(PORT, '0.0.0.0', function (err) {
    if (err) {
      console.log(err);
    }

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', PORT);
  });
  

/*

const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack.config');



// Configuration
// ================================================================================================



if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}


module.exports = app;

*/