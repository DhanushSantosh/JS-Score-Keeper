const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset')
let winningScoreSelect = document.querySelector('#playto')

winningScore = 5;
let isGameOver = false;

function updateScores(player1, player2){
    if (!isGameOver){
        player1.score++;
        if(player1.score === winningScore){
            isGameOver = true;
            player1.display.classList.add('has-text-success')
            player2.display.classList.add('has-text-danger')
            player1.button.disabled = true;
            player2.button.disabled = true;
        }
        player1.display.textContent = player1.score;
    }

}

p1.button.addEventListener('click', ()=>{
    updateScores(p1, p2);
})

p2.button.addEventListener('click', ()=>{
    updateScores(p2, p1);
})


winningScoreSelect.addEventListener('change', ()=>{
    winningScore = parseInt(winningScoreSelect.value)
    reset();
})

resetBtn.addEventListener('click' , reset)

function reset(){
    for(let p of [p1,p2]){
        isGameOver = false;
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}
