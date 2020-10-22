const { Worker, isMainThread, parentPort } = require('worker_threads')
const { readFile, writeFile } = require('fs').promises
const CleanCSS = require('clean-css')

const ProcessCss = async () => {
  const file = await readFile(`${__dirname}/css/github-dark.css`, 'utf8')
  const css = await new CleanCSS({}).minify(file)

  writeFile(`${__dirname}/css/github-dark.min.css`, css.styles, { flag: 'w+' }, () => true)
}

if (isMainThread) {
  // Save the main thread incase we need it later
  const worker = new Worker(__filename)
  worker.postMessage('message')
} else {
  parentPort.once('message', () => {
    ProcessCss()
  })
}
