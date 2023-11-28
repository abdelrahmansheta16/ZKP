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
});
