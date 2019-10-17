const dotenv = require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());