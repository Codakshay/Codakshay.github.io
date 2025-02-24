const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "python",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    autoRefresh: true,
    lineWrapping: true,
});

document.getElementById("run-btn").addEventListener("click", function() {
    const code = editor.getValue();
    const outputFrame = document.getElementById("output-frame");
    
    // Reset iframe content and correctly inject canvas
    const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <html>
        <head>
            <style>
                body { background: #1e1e1e; text-align: center; color: #c7e3ff; }
                pre { color: #c7e3ff; font-size: 14px; padding: 10px; text-align: left; }
                canvas { display: block; margin: 10px auto; background: #1e1e1e; border: 1px solid #a0c4ff; }
            </style>
        </head>
        <body>
            <pre>Python 3.8.10 (default, May  4, 2021, 08:55:58)\n[GCC 8.4.0] on linux\n>>> ${code.split('\n').join('\n>>> ')}\n\nGenerating plot...</pre>
            <canvas id="sineCanvas" width="500" height="300"></canvas>
            <script>
                (function() {
                    const canvas = document.getElementById('sineCanvas');
                    const ctx = canvas.getContext('2d');
                    ctx.strokeStyle = '#a0c4ff';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    for (let i = 0; i <= 500; i++) {
                        let x = i;
                        let y = 150 + 100 * Math.sin(i * 0.02);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                })();
            <\/script>
        </body>
        </html>
    `);
    iframeDoc.close();
});





    
















// document.addEventListener("DOMContentLoaded", function () {
//     const animal = document.getElementById("animatedAnimal");
//     let isFollowingCursor = false;

//     function moveAnimalRandomly() {
//         if (!isFollowingCursor) {
//             const x = Math.random() * (window.innerWidth - 100);
//             const y = Math.random() * (window.innerHeight - 100);
//             createTextTrail(x, y); // Create text trail with old animation
//             animal.style.left = `${x}px`;
//             animal.style.top = `${y}px`;
//         }
//     }

//     // Function to create a permanent clickable text trail
//     function createTextTrail(x, y) {
//         const textElement = document.createElement("a");
//         textElement.className = "textTrail";
//         textElement.style.left = `${x}px`;
//         textElement.style.top = `${y}px`;
//         textElement.innerHTML = getRandomText(); // Randomized text
//         textElement.href = "https://example.com"; // Change to your desired link
//         textElement.target = "_blank"; // Opens link in a new tab
//         document.body.appendChild(textElement);
//     }

//     // Function to randomize text trail phrases
//     function getRandomText() {
//         const texts = ["Explore", "Click Me!", "Mystery Link", "Surprise", "Go Here!", "Secret", "Next Step"];
//         return texts[Math.floor(Math.random() * texts.length)];
//     }

//     // Move the object randomly every 3 seconds
//     setInterval(moveAnimalRandomly, 3000);

//     // Make the object follow the cursor on click
//     document.addEventListener("mousedown", function () {
//         isFollowingCursor = true;
//     });

//     document.addEventListener("mousemove", function (event) {
//         if (isFollowingCursor) {
//             createTextTrail(event.clientX, event.clientY); // Leave clickable text trails
//             animal.style.left = `${event.clientX}px`;
//             animal.style.top = `${event.clientY}px`;
//         }
//     });

//     // Release the object back to wandering
//     document.addEventListener("mouseup", function () {
//         isFollowingCursor = false;
//     });

//     // Start with a random position
//     moveAnimalRandomly();
// });
