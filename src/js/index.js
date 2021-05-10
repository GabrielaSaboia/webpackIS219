import TestJS from './TestJs';
import ConsoleLogIt from './ConsoleLogIt';
import getJSON from './getJSON';
import MyAlert from './MyAlert';
import TableGenerator from '../../server/models/TableGenerator';

TestJS();
getJSON('', (data) => {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  (err, records) => {
    if (err !== null) {
      MyAlert(`Something went wrong: ${err}`);
    } else {
      const table = document.querySelector('table');
      const data = Object.keys((records.data[0]));
      const dataRecords = records.data;

      TableGenerator.generateTableHead(table, data);
      TableGenerator.generateTable(table, dataRecords);
    }
  });
ConsoleLogIt('this worked in the bundle');

// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 * Session Configuration (New!)
 */
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if(app.get("env")) === "production") {
    session.cookie.secure = true;
}
/**
 * Passport Configuration (New!)
 */



/**
 *  App Configuration
 */