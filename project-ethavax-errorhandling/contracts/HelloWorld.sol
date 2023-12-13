// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.17;

contract HelloWorld {
   
    function requireSample (uint _i) public pure returns (string memory) {

        require (_i > 15, "Please input a value greater than 15"); 
        return "Hello, World!";
    }

    function revertSample (uint _i) public pure returns (string memory) {

        if (_i <= 15) {
            revert("Please input a value greater than 15");
             
        } else {
           return "Hello, World!";
        }
    }
    
    uint public num; 
    
    function assertSample (uint _i) public view {

        assert(num == 0);
    }
}
