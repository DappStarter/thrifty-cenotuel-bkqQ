require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note mirror punch hunt photo flock suit'; 
let testAccounts = [
"0x5e62c50e3f40c95e603c48ddc9845d37726d6bba56a20f47234e0e86062c259c",
"0xe69813ebf6bfabdcd1088b5ca8c02841ca81203bd875128d65574aeaf5848b18",
"0xc9135a1f28ced1a7111f58b72b3ed8203007aa40b32144821acc0e709617cbe0",
"0xcb6d34d90886ff214eb48604683a3f41af75ecfbfe7e19a57034420ae1bde70a",
"0xcfac0f99bb45fb34f6c3188c6d96a0b060a6dbb70ce5554a4678853507cfac07",
"0xe537a698ca70f44ef9813a8f9b055afaa5b99239b23c0e5381c850738796e320",
"0x7d479f1ee2a2312750645b9d90ab84b29069b9ca0945210cce7ba44eac3ce856",
"0x3188f48b3a13262d2df3d1da6647db1c5f1064ee4423195a879976b1ef60b993",
"0x7583d94ca253181f0be18d160de586d13e18fe09fbce2a0327503f0a04491dfa",
"0xc55dd2b85c14dc01d26395e9b60f7866f01f98d84aa9d1896fcdb717c7249c11"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


