const contBlocks = document.getElementById("container-blocks");

 for (var i = 1; i <= 100; i++) {
    contBlocks.innerHTML += `<div class="blocks">${i}</div>`; 
    if (i % 15 == 0) 
        contBlocks.innerHTML += `<div class="blocks red">${i}</div>`;
    else if (i % 3 == 0) 
        contBlocks.innerHTML += `<div class="blocks green">${i}</div>`;
    else if (i % 5 == 0) 
        contBlocks.innerHTML += `<div class="blocks yellow">${i}</div>`;
    else console.log(i);
}