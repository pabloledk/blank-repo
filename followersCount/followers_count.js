let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerText = count;
}

function checkCountValue(){
if (count === 5){
    alert("Your profile has gained 5 followers! Congrats");
} else if (count===10){
    alert("Your profile has gained 10 followers! Keep it up");
}
}

function resetCount(){
    count = 0;
    alert("The followers' count has been reset.");
    document.getElementById("countDisplay").innerHTML = 0;
}