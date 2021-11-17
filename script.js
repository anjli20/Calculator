function displayScreen(param)
{
    document.getElementById("result").value += param;
}
function result()
{  var str=document.getElementById("result").value;
   str=str.replaceAll(")(","");
   textarea.innerHTML =eval(str);
   document.getElementById("result").value =str;
}
function sine(){
  document.getElementById("result").value =Math.sin(document.getElementById("result").value);
}
function clearScreen()
{
    document.getElementById("result").value = "";
}
    var speak =document.getElementById('speak');
    var textarea=document.getElementById('textarea');
    var SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

    var recognition = new SpeechRecognition();
    speak.addEventListener('click',function(){
        recognition.start();
//        textarea.innerHTML="....Recognizing";
        document.getElementById("result").value="....Recognizing";
   })
   recognition.onresult=function(e){

   var transcript=e.results[0][0].transcript;
       str=transcript.toUpperCase();
       document.getElementById("result").value=str;
//       textarea.innerHTML=str;
//       textarea.innerHTML=eval(str);
       input=str;
       operations={
            "ONE":"(1)",
            "TWO":"(2)",
            "THREE":"(3)",
            "FOUR":"(4)",
            "FIVE":"(5)",
            "SIX":"(6)",
            "SEVEN":"(7)",
            "EIGHT":"(8)",
            "NINE":"(9)",
            "TEN":"(0)",
            "ELEVEN":"(11)",
            "TWELVE":"(12)",
            "THIRTEEN":"(13)",
            "FOURTEEN":"(14)",
            "FIFTEEN":"15)",
            "SIXTEEN":"(16)",
            "SEVENTEEN":"(17)",
            "EIGHTEEN":"(18)",
            "NINETEEN":"(19)",
            "TWENTY":"(20)",
            "PLUS":"+",
            "MULTIPLY":"*",
            "MINUS":"-",
            "DIVIDED":"/",
            "SIGN":"Math.sin",
            "COS":"Math.cos",
            "TAN":"Math.tan",
            "EXPONENTIAL":"2.17",
            "EXPONENCIAL":"2.17",
            "PI":"3.14159",
            "BYE":"3.14159",
            "LOG":"Math.log",
            "SQUAREROOT":"Math.sqrt",
            "CUBEROOT":"Math.cbrt",
            "POWER":"**",
            "OF":"",
            "BY":"",
            " ":""
}
       for (property in operations)
       {
             input = input.replaceAll(property,operations[property]);
       }
       if(input[input.length-1]==".")
       {
            input=input.substring(0,input.length-1);
       }
       textarea.innerHTML =eval(input);

 }


