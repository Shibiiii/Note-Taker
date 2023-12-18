const express = require('express');
const apiRoutes = require('/routes/apiRoutes');
const htmlRoutes = require('/routes/htmlRoutes');
const PORT = process.env.PORT || 3001;

const app = express();