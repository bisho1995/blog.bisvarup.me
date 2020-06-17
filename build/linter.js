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
    .map((a) => a.trim().split(' ')[1])
    .filter(Boolean);

  let errors = 0;
  res.forEach((p) => {
    try {
      const endsWith = path.extname(p);

      const lintCode = () => {
        const val = execSync(
          `./node_modules/.bin/eslint ${p} --ext=ts,tsx,js,jsx --fix`,
          {stdio: 'inherit'},
        );

        console.log(val, val.toString());
        return val;
      };

      console.log(__dirname, 'p is ', p.toString());

      if (fs.lstatSync(p.toString()).isDirectory()) {
        return lintCode();
      }

      if (VALID_EXTENSIONS.includes(endsWith)) lintCode();
    } catch (error) {
      // eslint-disable-next-line
      console.log(error.stdout && error.stdout.toString());
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

    process.exit(1);
  }
} catch (err) {
  // eslint-disable-next-line
  console.log(
    chalk.redBright(`could not complete linting due to ${err.toString()}`),
  );

  process.exit(1);
}
