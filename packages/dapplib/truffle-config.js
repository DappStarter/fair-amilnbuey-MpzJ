require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food bitter regret random slush install cloth equal gaze'; 
let testAccounts = [
"0xeda162c0080b34206a1bd011db6e523f6afa7314a90336832b5c2dc5f6ed22db",
"0x7906d0a53f11bee03363b19215709fc6cfbf7cd2067c64d0c8021a63c75c038d",
"0x60f6eae8c3b0e9dc0d17cc2f527fca0f58d5a55ae589972c3a2ec217f998d28f",
"0x1acce8d0319b83b81e317eccd67862c8d595df19a418cec0dcae72d3185304a3",
"0xd77f871f45d270f3edf5dfc200fd1686ef672da8fe24511f0b91db7da5bd3a9b",
"0x21eb3f7872977aaec1757c4c100d894ed96015066b4478a1bbb3fd99dfb0c605",
"0x08f993799e755c447635800b20a354c2e3eea5cb618531da65fd825976af31c3",
"0x850951e7be8e00543233353719c2985154e4c33b01575857d7392c1b083dbd9f",
"0xd05dbdc4232b7f418ba7bc4d4df3be38919ac58da03f0ec90870a212bcede0ad",
"0x6a70e55f700c431919a81db768696cae1a1ec7b75b5d23d358fbfe6cc1eb24c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

