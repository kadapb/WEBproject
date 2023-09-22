function createBrick() {
    const brick = document.createElement("div");
    brick.classList.add("brick");
    return brick;
}

const brickWall = document.querySelector(".brick-wall");

for (let i = 0; i < 1500; i++) {
    const brick = createBrick();
    brickWall.appendChild(brick);

    if ((i + 1) % 100 > 50 || (i + 1) % 100 === 0) {
        brick.style.marginLeft = '25px';
    }
}