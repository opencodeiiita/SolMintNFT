const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Solana
const namePrefix = "Art of Eyes";
const description = "NFTs diplaying various versions of eyes, built using stack of various layers of assets.";
const baseUri = "ipfs://NewUriToReplace";


const solanaMetadata = {
  symbol: "",
  seller_fee_basis_points: 1000, //Defines how much % you want from secondary market sales 1000 = 10%.
  external_url: "",
  creators: [
    // Add the creators and their respective shares over here.
  ],
};


// If you have selected Solana then the collection starts from 0 automatically.
const layerConfigurations = [

  // Write the code for specifying the order of stacking of the various layers of the NFTs here.

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {

  // Specify the height and width of the NFTs
  smoothing: false,
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
