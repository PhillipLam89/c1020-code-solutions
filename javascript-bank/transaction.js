/* exported Transaction */

function Transaction(type, amount) {
  this.type = type;
  this.amount = Math.abs(amount);
}
