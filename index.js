'use strict';

let form = document.querySelector('.login_form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let button = document.querySelector('.submit_btn');
    button.style.cssText = "pointer-events: none; background-color: grey; color: white;";

    // Optionally, show loading state to the user
    let loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
        loadingMessage.style.display = 'block'; // Show loading message or spinner
    }

    fetch("https://175371-gtmretailbank-stage.adobeio-static.net/api/v1/web/GtmRetailBank/stub/authUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Key': 'retailbank'
        },
        body: JSON.stringify({
            "userid": event.target.username.value,
            "password": event.target.password.value
        }),
    })
    .then(response => {
        if (!response.ok) { // Check if response status is not OK
            throw new Error('Invalid credentials or network issue');
        }
        return response.json(); // Parse JSON if the response is okay
    })
    .then(data => {
        console.log(data);
        // Ensure data structure is correct and doesn't overwrite userId with password
        if (data) {
            data["userId"] = event.target.username.value; // Use username value here instead of password
        }

        var expires = new Date();
        expires.setTime(expires.getTime() + (900 * 1000));  // 15 seconds expiration
        document.cookie = "token=" + encodeURIComponent(JSON.stringify(data)) + "; expires=" + expires.toUTCString() + "; path=/"; 

        // Optionally redirect after login
        window.location.href = '/Retailpage.html'; // Redirect to the same page without query params
    })
    .catch(error => {
        console.error(error); // Log error details for debugging
        alert('Invalid credentials or network issue');
    })
    .finally(() => {
        // Re-enable the submit button after fetch completion
        button.style.cssText = "pointer-events: auto; background-color: initial; color: initial;";

        // Optionally hide loading message
        if (loadingMessage) {
            loadingMessage.style.display = 'none'; // Hide loading message
        }
    });
});
