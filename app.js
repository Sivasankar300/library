const content = document.querySelector(".content");
const newBook = document.querySelector(".newBook")
const form = document.querySelector("form")



function game(title,completion,status,note) {
    this.title = title;
    this.completion = completion;
    this.status = status;
    this.note = note;

}

const myLibrary = [];

//Adding book from the form to the library array
newBook.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    let newGame = new game(formData.get("gameTitle"),formData.get("gameCompletion"),formData.get("gameStatus"),formData.get("gameNote"));
    myLibrary.push(newGame);
    displayGames();

 })

function displayGames() {
    myLibrary.map(loop) 
    
    function loop(item) {
    const games = document.createElement("div");
    games.classList.add('games');
    content.appendChild(games);

    const gameTitle = document.createElement("div");
    gameTitle.classList.add('title')
    games.appendChild(gameTitle);
    gameTitle.textContent = item.title;

    const gameCompletion = document.createElement("div");
    gameCompletion.classList.add('completion')
    games.appendChild(gameCompletion)
    gameCompletion.textContent = item.completion;

    const gameStatus = document.createElement("div");
    gameStatus.classList.add('status')
    games.appendChild(gameStatus)
    gameStatus.textContent = item.status;
    
    
    
    };
    

    
}


