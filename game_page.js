var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("playerQuestion").innerHTML="question turn-"+player1_name;
document.getElementById("playerAnswer").innerHTML="anwser turn-"+player2_name;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    firstchar=word.charAt(1);
    console.log(firstchar);
    lengthby2=Math.floor(word.length/2);
    secondchar=word.charAt(lengthby2);
    console.log(secondchar);
    lengthminus1=word.length-1;
    thirdchar=word.charAt(lengthminus1);
    console.log(thirdchar);
    remove1=word.replace(firstchar,"_");
    remove2=remove1.replace(secondchar,"_");
    remove3=remove2.replace(thirdchar,"_");
    console.log(remove3);
    question="<h4 id='word_display'>Q. "+remove3+"</h4>";
    anwserInput="<br>answer: <input id='input_checkbox' type='text'>";
    button="<br><br><button onclick='check()'>check</button>";
    row=question+anwserInput+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check() {
get_answer=document.getElementById("input_checkbox").value;
answer=get_answer.toLowerCase();
if(answer==word) {
    if(answer_turn=="player1") {
        player1_score=player1_score + 1;
        document.getElementById("player1score").innerHTML=player1_score;
    }
    else {
        player2_score=player2_score + 1;
        document.getElementById("player2score").innerHTML=player2_score;
    }
}
if(question_turn=="player1") {
    question_turn="player2";
    document.getElementById("playerQuestion").innerHTML="question turn-"+player2_name;
}
else {
    question_turn="player1";
    document.getElementById("playerQuestion").innerHTML="question turn-"+player1_name;
}
if(answer_turn=="player1") {
    answer_turn="player2";
    document.getElementById("playerAnswer").innerHTML="answer turn-"+player2_name;
}
else {
    answer_turn="player1";
    document.getElementById("playerAnswer").innerHTML="answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}