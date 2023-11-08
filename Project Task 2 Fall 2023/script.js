const groceryList = document.getElementById('groceryList');
const newItemInput = document.getElementById('newItem');

function addItem() {
    const itemName = newItemInput.value.trim();
    if (itemName !== '') {
        const li = document.createElement('li');
        li.textContent = itemName;
        li.addEventListener('click', toggleItem);
        groceryList.appendChild(li);
        newItemInput.value = '';
    }
}

function toggleItem() {
    this.classList.toggle('strikethrough');
}

function showRemaining() {
    const items = document.querySelectorAll('#groceryList li:not(.strikethrough)');
    items.forEach(item => item.style.display = 'list-item');
}

function showPurchased() {
    const items = document.querySelectorAll('#groceryList li.strikethrough');
    items.forEach(item => item.style.display = 'list-item');
}

function showAll() {
    const items = document.querySelectorAll('#groceryList li');
    items.forEach(item => item.style.display = 'list-item');
}
