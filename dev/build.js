const debug = require('debug')('build')
  , webpack = require('webpack')
  , MemoryFS = require('memory-fs')
  , store = require('./store')

const compiler = webpack(require('APP/webpack.config'))

compiler.watch({}, (error, stats) => {  
  if (error) {
    console.log('Compile failed')
    return store.dispatch({
      type: 'COMPILE_FAIL',
      error
    })
  }
  console.log('Compile Ok')
  return store.dispatch({
    type: 'COMPILE_OK',
    stats
  })
})

const dashboardCompiler = webpack({
  entry: `${__dirname}/statusz.jsx`,
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
})

const fs = new MemoryFS()
dashboardCompiler.outputFileSystem = fs
let bundleSrc
dashboardCompiler.watch({}, (error, stats) => {  
  if (error) {
    return console.error('Error building statusz bundle:', error)
  }
  bundleSrc = fs.readFileSync('/bundle.js')
  debug('Built statusz bundle')
})

const dash = require('express')()
  .get('/bundle.js', (req, res) => res.send(bundleSrc))
  .get('/*', (req, res) => res.sendFile(`${__dirname}/index.html`))

const io = require('socket.io')(dash)
io.on('connection', socket => {
  socket.emit('init', {state: store.getState().client})
})

if (module === require.main) {
  const server = dash.listen(
    process.env.PORT || 1337,
    (err, ok) => {
      if (err) return console.error(err)
      console.log(`Build server listening on ${JSON.stringify(server.address())}`)
    })
}