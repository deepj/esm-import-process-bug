import Chai from 'chai'
import knexInit from '../db/knexInit'

global.expect = Chai.expect

knexInit()
