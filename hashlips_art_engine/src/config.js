const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Solana
const namePrefix = "Art of Eyes";
const description = "NFTs diplaying various versions of eyes, built using stack of various layers of assets.";
const baseUri = "ipfs://NewUriToReplace";


const solanaMetadata = {
  symbol: "AOE",
  seller_fee_basis_points: 600, //Defines how much % you want from secondary market sales 1000 = 10%.
  external_url: "",
  creators: [
    // Add the creators and their respective shares over here.
    {
      address: "hd8pVhXSRx3K5TEKus9PP3CkQ95E9UUcDmc6H9S7eFH",
      share: 100,
    },
    {
      address: "Dq9SmVjaRpH5Bec5n8KoZALcVgbqQAJ6SnGw6SUMuQCZ",
      share: 100,
    },
  ],
};


// If you have selected Solana then the collection starts from 0 automatically.
const layerConfigurations = [

  // Write the code for specifying the order of stacking of the various layers of the NFTs here.
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },

  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Top lid" },
      { name: "Bottom lid" },
      { name: "Shine" },
    ],
  },

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {

  // Specify the height and width of the NFTs
  smoothing: false,
  width: 600,
  height: 600,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  // Mention the ratio of the pixels as given in the issue description.
  
  ratio: 3 / 128,
  // The lower the number on the left, the more pixelated the image will be.
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
