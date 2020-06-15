require('dotenv').config();
const {execSync} = require('child_process');

execSync('gatsby build');
