///////////////////// Clear functions //////////////////////////////
function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("dot").style = "display:visible;"
   }

function clearLast(){
    let holder = document.getElementById("result").value.slice(0,-1);
    document.getElementById("result").value = holder;
}
   
   ////////////////// Change value on the Display //////////////////

                   ////////// Symbol restrictions //////////
   function display(value) {
        let store = document.getElementById("result").value += value;
        let compare = store[0];
        let repeat = store[1];
        switch(compare){
            case "+":
            case "/":
            case "*":
            document.getElementById("result").value = "";
            break;
            case "-": 
                switch(repeat){
                    case "+":
                    case "/":
                    case "*":
                    case "-":
                        clearLast();
                        break; 
                }
       }
                    ////////// No more than one dot(.) /////////
       let last = value[value.length-1];
           switch(last){
            case ".":
                   document.getElementById("dot").style = "display:none;"
                   break;
            case "+":
            case "-":
            case "/":
            case "*":
                    document.getElementById("dot").style = "display:visible;"
                    break;

           }
       }

   //////////////////// Calculate the value //////////////////////
   function operate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
   }