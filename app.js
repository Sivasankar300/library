const content = document.querySelector(".content");
const newBook = document.querySelector(".newBook")
const form = document.querySelector("form")
const games = document.querySelector(".games")



function game(title,completion,status,note,count) {
    this.title = title;
    this.completion = completion;
    this.status = status;
    this.note = note;
    this.count = count;
    
    

}
let count = 0;

const myLibrary = [];

//Adding book from the form to the library array
newBook.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    let newGame = new game(formData.get("gameTitle"),formData.get("gameCompletion"),formData.get("gameStatus"),formData.get("gameNote"),count);
    
    console.log(`count is${count}`)
    myLibrary.push(newGame);
    count++;


    displayGame();
    


 })



function displayGame() {


    //Deleting all the game entries before new ones are looped over to avoid duplicates
    while (games.firstChild) {
        games.removeChild(games.firstChild);
      }
let i=0;
    myLibrary.map(loop) 

    function loop(item) {


    
    const game = document.createElement("div");
    game.classList.add('game',`game${i}`);
    games.appendChild(game);
    
    i++;

    const gameTitle = document.createElement("div");
    gameTitle.classList.add('title')
    game.appendChild(gameTitle);
    gameTitle.textContent = item.title;

    const gameCompletion = document.createElement("div");
    gameCompletion.classList.add('completion')
    game.appendChild(gameCompletion)
    gameCompletion.textContent = item.completion;

    const gameStatus = document.createElement("div");
    gameStatus.classList.add('status')
    game.appendChild(gameStatus)
    gameStatus.textContent = item.status;

    const gameNote = document.createElement("div");
    gameNote.classList.add('note');
    game.appendChild(gameNote);
    gameNote.textContent = item.note;

    const gameDelete = document.createElement("button");
    gameDelete.classList.add('deleteButton');
    game.appendChild(gameDelete);
    gameDelete.textContent = "Delete entry"
    
    gameDelete.addEventListener("click",() =>{
        let index = item.count;
        console.log(item);
        myLibrary.splice(index,1);
        displayGame();
        
    })


    const changeStatus = document.createElement("button")
    changeStatus.classList.add('changeStatus');
    game.appendChild(changeStatus);
    changeStatus.textContent = "Change Status";

    };
    


    
    
    
}

    



