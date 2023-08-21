const ERC20_abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "cap",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cap",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ERC20Address = "0xCD9D1a8a406718D767A315c106d9c6d19382b7c6";
const ethBalance = document.getElementById('ethBalance')
const ethAccount = document.getElementById('ethAccount')
const ethSentToAddress = document.getElementById('ethSendTo')
const ethSend = document.getElementById('ethSendButton')
const ethSentAmount = document.getElementById('ethSendAmount')
const connectButton = document.getElementById('connectButton')
const ethWrapper = document.getElementById('ethWrapper')
const transactionButton = document.getElementById('transactionButton')
const transactionHashWrapper = document.getElementById('transactionHashWrapper')
const ETHSwitcher = document.getElementById('ETHSwitcher');
const ERC20Switcher = document.getElementById('ERC20Switcher')
const erc20Wrapper = document.getElementById('erc20Wrapper')
const erc20Balance = document.getElementById('erc20Balance')
const Erc20Symbol = document.getElementById('erc20Symbol')
const erc20Account = document.getElementById('erc20Account')
const erc20SendTo = document.getElementById('erc20SendTo')
const erc20SendAmount = document.getElementById('erc20SendAmount')
const erc20SendButton = document.getElementById('ercSendButton')
const erc20Name = document.getElementById('erc20Name')
const erc20TransactionHashWrapper = document.getElementById('transactionHashWrapperERC20')
const erc20TransactionHashButton = document.getElementById('transactionButtonERC20')
const btcPrivateKey = 'af80d6b0153fe8adf9bfe3ca65774962e3ada6fc7fcfd939d9583946fb5cf987';
const connectBTCButton = document.getElementById('connectBTCButton')
const BTCSwitcher = document.getElementById('BTCSwitcher')
const switchers = [ETHSwitcher, ERC20Switcher, BTCSwitcher]
const btcWrapper = document.getElementById('btcWrapper')
const wrappers = [ethWrapper, erc20Wrapper, btcWrapper]
const btcBalance = document.getElementById('btcBalance')
const btcAccount = document.getElementById('btcAccount')
const btcSendTo = document.getElementById('btcSendTo')
const btcSendAmount = document.getElementById('btcSendAmount')
const btcSendFee = document.getElementById('btcSendFee')
const btcSendButton = document.getElementById('btcSendButton')


let lastTransactionHash;
let switcherState = 'ETH'

const ethData = {
    provider: null,
    signer : null,
    userAddress : null,
    chainId : null
}

const btcData = {
    network : null,
    userAddress : null,
    keyPair : null,
    p2pkh : null,
    balance : null
}

const changeSwitcherState =  (newState) => {
    if(switcherState === newState || (!ethData.userAddress && !btcData.userAddress)) return;
    switcherState = newState;
    switchers.forEach((switcher, index) => {
        if(switcher.textContent === newState) {
            switcher.classList.add('active');
            wrappers[index].classList.add('active');
            return;
        }
        switcher.classList.remove('active');
        wrappers[index].classList.remove('active')
    })
}
const prepareEthWrapper = async () => {
    ethAccount.textContent = ethData.userAddress;
    const balance = await ethData.provider.getBalance(ethData.userAddress);
    const balanceForUi = ethers.utils.formatUnits(balance, 18);
    ethBalance.textContent = Number(balanceForUi).toFixed(4);
 }

 const prepareERC20Wrapper = async () => {
    erc20Account.textContent = ethData.userAddress;
    const contract = new ethers.Contract(ERC20Address, ERC20_abi, ethData.provider)
     const balance = await contract.balanceOf(ethData.userAddress)
     const decimals = await contract.decimals();
    const balanceForUI = ethers.utils.formatUnits(balance, decimals)
     erc20Balance.textContent = Number(balanceForUI).toFixed(4)
     const erc20Symbol = await contract.symbol();
     const name = await contract.name();
     erc20Name.textContent = name;
    Erc20Symbol.textContent = erc20Symbol;
 }

const onSentEth = async () => {
    const sentToValue = ethSentToAddress.value;
    const sentAmountValue = ethers.utils.parseUnits(ethSentAmount.value, 18)
    const tx = await ethData.signer.sendTransaction({
        to: sentToValue,
        value: sentAmountValue
    });
    lastTransactionHash = tx.hash;
    transactionHashWrapper.classList.add('active')
    await tx.wait();
    await prepareEthWrapper();
    ethSentToAddress.value = ' ';
    ethSentAmount.value = ' ';
}

