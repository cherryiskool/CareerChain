//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

contract StoreCV {
    string public username;
    string[] public university;
    string[] public major;
    string[] public levelOfDegree;
    string[] public company;
    string[] public role;
    string[] public duration;
    address public previousCV;
    uint256 public educationAmount;
    uint256 public workAmount;

    constructor(string memory _username, string[] memory _university,
                string[] memory _major, string[] memory _levelOfDegree,
                string[] memory _company, string[] memory _role,
                string[] memory _duration, address _previousCV) {
        username = _username;
        university = _university;
        major = _major;
        levelOfDegree= _levelOfDegree;
        company = _company;
        role = _role;
        duration = _duration;
        educationAmount = university.length;
        workAmount = role.length;
        previousCV = _previousCV;
    }
}