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
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var totalDeposits = 0;
    var totalWithdrawals = 0;

    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        totalDeposits += this.transactions[i].amount;
      }
    }
    for (var j = 0; j < this.transactions.length; j++) {
      if (this.transactions[j].type === 'withdrawal') {
        totalWithdrawals += this.transactions[j].amount;
      }
    }
  }
  return totalDeposits - totalWithdrawals;
};