const onSentErc20 = async () => {
   const sendToValue = erc20SendTo.value;
    const contract = new ethers.Contract(ERC20Address, ERC20_abi, ethData.signer)
    const decimals = await contract.decimals();
    const sendAmountValue = ethers.utils.parseUnits(erc20SendAmount.value, decimals)
    const tx = await contract.transfer(sendToValue, sendAmountValue)
    lastTransactionHash = tx.hash;
    erc20TransactionHashWrapper.classList.add('active')
    await tx.wait();
    await prepareERC20Wrapper()
    erc20SendTo.value = ''
    erc20SendAmount.value = ''
}

const onSendBtc = async () => {
    console.log('onSendBtc')
    const sendToValue = btcSendTo.value;
    const sendAmountValue = ethers.utils.parseUnits(btcSendAmount.value, 8).toNumber()
    const feeAmountValue = ethers.utils.parseUnits(btcSendFee.value, 8).toNumber()
    const amountLeft = btcData.balance - sendAmountValue - feeAmountValue;
    console.log('sendAmountValue', sendAmountValue)
    console.log('feeAmountValue', feeAmountValue)
    console.log('amountLeft', amountLeft)
    console.log('balance', btcData.balance)
    const accountDataResponse = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcData.userAddress}`);
    const accountData = await accountDataResponse.json();
    const lastTx = accountData.txrefs[0];
    console.log('lastTx', lastTx)
    const txb = new bitcoinjs.TransactionBuilder(btcData.network);
    txb.addInput(lastTx.tx_hash, lastTx.tx_output_n)
    txb.addOutput(btcData.userAddress, amountLeft);
    txb.addOutput(sendToValue, sendAmountValue);
    txb.sign(0, btcData.keyPair);
    const txHex = txb.build().toHex();
    console.log('txHex :', txHex);

    try {
        const broadcastResponse = await fetch('https://api.blockcypher.com/v1/btc/test3/txs/push', {
            method : 'POST',
            body: JSON.stringify({
            tx: txHex
        })
        });
        const broadcastData = await broadcastResponse.json();
        console.log('broadcastData ', broadcastData)
    } catch (e){
        console.dir(e)
    }
}

const onConnect = async () => {
    ethData.provider = new ethers.providers.Web3Provider(window.ethereum)
    await ethData.provider.send("eth_requestAccounts", []);
    ethData.signer = ethData.provider.getSigner();
    ethData.userAddress = await ethData.signer.getAddress();
    ethData.chainId = (await ethData.provider.getNetwork()).chainId;
    await prepareEthWrapper();
    await prepareERC20Wrapper();
    connectButton.parentElement.classList.remove('active');
    if(switcherState === 'ETH'){
        ethWrapper.classList.add('active')
    }
    if(switcherState === 'ERC20'){
        erc20Wrapper.classList.add('active')
    }

}

const onConnectBTC = async () => {
    const network = bitcoinjs.networks.testnet;
    btcData.network = network;
    btcData.keyPair = bitcoinjs.ECPair.fromPrivateKey(bitcoinjs.Buffer.from(btcPrivateKey,'hex'),{network});
    btcData.p2pkh = bitcoinjs.payments.p2pkh({pubkey: btcData.keyPair.publicKey, network})
    btcData.userAddress = btcData.p2pkh.address;
    btcAccount.textContent = btcData.userAddress;
    const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcData.userAddress}/balance`)
    const data = await response.json();
    const balance = data.final_balance;
    btcData.balance = balance;
    const balanceForUi = ethers.utils.formatUnits(balance, 8)
    btcBalance.textContent = Number(balanceForUi).toFixed(8);
    connectButton.parentElement.classList.remove('active');
    changeSwitcherState('BTC')
    console.log('OnConnectBTC')
}

const init = async () => {
    if(switcherState === 'ETH') {
        ETHSwitcher.classList.add('active')
    } if(switcherState === 'ERC20') {
    ERC20Switcher.classList.add('active')
    }
}


const onTransactionButton = async () => {
    const transactionLink = `https://sepolia.etherscan.io/tx/${lastTransactionHash}`;
    window.open(transactionLink, '_blank');
}

const onTransactionButtonERC20 = async () => {
    const transactionLink = `https://sepolia.etherscan.io/tx/${lastTransactionHash}`;
    window.open(transactionLink, '_blank');
}

ethSend.addEventListener('click', onSentEth)

erc20SendButton.addEventListener('click', onSentErc20)

btcSendButton.addEventListener('click', onSendBtc)

ETHSwitcher.addEventListener('click', () => {
    changeSwitcherState('ETH');
});

ERC20Switcher.addEventListener('click', () => {
    changeSwitcherState('ERC20')
});

BTCSwitcher.addEventListener('click', () => {
    changeSwitcherState('BTC')
});

connectButton.addEventListener('click', onConnect)

connectBTCButton.addEventListener('click', onConnectBTC)


transactionButton.addEventListener('click', onTransactionButton)

erc20TransactionHashButton.addEventListener('click', onTransactionButtonERC20);
init();



