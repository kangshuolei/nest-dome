import { readFileSync } from 'fs';
const yaml = require('js-yaml');
import { join } from 'path';
import { Logger } from 'src/utils/log4js';

const configFileNameObj = {
  development: 'dev',
  test: 'test',
  production: 'prod',
};

const env = process.env.NODE_ENV;

export default () => {
  Logger.debug(
    readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
  );
  // Logger.debug(
  //   readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
  // );
  return yaml.load(
    readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
  ) as Record<string, any>;
};
