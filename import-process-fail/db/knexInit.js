import knexConfig from '../knexfile'

const init = () => {
  console.log(`NODE_ENV in ./db/knexInit.js: ${process.env.NODE_ENV}`)
  knexConfig
}

export default init
