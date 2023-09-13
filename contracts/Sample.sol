//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Sample is Initializable  {

    address public contractOwner;

    function initialize() public initializer {
        contractOwner = msg.sender;
    }

}