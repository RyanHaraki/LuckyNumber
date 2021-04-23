pragma solidity >=0.4.26;

contract LuckyNumber {
    mapping(address => uint256) numbers;
    mapping(address => bool) hasNumber;
    mapping(uint256 => bool) allNums;

    event numberAdded(uint256 num, address sender);
    event numberGot(uint256 num, address sender);

    function setNum(uint256 _num) public {
        // If user already has lucky number, num is out of bounds, or number has been taken by another user, reject
        require(
            !hasNumber[msg.sender],
            "This wallet already has a lucky number"
        );
        require(!allNums[_num], "This number has already been taken");
        require(
            _num >= 0 && _num <= 10000,
            "This number is out of bounds. Must be between 0 and 10,000."
        );

        // On setNum, set the senders number to the chosen num and hasNumber to true
        numbers[msg.sender] = _num;
        hasNumber[msg.sender] = true;

        // Add taken number to allNums so nobody else can take it.
        allNums[_num] = true;

        // Emit to frontend that a number has been added to block.
        emit numberAdded(_num, msg.sender);
    }

    //Get the senders lucky number based on wallet address
    function getNum(address _myAddress) public returns (uint256) {
        return numbers[_myAddress];
        emit numberGot(numbers[_myAddress], _myAddress);
    }
}
