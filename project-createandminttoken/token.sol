// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MyERC20Token is ERC20, Ownable, ERC20Burnable {
    constructor() ERC20("Dhnxvic", "DHNX") Ownable(msg.sender) {} 
    
  // Mint
   function mintTokens(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

  // Burn 
  function burnTokens(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    //Transfer 
    function transferTokens(address receiver, uint256 amount) external {
        _transfer(msg.sender, receiver, amount);
    }
}
