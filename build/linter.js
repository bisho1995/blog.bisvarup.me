const path = require('path');
const {EOL} = require('os');
const {execSync} = require('child_process');
const fs = require('fs-extra');
const chalk = require('chalk');

const VALID_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx'];

try {
  const res = execSync('git status -s')
    .toString()
    .split(EOL)
    .filter(Boolean)
    .map((a) => a.trim().split(' ').filter(Boolean))
    .map((a) => a[1]);

  let errors = 0;
  res.forEach((p) => {
    try {
      const endsWith = path.extname(p);

      const lintCode = () => {
        execSync(`./node_modules/.bin/eslint ${p} --ext=ts,tsx,js,jsx --fix`, {
          stdio: 'inherit',
        });
      };

      if (fs.lstatSync(p.toString()).isDirectory()) {
        return lintCode();
      }

      if (VALID_EXTENSIONS.includes(endsWith)) lintCode();
    } catch (error) {
      errors += 1;
    }
  });

  if (errors === 0) {
    // eslint-disable-next-line
    console.log(
      chalk.green(
        'Linting on modified files complete, no errors 🎉🎉There may be some warnings, please fix them',
      ),
    );
  } else {
    // eslint-disable-next-line
    console.log(
      chalk.yellow(
        `There seems to be ${errors} issue${
          errors > 1 ? 's' : ''
        } please fix issue${errors > 1 ? 'them' : 'it'}`,
      ),
    );
  }
} catch (err) {
  // eslint-disable-next-line
  console.log(
    chalk.redBright(`could not complete linting due to ${err.toString()}`),
  );

  process.exit(1);
}
