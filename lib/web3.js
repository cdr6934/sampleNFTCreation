import Web3 from 'web3'
import Planetary from './Planetary.json'

let web3 = new Web3("https://rinkeby.infura.io/v3/50739090d3ee423da4ba5519ec7c06f9")

const contractAddress = "0x551F3E3D346c68b996942d37e687562364d01254"
const contract =  new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress }