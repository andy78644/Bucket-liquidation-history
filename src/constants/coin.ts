// export const CERT = "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT";
import { COIN } from "../types";

export const COINS_TYPE_LIST: Record<COIN, string> = {
  SUI: "0x2::sui::SUI",
  USDC: "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
  wUSDC:
    "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
  wUSDT:
    "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
  afSUI:
    "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI",
  haSUI:
    "0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI",
  vSUI: "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT",
  WETH: "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN",

  USDCbnb:
    "0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN",
  USDCsol:
    "0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN",
  USDCpol:
    "0xcf72ec52c0f8ddead746252481fb44ff6e8485a39b803825bde6b00d77cdb0bb::coin::COIN",
  USDCarb:
    "0xe32d3ebafa42e6011b87ef1087bbc6053b499bf6f095807b9013aff5a6ecd7bb::coin::COIN",

  BUCK: "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK",
  BKT: "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::bkt::BKT",
  BUCKETUS:
    "0x8d1aee27f8537c06d19c16641f27008caafc42affd2d2fb7adb96919470481ec::bucketus::BUCKETUS",
  USDY: "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY",
  NAVX: "0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX",
  SCA: "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA",
  SCABLE:
    "0x08a7a3c873402d7cf9d44192aae337e0b27a72c2a4a230d10230488cf614c5a2::scable::SCABLE",
  STAPEARL:
    "0xcffc684610db2d1956cfb25858678be8ea96d2766b4c756d4096abd38461f40a::stapearl::STAPEARL",
  sBUCK:
    "0x1798f84ee72176114ddbf5525a6d964c5f8ea1b3738d08d50d0d3de4cf584884::sbuck::SBUCK",
  CETUS:
    "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS",
  AUSD: "0x2053d08c1e2bd02791056171aab0fd12bd7cd7efad2ab8f6b9c8902f14df2ff2::ausd::AUSD",

  sSUI: "0xaafc4f740de0dd0dde642a31148fb94517087052f19afb0f7bed1dc41a50c77b::scallop_sui::SCALLOP_SUI",
  sSCA: "0x5ca17430c1d046fae9edeaa8fd76c7b4193a00d764a0ecfa9418d733ad27bc1e::scallop_sca::SCALLOP_SCA",
  sUSDC:
    "0x854950aa624b1df59fe64e630b2ba7c550642e9342267a33061d59fb31582da5::scallop_usdc::SCALLOP_USDC",
  swUSDC:
    "0xad4d71551d31092230db1fd482008ea42867dbf27b286e9c70a79d2a6191d58d::scallop_wormhole_usdc::SCALLOP_WORMHOLE_USDC",
  swUSDT:
    "0xe6e5a012ec20a49a3d1d57bd2b67140b96cd4d3400b9d79e541f7bdbab661f95::scallop_wormhole_usdt::SCALLOP_WORMHOLE_USDT",
  sSBETH:
    "0xb14f82d8506d139eacef109688d1b71e7236bcce9b2c0ad526abcd6aa5be7de0::scallop_sb_eth::SCALLOP_SB_ETH",

  spSUI:
    "0x83556891f4a0f233ce7b05cfe7f957d4020492a34f5405b2cb9377d060bef4bf::spring_sui::SPRING_SUI",
  mSUI: "0x922d15d7f55c13fd790f6e54397470ec592caa2b508df292a2e8553f3d3b274f::msui::MSUI",
  KOTO: "0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975::koto::KOTO",

  sbETH:
    "0xd0e89b2af5e4910726fbcd8b8dd37bb79b29e5f83f7491bca830e94f7f226d29::eth::ETH",
  FDUSD:
    "0xf16e6b723f242ec745dfd7634ad072c42d5c1d9ac9d62a39c381303eaa57693a::fdusd::FDUSD",

  AF_LP_USDC_BUCK:
    "0xf1b901d93cc3652ee26e8d88fff8dc7b9402b2b2e71a59b244f938a140affc5e::af_lp::AF_LP",
  AF_LP_SUI_BUCK:
    "0x62e39f5554a2badccab46bf3fab044e3f7dc889d42a567a68d3c1b2e5463001f::af_lp::AF_LP",
  stSUI:
    "0xd1b72982e40348d069bb1ff701e634c117bb5f741f44dff91e472d3b01461e55::stsui::STSUI",
};

export const COIN_DECIMALS: Record<COIN, number> = {
  SUI: 9,
  USDC: 6,
  wUSDC: 6,
  wUSDT: 6,
  afSUI: 9,
  haSUI: 9,
  vSUI: 9,
  WETH: 8,
  BUCK: 9,
  sBUCK: 9,
  BKT: 9,
  BUCKETUS: 9,
  STAPEARL: 6,
  USDY: 6,
  NAVX: 9,
  SCA: 9,
  CETUS: 9,
  SCABLE: 6,
  AUSD: 6,
  spSUI: 9,
  mSUI: 9,
  KOTO: 0,
  sbETH: 8,
  FDUSD: 6,

  sUSDC: 6,
  swUSDC: 6,
  sSUI: 9,
  sSCA: 9,
  swUSDT: 6,
  sSBETH: 8,

  AF_LP_USDC_BUCK: 9,
  AF_LP_SUI_BUCK: 9,

  USDCarb: 6,
  USDCpol: 6,
  USDCsol: 6,
  USDCbnb: 8,

  stSUI: 9,
};


export const PSM_POOL_IDS: Partial<Record<COIN, string>> = {
  BUCKETUS:
    "0xba86a0f37377844f38060a9f62b5c5cd3f8ba13901fa6c4ee5777c1cc535306b",
  SCABLE: "0xe3a3ca38171458c6f310bc9b4ba5d7bff7850b190049dcdb1e89ddbd7893d528",
  STAPEARL:
    "0xccdaf635eb1c419dc5ab813cc64c728a9f5a851202769e254f348bff51f9a6dc",
  wUSDC: "0x0c2e5fbfeb5caa4c2f7c8645ffe9eca7e3c783536efef859be03146b235f9e04",
  wUSDT: "0x607e7d386e29066b964934e0eb1daa084538a79b5707c34f38e190d64e24923e",
  USDCbnb: "0x973c51875b3fb9c8cf5d8ec4aeac83fddaacb88c17960fd5258d8fa38bc4dd82",
  USDCsol: "0x596d696153f405cdee285a0da122c8c9a4cf6c883298aaf9bec1149e0909e168",
  USDCpol: "0x741ec9190953ee9eaa1b92b2285f15a0c7068bac2e591bfa5f7f596a75ada351",
  USDCarb: "0x10970069e17f31aee9cb55c53237d3a62584582e05f3c2030f92ce9fc6365c90",
  AUSD: "0x5a0373b5c08f0d6a33bd88bfd89db7557613699ae88e4c0039e8f7c542551a7b",
  USDC: "0xd22388010d7bdb9f02f14805a279322a3fa3fbde42896b7fb3d1214af404c455",
  FDUSD: "0xb23092f74b7bbea45056d8564a7325be993cc2926b89f384367b9ad309dd92c5",
};
