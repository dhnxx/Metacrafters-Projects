# project-createandminttoken

This AVAX project demonstrates creating a token using ERC20 Contract with OpenZeppelin's Library.

## Overview

### Able to Mint and Burn Tokens

This project ables the user to mint and burn their own token using the OpenZeppelin's available functions.

### Able to Transfer token from one account to another

This project ables the user to transfer tokens from one account to another account.

## Remix Default WorkSpace

Remix default workspace is present when:
i. Remix loads for the very first time
ii. A new workspace is created with 'Default' template
iii. There are no files existing in the File Explorer

This workspace contains 3 directories:

1. 'contracts': Holds three contracts with increasing levels of complexity.
2. 'scripts': Contains four typescript files to deploy a contract. It is explained below.
3. 'tests': Contains one Solidity test file for 'Ballot' contract & one JS test file for 'Storage' contract.

SCRIPTS

The 'scripts' folder has four typescript files which help to deploy the 'Storage' contract using 'web3.js' and 'ethers.js' libraries.

For the deployment of any other contract, just update the contract's name from 'Storage' to the desired contract and provide constructor arguments accordingly
in the file `deploy_with_ethers.ts` or `deploy_with_web3.ts`

In the 'tests' folder there is a script containing Mocha-Chai unit tests for 'Storage' contract.

To run a script, right click on file name in the file explorer and click 'Run'. Remember, Solidity file must already be compiled.
Output from script will appear in remix terminal.

Please note, require/import is supported in a limited manner for Remix supported modules.
For now, modules supported by Remix are ethers, web3, swarmgw, chai, multihashes, remix and hardhat only for hardhat.ethers object/plugin.
For unsupported modules, an error like this will be thrown: '<module_name> module require is not supported by Remix IDE' will be shown.

## OpenZeppelin Documentation

https://docs.openzeppelin.com/contracts/4.x/erc20

## Executing Program

1. Run Remix Ethereum's [website](remix.ethereum.org)
2. Import all the files in the default workspace
3. Compile the project
4. Deploy the Contract.

## Author/s

Contributor/s names and contact info:

Dhanco Mendoza [@dhnxx](https://github.com/dhnxx)
