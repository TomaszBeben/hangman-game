let password = 'bez pracy nie ma kołaczy';
password = password.toUpperCase();

let lines = ""
let size = password.length;
for (let i = 0; i<password.length; i++){
    if(password.charAt(i) == ' ') lines = lines + ' ';
    else lines = lines + '-';
}

function show(){
    document.querySelector('.password').innerHTML= lines;
}
window.onload = start;

const letters = new Array(35)
 
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E"
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź"; 

function start(){
    
    var letter = '';
    for(let i = 0; i < 35; i++){
        letter= letter + '<div class="button" onclick="check('+i+')" id="letter-'+i+'">' + letters[i] + '</div>';
        if(( i + 1 ) % 7 == 0)letter = letter + '<div style="clear:both;"></div>';
    }
    document.querySelector('.alphabet').innerHTML= letter;
    show();
    
}

String.prototype.setSign = function(place, sign){
    if(place > this.size - 1)return this.toString();
    else return this.substr(0,place) + sign + this.substr(place + 1)
    
    
}

function check(num){
    for ( let i = 0; i < size; i++){
        if(password.charAt(i) == letters[num]){
            lines = lines.setSign(i, letters[num])
        }
    }
    show();
}