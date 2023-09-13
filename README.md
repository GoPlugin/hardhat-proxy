
# NVM version tried
nvm use 16.10.0

# Do npm install --force

# npx hardhat compile

# npx hardhat run scripts/deploy.js --network apothem  or mainnet

You will see the following message & error
```
Compiled 1 Solidity file successfully
Deploying samlpe...
ProviderError: too many arguments, want at most 1

```

# npx hardhat run scripts/deploy.js --network polygon or fantom

```
it works fine
```

# create .env file with following parameters

```
APOTHEM_RPC_URL=https://erpc.apothem.network
MAINNET_RPC_URL=https://rpc.xinfin.network
PRIVATE_KEY=ENTER YOUR PRIVATE KEY
```