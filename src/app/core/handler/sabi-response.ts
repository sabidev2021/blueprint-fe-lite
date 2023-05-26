export class SabiResponse<T> {
  code = 0
  data: T | undefined
  message = ''
  success = ''
  timesstamp = 0
}
