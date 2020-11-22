/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || typeof amount === 'string' || !amount) {
    return false;
  } else {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || typeof amount === 'string' || !amount) {
    return false;
  } else {
    var newWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdrawal);
    return true;
  }
};

Account.prototype.getBalance = function () {

  var totalDeposits = 0;
  var totalWithdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalWithdrawals += this.transactions[i].amount;
    }
  }
  return totalDeposits - totalWithdrawals;
};
