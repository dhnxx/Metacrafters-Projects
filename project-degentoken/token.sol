// SPDX-License-Identifier: MIT
// Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
// Transferring tokens: Players should be able to transfer their tokens to others.
// Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
// Checking token balance: Players should be able to check their token balance at any time.
// Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract DegenToken is ERC20, Ownable, ERC20Burnable {
    constructor() ERC20("Degen", "DGN") Ownable(msg.sender) {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

// Checking token balance: Players should be able to check their token balance at any time.
    function getBalance() external view returns (uint256) {
        return balanceOf(msg.sender);
    }

    // Transferring tokens: Players should be able to transfer their tokens to others.
    function transferTokens(address receiver, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(balanceOf(msg.sender) >= amount, "Insufficient Degen Tokens");
        _transfer(msg.sender, receiver, amount);
    }

    // Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.
    function burnTokens(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        _burn(msg.sender, amount);
    }

    // Displaying NFT items: Display three NFT items in the game store.

    function displayNFTItems() external pure returns (string memory, string memory, string memory) {
        // TODO: Replace with actual NFT item details.
        return ("Degen Tshirt", "Degen Bag", "Degen Poster");
    }


  function buyNFTItems(uint256 itemNumber) external {
    require(itemNumber >= 0 && itemNumber <= 2, "Invalid item number");

    // TODO: Implement logic to handle the purchase and burn tokens accordingly.
    // For now, let's assume each item costs 10 tokens.
    uint256 cost; 

    if (itemNumber == 0) {
        cost = 10;
    } else if (itemNumber == 1) {
        cost = 20;
    } else if (itemNumber == 2) {
        cost = 30;
    } else {
        revert("Invalid item number");
    }

    require(balanceOf(msg.sender) >= cost, "Insufficient Degen Tokens to buy the item");

    // Burn tokens
    _burn(msg.sender, cost);
}
}




