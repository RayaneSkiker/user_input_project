let storyResult = document.getElementById("story_result");

let formContainer = document.querySelector("form");

let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");

let title = titleInput.innerHTML;
let noun = nounInput.innerHTML;
let verb = verbInput.innerHTML;
let adjective = adjInput.innerHTML;

titleInput.addEventListener("change", updateTitle);
nounInput.addEventListener("change", updateNoun);
verbInput.addEventListener("change", updateVerb);
adjInput.addEventListener("change", updateAdj);

function updateTitle(event){
    mainTitle.textContent = event.target.value;
    title = event.target.value;
}

function updateNoun(event){
    noun = event.target.value;
}

function updateVerb(event){
    verb = event.target.value;
}

function updateAdj(event){
    adjective = event.target.value;
}

submitButton.onclick = function(event){
    event.preventDefault();

    if(title == "" || noun == "" || verb == "" || adjective == "")
    {
        alert("Please fill in all fields.");
    }

    else{
        formContainer.style.display = "none";
        storyResult.innerHTML = "Last night I ate a " + noun + ", and today I just had to " + verb + ". What a " + adjective + " day!";
    }
}