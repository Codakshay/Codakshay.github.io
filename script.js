document.addEventListener("DOMContentLoaded", function () {
    const animal = document.getElementById("animatedAnimal");
    let isFollowingCursor = false;

    function moveAnimalRandomly() {
        if (!isFollowingCursor) {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            animal.style.left = `${x}px`;
            animal.style.top = `${y}px`;
        }
    }

    // Move the animal randomly every 3 seconds
    setInterval(moveAnimalRandomly, 3000);

    // Make the animal follow the cursor on click
    animal.addEventListener("mousedown", function () {
        isFollowingCursor = true;
    });

    document.addEventListener("mousemove", function (event) {
        if (isFollowingCursor) {
            animal.style.left = `${event.clientX}px`;
            animal.style.top = `${event.clientY}px`;
        }
    });

    // Release the animal back to wandering
    document.addEventListener("mouseup", function () {
        isFollowingCursor = false;
    });

    // Make the animal open a link when clicked
    animal.addEventListener("click", function () {
        window.open("https://example.com", "_blank"); // Change URL
    });

    // Start with a random position
    moveAnimalRandomly();
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
