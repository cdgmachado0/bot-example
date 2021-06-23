require('dotenv').config();

const uniFactoryAddr = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const sushiFactoryAdrr = "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac";

const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

describe("Flash Loaner", function() {
  let uniFactory, sushiFactory;

  it("should run the bot", async function() {
    
    uniFactory = await ethers.getContractAt("IUniswapV2Factory", uniFactoryAddr);
    sushiFactory = await ethers.getContractAt("IUniswapV2Factory", sushiFactoryAdrr);

    const daiWethUNI = await uniFactory.getPair(daiAddress, wethAddress);
    const daiWethSUSHI = await sushiFactory.getPair(daiAddress, wethAddress); 

    // const provider = await ethers.getDefaultProvider();
    const provider = new ethers.providers.InfuraProvider('mainnet', process.env.INFURA_KEY_MAINNET);

    provider.on("block", async (blockNumber) => {

      try {

        console.log(blockNumber);
        const reservers = await daiWethSUSHI.getReservers();
        console.log(reservers);

      } catch(err) {
        console.log(err);
      }


    });

    // console.log(provider);


    


    
    
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();

    
  });
});
