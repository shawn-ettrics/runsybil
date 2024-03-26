window.run = function(program, settings) {
    const { element, fps } = settings;
    const frameDuration = 1000 / fps;
    let lastFrameTime = 0;

    function frame(time) {
        if (time - lastFrameTime > frameDuration) {
            lastFrameTime = time;
            updateCanvas(element, program);
        }
        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

let startTime = Date.now(); // Initialize start time outside of updateCanvas

function updateCanvas(element, program) {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    const charWidth = 12; // Adjust based on your font size and element styling
    const charHeight = 18; // Adjust based on your font size and element styling

    const width = Math.floor(window.innerWidth / charWidth);
    const height = Math.floor(window.innerHeight / charHeight);

    let output = '';
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            output += program.main({x, y}, {time: elapsedTime});
        }
        output += '\n';
    }
    element.textContent = output;
}
