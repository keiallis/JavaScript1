
function mottoCount(){
    document.getElementById("demo").innerHTML = "What is your favorite motto?";
}

function getMotto() {
     console.log(prompt("What is your favorite motto?"))
     return prompt
 } 

function getCount() {
    return parseFloat (prompt ("How many times would you like to see your motto?"))

}

function printMotto(getMotto, getCount){
    let i = getCount;

    while(getCount <= 1){
        console.log(getMotto * getCount)
    }

}



