import * as express from 'express'
import http from 'http'

export {}

declare global {
  namespace Express {
    export interface Response<ResBody = any>
      extends http.ServerResponse,
        express.Response {
      warn(): this
    }
  }
}
