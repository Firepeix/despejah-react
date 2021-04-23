export default class NumberPrimitive {
  static toInt (value) {
    return Number(String(value).replace(/\D/g, ''));
  }

  static toReal (value) {
    value = String((NumberPrimitive.toInt(value) / 100).toFixed(2)).replace('.', ',').replace('-', '');
    if (value.length > 6) {
      value = value.slice(0, value.length - 6) + '.' + value.slice(value.length - 6);
    }
    return NumberPrimitive.toInt(value) < 0 ? '-' + value : value;
  }
}
