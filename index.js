'use strict'

const {resolve} = require('path')
const chalk = require('chalk')
const pkg = require('./package.json')


const nameError =
`*******************************************************************
 You need to give your app a proper name.`

const appLink = join(__dirname, 'node_modules', 'APP')

const symlinkError = error =>
`*******************************************************************
${appLink} must point to '..'
This symlink lets you require('APP/some/path') rather than
../../../some/path
I tried to create it, but got this error:
${error.message}
You might try this:
  rm ${appLink}
Then run me again.
  ~ xoxo, bones
********************************************************************`

function makeAppSymlink() {
  console.log(`Linking '${appLink}' to '..' ...`)
  try {
    fs.unlinkSync(appLink)
    fs.linkSync(appLink, '..')
  } catch (error) {
    console.error(chalk.red(nameError))
    process.exit(1)
  }
  console.log(`Ok, created ${appLink}`)
}

function checkAppSymlink() {
  try {
    const currently = fs.readlinkSync(appLink)
    if (currently !== '..') {
      throw new Error(`${appLink} is pointing to '${currently}' rather than '..'`)
    }
  } catch (error) {
    makeAppSymlink()
  }
}

const debug = require('debug')(`${pkg.name}:boot`)


// this was giving us incorrect errors
// const reasonableName = /^[[a-z0-9]\-]+$/
// if (!reasonableName.test(pkg.name)) {
//   console.error(chalk.red(nameError))
// }

// This will load a secrets file from
//
//      ~/.your_app_name.env.js
//   or ~/.your_app_name.env.json
//
// and add it to the environment.
const env = Object.create(process.env)
  , secretsFile = resolve(env.HOME, `.${pkg.name}.env`)
try {
  Object.assign(env, require(secretsFile))
} catch (error) {
  debug('%s: %s', secretsFile, error.message)
  debug('%s: env file not found or invalid, moving on', secretsFile)
}

module.exports = {
  get name() { return pkg.name },
  get isTesting() { return !!global.it },
  get isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  get baseUrl() {
    return env.BASE_URL || `http://localhost:${PORT}`
  },
  get port() {
    return env.PORT || 1337
  },
  package: pkg,
  env,
}
