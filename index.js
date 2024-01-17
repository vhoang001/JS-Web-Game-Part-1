//Bonus
// Function to add a background tile
function newTile(src, left, bottom) {
    let tile = document.createElement('img');
    tile.src = src;
    tile.style.position = 'fixed';
    tile.style.left = left + 'px';
    tile.style.bottom = bottom + 'px';
    document.body.append(tile);
}

// Calculate the number of tiles needed
const tilesWidth = Math.ceil(window.innerWidth / 100);
const tilesHeight = Math.ceil(window.innerHeight / 100);

// Place sky tiles on the top half of the screen
for (let x = 0; x < tilesWidth; x++) {
    for (let y = Math.floor(tilesHeight / 2); y < tilesHeight; y++) {
        newTile('assets/sky.png', x * 100, y * 100);
    }
}

// Place grass tiles on the bottom half of the screen
for (let x = 0; x < tilesWidth; x++) {
    for (let y = 0; y < Math.floor(tilesHeight / 2); y++) {
        newTile('assets/grass.png', x * 100, y * 100);
    }
}

// Define the newImage function
function newImage(src, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
}

// Green character code
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

// Added code for pine tree
let pineTree = document.createElement('img');
pineTree.src = 'assets/pine-tree.png';
pineTree.style.position = 'fixed';
pineTree.style.left = '450px';
pineTree.style.bottom = '200px';
document.body.append(pineTree);

//Add More Items
newImage('assets/tree.png', '200px', '300px'); 
newImage('assets/pillar.png', '350px', '100px');      
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

//  Update the newItem Function
function newItem(src, left, bottom) {
    let item = document.createElement('img');
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);

    // Add a click event listener to remove the item
    item.addEventListener('dbclick', function() {
        item.remove();
    });
}

// Use newItem to create a sword
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');



