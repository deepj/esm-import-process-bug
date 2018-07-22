// Enforce NODE_ENV to test environment for all tests.
process.env.NODE_ENV = 'test'

import Chai from 'chai'
import knexInit from '../db/knexInit'

global.expect = Chai.expect

knexInit()
