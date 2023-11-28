import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {
  Verifier,
  Verifier__factory,
  ZkApp,
  ZkApp__factory,
} from "../typechain";
import { ZKPClient, EdDSA } from "circuits";
import { BigNumber } from "ethers";
import fs from "fs";
import path from "path";

describe("Test ZKP contract", function () {
  let verifier: Verifier;
  let zkApp: ZkApp;
  let deployer: SignerWithAddress;
  let client: ZKPClient;
  let eddsa: EdDSA;
  this.beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    verifier = await new Verifier__factory(deployer).deploy();
    eddsa = await new EdDSA(
      "0xABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD"
    ).init();
    zkApp = await new ZkApp__factory(deployer).deploy(verifier.address);
    client = await new ZKPClient().init(
      fs.readFileSync(
        path.join(__dirname, "../../circuits/zk/circuits/main_js/main.wasm")
      ),
      fs.readFileSync(path.join(__dirname, "../../circuits/zk/zkeys/main.zkey"))
    );
  });
});
