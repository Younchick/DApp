class UIManager {
    constructor() {
      this.ethAccount = document.getElementById('ethAccount');
      this.ethBalance = document.getElementById('ethBalance');
      this.ethSentToAddress = document.getElementById('ethSendTo');
      this.ethSend = document.getElementById('ethSendButton');
      this.ethSentAmount = document.getElementById('ethSendAmount');
      this.connectButton = document.getElementById('connectButton');
      this.currency = document.getElementById('selection');
      this.ethWrapper = document.getElementById('ethWrapper');
      this.transactionButton = document.getElementById('transactionButton')
    }
  
    displayAccountInfo(account, balance) {
      this.ethAccount.textContent = account;
      this.ethBalance.textContent = Number(balance).toFixed(4);
    }
  
    onSentEth(callback) {
      this.ethSend.addEventListener('click', callback);
    }
  
    onConnect(callback) {
      this.connectButton.addEventListener('click', callback);
    }
  
    getEthSendToAddress() {
      return this.ethSentToAddress.value;
    }
  
    getEthSendAmount() {
      return this.ethSentAmount.value;
    }

  
    clearInputFields() {
      this.ethSentToAddress.value = '';
      this.ethSentAmount.value = '';
    }
  
    showEthWrapper() {
      this.connectButton.parentElement.remove('active');
      this.ethWrapper.classList.add('active');
    }
    displayTransactionHash(txHash) {
        alert("Transaction Hash:" + txHash);
    }
  }