

const hre = require("hardhat");


async function listenfun(contract) {

  contract.on("ValueChanged", (author, oldValue, newValue, event) => {
    console.log("---------------->>>");
    console.log(author);
    console.log(oldValue);
    console.log(newValue);
    console.log(event.blockNumber);
    console.log("----------------<<<");
  });

}

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};

async function main() {

  const greeter = await hre.ethers.getContractAt(
      "Greeter",
      "0xD0AAf377E11eC2e459894bdc91C37AcF6e6E9895");

  listenfun(greeter);
 
  console.log("Greeter address:", greeter.address);
  console.log(await greeter.greet());

  await greeter.setGreeting("Hello, D!");

  for (i = 0; i < 100; i++) { 
    await wait(100);
  }
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
