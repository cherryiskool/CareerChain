const ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_university",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_major",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_levelOfDegree",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_company",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_role",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_duration",
          "type": "string[]"
        },
        {
          "internalType": "address",
          "name": "_previousCV",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "company",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "duration",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "educationAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "levelOfDegree",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "major",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "previousCV",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "role",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "university",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "username",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "workAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

const bytecode = "0x60806040523480156200001157600080fd5b5060405162001057380380620010578339818101604052810190620000379190620003ed565b87600090805190602001906200004f9291906200014d565b50866001908051906020019062000068929190620001de565b50856002908051906020019062000081929190620001de565b5084600390805190602001906200009a929190620001de565b508360049080519060200190620000b3929190620001de565b508260059080519060200190620000cc929190620001de565b508160069080519060200190620000e5929190620001de565b5060018054905060088190555060058054905060098190555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050506200070d565b8280546200015b906200065f565b90600052602060002090601f0160209004810192826200017f5760008555620001cb565b82601f106200019a57805160ff1916838001178555620001cb565b82800160010185558215620001cb579182015b82811115620001ca578251825591602001919060010190620001ad565b5b509050620001da919062000245565b5090565b82805482825590600052602060002090810192821562000232579160200282015b8281111562000231578251829080519060200190620002209291906200014d565b5091602001919060010190620001ff565b5b50905062000241919062000264565b5090565b5b808211156200026057600081600090555060010162000246565b5090565b5b808211156200028857600081816200027e91906200028c565b5060010162000265565b5090565b5080546200029a906200065f565b6000825580601f10620002ae5750620002cf565b601f016020900490600052602060002090810190620002ce919062000245565b5b50565b6000620002e9620002e38462000593565b6200055f565b9050808382526020820190508260005b858110156200032d5781518501620003128882620003c0565b845260208401935060208301925050600181019050620002f9565b5050509392505050565b60006200034e6200034884620005c2565b6200055f565b9050828152602081018484840111156200036757600080fd5b6200037484828562000629565b509392505050565b6000815190506200038d81620006f3565b92915050565b600082601f830112620003a557600080fd5b8151620003b7848260208601620002d2565b91505092915050565b600082601f830112620003d257600080fd5b8151620003e484826020860162000337565b91505092915050565b600080600080600080600080610100898b0312156200040b57600080fd5b600089015167ffffffffffffffff8111156200042657600080fd5b620004348b828c01620003c0565b985050602089015167ffffffffffffffff8111156200045257600080fd5b620004608b828c0162000393565b975050604089015167ffffffffffffffff8111156200047e57600080fd5b6200048c8b828c0162000393565b965050606089015167ffffffffffffffff811115620004aa57600080fd5b620004b88b828c0162000393565b955050608089015167ffffffffffffffff811115620004d657600080fd5b620004e48b828c0162000393565b94505060a089015167ffffffffffffffff8111156200050257600080fd5b620005108b828c0162000393565b93505060c089015167ffffffffffffffff8111156200052e57600080fd5b6200053c8b828c0162000393565b92505060e06200054f8b828c016200037c565b9150509295985092959890939650565b6000604051905081810181811067ffffffffffffffff82111715620005895762000588620006c4565b5b8060405250919050565b600067ffffffffffffffff821115620005b157620005b0620006c4565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620005e057620005df620006c4565b5b601f19601f8301169050602081019050919050565b6000620006028262000609565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620006495780820151818401526020810190506200062c565b8381111562000659576000848401525b50505050565b600060028204905060018216806200067857607f821691505b602082108114156200068f576200068e62000695565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006fe81620005f5565b81146200070a57600080fd5b50565b61093a806200071d6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063447f238a11610066578063447f238a1461018157806352994ab5146101b157806361fac54d146101cf578063a2333c8f146101ed578063eacebba31461020b5761009e565b8063079c345d146100a3578063080a0a80146100d357806321d0a2a0146100f1578063340793ee1461012157806335bc546214610151575b600080fd5b6100bd60048036038101906100b89190610718565b61023b565b6040516100ca91906107b3565b60405180910390f35b6100db6102e7565b6040516100e89190610798565b60405180910390f35b61010b60048036038101906101069190610718565b61030d565b60405161011891906107b3565b60405180910390f35b61013b60048036038101906101369190610718565b6103b9565b60405161014891906107b3565b60405180910390f35b61016b60048036038101906101669190610718565b610465565b60405161017891906107b3565b60405180910390f35b61019b60048036038101906101969190610718565b610511565b6040516101a891906107b3565b60405180910390f35b6101b96105bd565b6040516101c691906107d5565b60405180910390f35b6101d76105c3565b6040516101e491906107b3565b60405180910390f35b6101f5610651565b60405161020291906107d5565b60405180910390f35b61022560048036038101906102209190610718565b610657565b60405161023291906107b3565b60405180910390f35b6002818154811061024b57600080fd5b9060005260206000200160009150905080546102669061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546102929061087b565b80156102df5780601f106102b4576101008083540402835291602001916102df565b820191906000526020600020905b8154815290600101906020018083116102c257829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6005818154811061031d57600080fd5b9060005260206000200160009150905080546103389061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546103649061087b565b80156103b15780601f10610386576101008083540402835291602001916103b1565b820191906000526020600020905b81548152906001019060200180831161039457829003601f168201915b505050505081565b600181815481106103c957600080fd5b9060005260206000200160009150905080546103e49061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546104109061087b565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b505050505081565b6006818154811061047557600080fd5b9060005260206000200160009150905080546104909061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc9061087b565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b505050505081565b6003818154811061052157600080fd5b90600052602060002001600091509050805461053c9061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546105689061087b565b80156105b55780601f1061058a576101008083540402835291602001916105b5565b820191906000526020600020905b81548152906001019060200180831161059857829003601f168201915b505050505081565b60085481565b600080546105d09061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546105fc9061087b565b80156106495780601f1061061e57610100808354040283529160200191610649565b820191906000526020600020905b81548152906001019060200180831161062c57829003601f168201915b505050505081565b60095481565b6004818154811061066757600080fd5b9060005260206000200160009150905080546106829061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546106ae9061087b565b80156106fb5780601f106106d0576101008083540402835291602001916106fb565b820191906000526020600020905b8154815290600101906020018083116106de57829003601f168201915b505050505081565b600081359050610712816108ed565b92915050565b60006020828403121561072a57600080fd5b600061073884828501610703565b91505092915050565b61074a8161080c565b82525050565b600061075b826107f0565b61076581856107fb565b9350610775818560208601610848565b61077e816108dc565b840191505092915050565b6107928161083e565b82525050565b60006020820190506107ad6000830184610741565b92915050565b600060208201905081810360008301526107cd8184610750565b905092915050565b60006020820190506107ea6000830184610789565b92915050565b600081519050919050565b600082825260208201905092915050565b60006108178261081e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561086657808201518184015260208101905061084b565b83811115610875576000848401525b50505050565b6000600282049050600182168061089357607f821691505b602082108114156108a7576108a66108ad565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6108f68161083e565b811461090157600080fd5b5056fea26469706673582212204d4027a97e3dcb7b96cd08ab61e1064bd29ee641c0f982e85ea64c190fd4431664736f6c63430008000033"

// function to get CV from the blockchain
const getCV = async () => {
  const url = window.location.href;

  let indexOfUrl = String(url).indexOf("profile/");
  let user = String(url).slice(indexOfUrl + 8);
  let userDetailsRequest = await fetch(`/userDetails/${user}`);

  // get the details of the page's user
  if (!userDetailsRequest.ok) {
      userDetailsRequest = await userDetailsRequest.json();
      throw new Error(userDetailsRequest.error);
  }

  // get their contract address to connect to it later
  userDetailsRequest = await userDetailsRequest.json();
  const currentCV = userDetailsRequest.contractAddress;

  if (currentCV == '0x0000000000000000000000000000000000000000') {
    let h4 = document.createElement("h4");
    h4.innerHTML = "User has not uploaded CV";
    document.getElementById("noCVMessage").append(h4);
    return
  }

  window.web3 =  await new Web3(window.ethereum);
  window.contract = new window.web3.eth.Contract(ABI, currentCV);

  // call these to know how many loops to create to list their cv details (workAmount = the amount of jobs theyve had, educationAmount = amount of education theyve had)
  const educationAmount = await window.contract.methods.educationAmount().call();
  const workAmount = await window.contract.methods.workAmount().call();
  console.log(educationAmount, workAmount);

  let p = document.createElement("p")
  p.innerHTML = currentCV;
  document.getElementById("profileEducation").append(p);

  // list each education detail for each institution they have studied at
  for (let i = 0; i < educationAmount; i++) {
    if (i == 0) {
      let h3 = document.createElement("h3");
      h3.innerHTML = "Education";
      document.getElementById("profileEducation").append(h3);
    }
    let p1 = document.createElement("p");
    p1.style.fontWeight = "bold";
    p1.innerHTML = await window.contract.methods.university(i).call();
    document.getElementById("profileEducation").append(p1);

    let p2 = document.createElement("p")
    p2.innerHTML = await window.contract.methods.major(i).call();
    document.getElementById("profileEducation").append(p2);

    let p3 = document.createElement("p")
    p3.innerHTML = await window.contract.methods.levelOfDegree(i).call();
    document.getElementById("profileEducation").append(p3);
  }

  for (let i = 0; i < workAmount; i++) {
    if (i == 0) {
      let h3 = document.createElement("h3");
      h3.innerHTML = "Work History";
      document.getElementById("profileWorkHistory").append(h3);
    }
    let p4 = document.createElement("p")
    p4.style.fontWeight = "bold"
    p4.innerHTML = await window.contract.methods.company(i).call();
    document.getElementById("profileWorkHistory").append(p4);

    let p5 = document.createElement("p")
    p5.innerHTML = await window.contract.methods.role(i).call();
    document.getElementById("profileWorkHistory").append(p5);

    let p6 = document.createElement("p")
    p6.innerHTML = await window.contract.methods.duration(i).call();
    document.getElementById("profileWorkHistory").append(p6);    
  }
}

getCV();

const deployContract = async (event) => {
  // prevent the form from submitting
    event.preventDefault();

    try {
        // gets current users details to deploy the contract with
        let userDetailsRequest = await fetch('/currentUserDetails');

        if (!userDetailsRequest.ok) {
            userDetailsRequest = await userDetailsRequest.json();
            throw new Error(userDetailsRequest.error);
        }

        userDetailsRequest = await userDetailsRequest.json();
        const username = userDetailsRequest.username;
        // ensures that the wallet address the user deploys the contract with is the same they are registered with
        const walletAddress = userDetailsRequest.walletAddress;
        const previousCV = userDetailsRequest.contractAddress;

        const university = [];
        const major = [];
        const levelOfDegree = [];
        const company = [];
        const role = [];
        const duration = [];

        const allUniversity = document.getElementsByClassName("educationUniversity");
        const allMajor = document.getElementsByClassName("educationMajor");
        const allLevelOfDegree = document.getElementsByClassName("educationLevelOfDegree");
        const allCompany = document.getElementsByClassName("workHistoryCompany");
        const allRole = document.getElementsByClassName("workHistoryRole");
        const allDuration = document.getElementsByClassName("workHistoryDuration");

        for(let i = 0; i < allUniversity.length; i++) {
            university.push(allUniversity[i].value);
            major.push(allMajor[i].value);
            levelOfDegree.push(allLevelOfDegree[i].value);
        }

        for(let i = 0; i < allRole.length; i++) {
            company.push(allCompany[i].value);
            role.push(allRole[i].value);
            duration.push(allDuration[i].value);
        }

        window.web3 = await new Web3(window.ethereum);
        window.contract = new window.web3.eth.Contract(ABI);

        const deployment = await window.contract.deploy({
            data: bytecode,
            arguments: [username, university, major, levelOfDegree,
                        company, role, duration, previousCV]
        }).send({from: walletAddress, gas: 6000000});

        const newContractAddress = deployment.options.address;

        // updates the users contract address with their new one (the previous one as shown above is saved in the new smart contract)
        let updateContractRequest = await fetch('/editProfileContractAddress', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({contractAddress: newContractAddress})
        });

        if(!updateContractRequest.ok) {
            updateContractRequest = updateContractRequest.json()
            throw new Error(updateContractRequest.error);
        }

    } catch (err) {
        alert(err);
    }
}