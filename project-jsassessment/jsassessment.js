/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const monsterList = []; 
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


function mintNFT(monsterName, monsterType, monsterLevel) {
    
    const nftMonster = {
        name: monsterName, 
        type: monsterType, 
        level: monsterLevel
    }

    monsterList.push(nftMonster);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for (i = 0; i < monsterList.length; i++) {
        
        console.log(`\nID = `, i + 1);
        console.log(`Name = ${monsterList[i].name}`)
        console.log(`Type = ${monsterList[i].type}`)
        console.log(`Level = ${monsterList[i].level}`);
       
        
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    console.log(`Total Number of Minted NFTs = ${monsterList.length}`)

}

// call your functions below this line


mintNFT("Pikachu", "Electric", 35); 
mintNFT("Squirtle", "Water", 10); 
mintNFT("Charmander", "Fire", 8); 
mintNFT("Bulbasaur", "Fire", 8); 
listNFTs(); 
getTotalSupply(); 

