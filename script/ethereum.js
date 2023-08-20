class EthereumManager {
    constructor() {
      this.provider;
      this.signer;
      this.userAddress;
      this.chainId;
    }
  
    async connect() {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      await this.provider.send("eth_requestAccounts", []);
      this.signer = this.provider.getSigner();
      this.userAddress = await this.signer.getAddress();
      this.chainId = (await this.provider.getNetwork()).chainId;
      console.log('chainId : ', this.chainId);
      console.log('Connected');
    }
  
    async getBalance() {
      const balance = await this.provider.getBalance(this.userAddress);
      return ethers.utils.formatUnits(balance, 18);
    }
  
    async sendEth(toAddress, amount) {
      const sentAmountValue = ethers.utils.parseUnits(amount, 18);
      const tx = await this.signer.sendTransaction({
        to: toAddress,
        value: sentAmountValue
      });
      return tx;
    }
  }
  
  