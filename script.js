const contBlocks = document.getElementById("container-blocks");

for (let i = 1; i <= 100; i++) {
    contBlocks.innerHTML += `<div class="blocks"> 
    ${i}
    </div>`;
}