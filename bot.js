let isRunning = false;
const endpoint = "https://hashbin.onrender.com"; // Replace with your API endpoint

function sendRequest() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log("Request sent successfully. Response:", data);
            updateStatus("Request sent successfully.");
        })
        .catch(error => {
            console.error("An error occurred:", error);
            updateStatus("An error occurred.");
        });
}

function startBot() {
    if (!isRunning) {
        isRunning = true;
        updateStatus("Bot is running...");
        intervalId = setInterval(sendRequest, 30000); // 30000ms = 30 seconds
    }
}

function stopBot() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        updateStatus("Bot is stopped.");
    }
}

function updateStatus(message) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = message;
}

// Event listeners for start and stop buttons
document.getElementById("startButton").addEventListener("click", startBot);
document.getElementById("stopButton").addEventListener("click", stopBot);
