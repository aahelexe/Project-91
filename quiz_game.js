function send()
{
    n1=document.getElementById("number1").value;
    n2=document.getElementById("number2").value;
    actual_answer=parseInt(n1)*parseInt(n2);
    question_word="<h4>"+n1+"X"+n2+"</h4>";
    input="<br>Answer: <input type='text' id='input_check_box'>";
    check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";
}