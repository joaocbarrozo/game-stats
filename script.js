let btnFg = document.getElementById("field-goal-btn");
let eventText = document.getElementById("event-list-title")
btnFg.addEventListener("click",() => {
    eventText.textContent = "Game";
})