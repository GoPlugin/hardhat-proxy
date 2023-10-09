# Usage

## use node 16.x

nvm use v16.20.2

## create .env file

```
APOTHEM_RPC_URL=https://erpc.apothem.network
MAINNET_RPC_URL=https://erpc.xinfin.network
PRIVATE_KEY=<YOUR-PRIVATE-KEY>
```

## Run below commands

```bash
npm install
npx hardhat compile

# for testnet apothem
npx hardhat run scripts/deploy.js --network apothem

# for mainnet xinfin
npx hardhat run scripts/deploy.js --network mainnet
```
