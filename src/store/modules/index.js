/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(filename => {
  const moduleName = filename
    .replace(/(\.\/|\.js)/g, '')
    .replace(/^\w/, c => c)

  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules
