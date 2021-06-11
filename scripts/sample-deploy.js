

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

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, A!");

  await greeter.deployed();

  listenfun(greeter);
 
  console.log("Greeter deployed to:", greeter.address);
  console.log(await greeter.greet()); 

  await greeter.setGreeting("Hello, B!");
  console.log(await greeter.greet());

  await greeter.setGreeting("Hello, C!");
  console.log(await greeter.greet());

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
