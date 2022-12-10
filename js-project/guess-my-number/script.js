'use strict';

const message_box = document.querySelector('.message');
const score_value = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again_button = document.querySelector('.again');
let secret_number = Math.floor((Math.random() * 20) + 1);

document.querySelector(".check").addEventListener('click', function () {
    const input_number = Number(document.querySelector('.guess').value);
    if (input_number) {
        if (input_number === secret_number) {
            message_box.textContent = '✅ Correct';
            document.querySelector('.number').textContent = secret_number;

            if (Number(score_value.textContent) > Number(highscore.textContent)) {
                highscore.textContent = score_value.textContent;
            }
        }
        else {
            score_value.textContent = Number(score_value.textContent) - 1
            message_box.textContent = '❌ Wrong'
        }
    }
    else {
        message_box.textContent = '⛔ No Number'
    }
})

document.querySelector(".again").addEventListener('click', function () {
    document.querySelector('.guess').value = "";
    score_value.textContent = 20;
    message_box.textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?'
    const new_secret_numebr = Math.floor((Math.random() * 20) + 1);
    if (new_secret_numebr != secret_number)
        secret_number = new_secret_numebr;
})