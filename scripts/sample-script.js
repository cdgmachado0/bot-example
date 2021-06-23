require('dotenv').config();

const uniFactoryAddr = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const sushiFactoryAdrr = "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac";

const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";





async function main() {

  const uniFactory = await hre.ethers.getContractAt("IUniswapV2Factory", uniFactoryAddr);
  const sushiFactory = await hre.ethers.getContractAt("IUniswapV2Factory", sushiFactoryAdrr);

  const daiWethUNI = await uniFactory.getPair(daiAddress, wethAddress);
  const daiWethSUSHI = await sushiFactory.getPair(daiAddress, wethAddress);

  const provider = new hre.ethers.providers.InfuraProvider('mainnet', process.env.INFURA_KEY_MAINNET);


  provider.on("block", async (blockNumber) => {

    try {

      console.log(blockNumber);

    } catch(err) {
      console.log(err);
    }

  });
  
}






main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
