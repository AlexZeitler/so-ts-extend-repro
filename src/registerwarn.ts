export function registerwarn() {
  return (_req: Request, res: Express.Response, next): void => {
    res.warn = (): Express.Response => {
      console.log('warning')
      return res
    }
    return next()
  }
}
