const generateMemeButton = document.querySelector(".meme-generator .generate-meme-button");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
        .then((response) => response.json())
        .then((data) => {
            console.log("Received data from the API:", data);

            if (data && data.url && data.title && data.author) {
                updateDetails(data.url, data.title, data.author);
            } else {
                console.error("Invalid data from the API:", data);
            }
        })
        .catch((error) => {
            console.error("Error fetching meme:", error);
        });
};

generateMemeButton.addEventListener("click", generateMeme);
