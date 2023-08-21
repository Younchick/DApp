const ethereumManager = new EthereumManager();
const uiManager = new UIManager();

async function prepareEthWrapper() {
  await ethereumManager.connect();
  const balance = await ethereumManager.getBalance();
  uiManager.displayAccountInfo(ethereumManager.userAddress, balance);
}

async function onSentEth() {
  const sentToValue = uiManager.getEthSendToAddress();
  const sentAmountValue = uiManager.getEthSendAmount();
  const tx = await ethereumManager.sendEth(sentToValue, sentAmountValue);
  uiManager.displayTransactionHash(tx.hash); // Display transaction hash in an alert
  const balance = await ethereumManager.getBalance(); // Refresh balance after the transaction
  uiManager.displayAccountInfo(ethereumManager.userAddress, balance);
  uiManager.clearInputFields();
}

uiManager.onConnect(async () => {
  await prepareEthWrapper();
  uiManager.showEthWrapper();
});

uiManager.onTransactionButton(async () => {
  const txHash = tx.hash;
  const transactionLink = `https://etherscan.io/tx/${txHash}`;
  window.open(transactionLink, '_blank');
})


uiManager.onSentEth(onSentEth);




