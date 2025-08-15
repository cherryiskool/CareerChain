let account;
const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        // this automatically checks the users wallet
        account = accounts[0];
        document.getElementById("walletAddressLogin").value = `${account}`;
    }
}