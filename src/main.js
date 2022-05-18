const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ee71197f20b6c37dbd17ef5b2e02f52e9aad5f6618dc9e5b335351ddd8120436');
const myWalletAddress = myKey.getPublic('hex');

let RithikaOliverCoin = new Blockchain();

RithikaOliverCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 100);
tx1.signTransaction(myKey);
RithikaOliverCoin.addTransaction(tx1);

/*RithikaOliverCoin.createTransaction(new Transaction('address1','address2', 4));
RithikaOliverCoin.createTransaction(new Transaction('address2','address1', 1));*/

//console.log('\n Staring the miner....');

//RithikaOliverCoin.minePendingTransactions('oliver-address');

RithikaOliverCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'public key goes here', 50);
tx2.signTransaction(myKey);
RithikaOliverCoin.addTransaction(tx2);

//mine block
RithikaOliverCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Oliver is ${RithikaOliverCoin.getBalanceOfAddress(myWalletAddress)}`);

//check if the chain is valid
console.log();
console.log('Blockchain valid?', RithikaOliverCoin.isChainValid() ? 'Yes' : 'No');

/*console.log('\n Staring the miner again....');
RithikaOliverCoin.minePendingTransactions('oliver-address');


console.log('\nBalance of Oliver is', RithikaOliverCoin.getBalanceOfAddress('oliver-address'));


console.log('Mining Block 1...');
RithikaOliverCoin.addBlock(new Block(1, "02/05/2022", { amount: 4 }));
console.log('Mining Block 2...');
RithikaOliverCoin.addBlock(new Block(2, "03/05/2022", { amount: 8 }));
console.log('Mining Block 3...');
RithikaOliverCoin.addBlock(new Block(3, "04/05/2022", { amount: 12 }));
*/
//console.log('Is blockchain valid?' + RithikaOliverCoin.isChainValid());
//console.log(JSON.stringify(RithikaOliverCoin, null, 4));


