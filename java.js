//initializing a variable count to toggle between clicked and not clicked 
let count = 0;

// updates the counter each time the button is clicked 
function showContributors() {
    if (count == 0) {
        let newText = "Data Scientists: Nicholas Perrotta and Mitra Patel";
        let buttonDiv = document.getElementById("button-div");
        buttonDiv.innerHTML = newText;
        count = 1;
    }

    // If the button is clicked again, the contributors are hidden
    else {
        let newText = "Contributors are hidden";
        let buttonDiv = document.getElementById("button-div");
        buttonDiv.innerHTML = newText;
        count = 0;
    }
}