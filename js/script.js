// Find the form element by its id and listen for the "submit" event
// When the user tries to submit the form, this function runs
document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Create an empty array to hold all error messages we might find
    let errorMessages = [];

    // Get the values from each input field and remove extra spaces at the beginning and end
    // .trim() is used so that a field with only spaces is considered empty
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Find the <div> where we will display error messages (it has id="errorMessages")
    let errorContainer = document.getElementById("errorMessages");
    
    // Clear any old error messages that might be inside the container
    // This ensures that only the new errors are shown
    errorContainer.innerHTML = "";

    // ---------- Check that every field is filled in ----------
    // If fullName is an empty string, add an error message to our list
    if (fullName === "") {
        errorMessages.push("Full Name is required.");
    }

    // If email is empty, add an error
    if (email === "") {
        errorMessages.push("Email is required.");
    }

    // If phone is empty, add an error
    if (phone === "") {
        errorMessages.push("Phone number is required.");
    }

    // If message is empty, add an error
    if (message === "") {
        errorMessages.push("Message is required.");
    }

    // ---------- Check that the email address looks valid ----------
    // This is a simple pattern (regular expression) that checks for a basic email format:
    // It must have some characters before '@', then some characters after '@', then a dot,
    // and finally 2 or 3 letters (like .com, .org, .net)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Only check the email format if the email field is not empty (to avoid double errors)
    // The .match() method checks if the email matches the pattern
    if (email !== "" && !email.match(emailPattern)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // ---------- Decide what to do next ----------
    // If we collected any error messages (the array is not empty) ...
    if (errorMessages.length > 0) {
        // ... stop the form from being sent to the server.
        // The event.preventDefault() method cancels the normal form submission.
        event.preventDefault();

        // Loop through each error message in the array
        errorMessages.forEach(function(oneError) {
            // Add the error message inside a <p> (paragraph) element to the error container
            // This makes each error appear on a new line in the browser
            errorContainer.innerHTML += "<p>" + oneError + "</p>";
        });
    }
    // If there are no errors (errorMessages.length is 0), we do nothing special.
    // The form will continue to submit normally to the server (process.php).
});