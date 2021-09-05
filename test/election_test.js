var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    var electionInstance;

    // Check the value of candidatesCount 
    it("Initializes with 2 candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    // Check the value of each candidate
    it("Initializes the candidates with the correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "Constains the correct name");
            assert.equal(candidate[2], 0, "Constains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "Constains the correct name");
            assert.equal(candidate[2], 0, "Constains the correct votes count");
        });
    });
});