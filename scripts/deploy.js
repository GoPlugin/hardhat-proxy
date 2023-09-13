const { ethers, upgrades } = require("hardhat");

async function main() {
  //   const gas = await ethers.provider.getGasPrice();
  const sample = await ethers.getContractFactory("Sample");
  console.log("Deploying samlpe...");
  const v1contract = await upgrades.deployProxy(sample,[]);
  await v1contract.waitForDeployment();
  console.log("Contract deployed to:", await v1contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
