let password = 'Weź zrób kawę';
password = password.toUpperCase();

let lines = ""
for (let i = 0; i<password.length; i++){
    if(password.charAt(i) == ' ') lines = lines + ' ';
    else lines = lines + '-';
}

function show(){
    document.querySelector('.password').innerHTML= lines;
}
window.onload = start;

function start(){
    let letter = '';
    for(let i = 0; i < 35; i++){
        letter= letter + '<div class="button"> A </div>';
    }
    document.querySelector('.alphabet').innerHTML= letter;
    show();
}