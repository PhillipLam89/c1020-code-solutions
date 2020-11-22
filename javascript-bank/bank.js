/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || typeof balance === 'string' || !balance) {
    return null;
  }

  var newAccount = new Account(this.nextAccountNumber, holder);
  this.accounts.push(newAccount);

  var lastIndex = this.accounts.length - 1;
  this.accounts[lastIndex].deposit(balance);

  this.nextAccountNumber++;
  var currentAccNumber = this.nextAccountNumber - 1;
  return currentAccNumber;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var j = 0; j < this.accounts.length; j++) {
    totalBalance = totalBalance + this.accounts[j].getBalance();
  }
  return totalBalance;
};
