import 'should'
import express, { Request, Response } from 'express'
import warnings from '../src/warnings'

describe('test', (): void => {
  const app = express()
  app.use(warnings)
  app.get('/', (req: Request, res: Response) => {
    res.status(200).warn().send({ some: 'content' })
  })
  it('should ', (done) => {
    done()
  })
})
