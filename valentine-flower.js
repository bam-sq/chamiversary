
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Select the heart button using its ID
const heartButton = document.getElementById('heartButton');

// Add a click event listener to the heart button
heartButton.addEventListener('click', function () {
    // Redirect to the flower page
    location.href = 'valentine-flower.html';
});

// Select the button using its ID
const nextPageButton = document.getElementById('nextPageButton');

// Add a click event listener to the button
nextPageButton.addEventListener('click', function () {
    // Change the page based on a condition
    const userClicked = true; // This can be set based on your logic

    if (userClicked) {
        // Redirect to the next page
        location.href = 'TheQuestion.html';
    } else {
        // Optionally, you can handle the case where the user did not click
        alert("You did not click the button!");
    }
});

// Add an event listener to the body
document.body.addEventListener('click', function () {
    // Redirect to "TheQuestion" page
    window.location.href = 'TheQuestion.html'; // Ensure the correct path to TheQuestion page
});