// Dummy data for messages with PDFs
const messages = [
    // Removed the initial "Hello!" message
    { user: "User2", content: "Check out this PDF:", type: "document", documentUrl: "/HomePage/dummy1.pdf" },
    // Add more messages as needed
];

// Function to display messages, including PDF thumbnails
// // Function to display messages, including PDF thumbnails
function displayMessages() {
    const chatMessages = document.querySelector(".chat-messages");

    // Loop through existing messages
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(message.user.toLowerCase());

        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");

        if (message.type === "text") {
            messageContent.textContent = `${message.user}: ${message.content}`;
        } else if (message.type === "document") {
            const documentLink = document.createElement("a");
            documentLink.href = message.documentUrl;
            documentLink.textContent = "View PDF";

            const pdfThumbnail = document.createElement("img");
            pdfThumbnail.classList.add("pdf-thumbnail");
            pdfThumbnail.src = "/HomePage/thumbnail2.jpg";
            pdfThumbnail.alt = "PDF Thumbnail";

            messageContent.appendChild(documentLink);
            messageContent.appendChild(pdfThumbnail);
        }

        chatMessages.appendChild(messageDiv);
        messageDiv.appendChild(messageContent);
    }
    
    // Scroll to the bottom of the chat container to show the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ... Rest of the code remains the same

// Function to send a new message
function sendMessage() {
    const messageInput = document.querySelector("#message-input");
    const messageContent = messageInput.value.trim();

    if (messageContent !== "") {
        messages.push({ user: "You", content: messageContent, type: "text" });
        messageInput.value = "";
        displayMessages();
    }
}

// Event listener for sending a message
document.querySelector("#send-button").addEventListener("click", sendMessage);

// Initial display of messages
// displayMessages();
