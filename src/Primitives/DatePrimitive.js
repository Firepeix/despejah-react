export default class DatePrimitive {
  constructor (date) {
    this.date = date
  }

  static toEURDateString (dateString) {
    return dateString.split('-').reverse().join('/');
  }

  static toISODateString (dateString) {
      return dateString.split('/').reverse().join('-');
  }

  static isValid(date) {
    const invalidStates = ['Invalid Date', 'InvalidDate']
    return invalidStates.find(state => state === String(date)) === undefined
  }
}
