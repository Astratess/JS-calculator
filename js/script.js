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

   function display(value) {
        let store = document.getElementById("result").value += value;
        onlyOneDot(store);
        SymbolRestrict(store);
        CheckExtraSymbols(store);
       }

     ////////////////// Checks symbol in the [0] //////////////////  

    function SymbolRestrict(store){
        let compare = store[0];
        switch(compare){
            case "+":
            case "/":
            case "*":
            document.getElementById("result").value = "";
            break;
                }
       }
       
     ////////////////// Checks for repeating symbols and /0 //////////////////  

    function CheckExtraSymbols(store){
        let check1 = store[store.length-2]
        let check2 = store[store.length-1]
        switch(check1){
            case "+":
            case "-":
            case "/":
                if (check2 == 0){
                    alert("You can't divide by 0 young one.");
                    clearLast();
                }
            case "*":
            case ".":
                switch(check2){
                    case "+":
                    case "-":
                    case "/":
                    case "*":
                        clearLast();
                        break; 
                }
            break;
        }
    }
     
      ////////////////// Controls the dots //////////////////  

    function onlyOneDot(store){
        let last = store[store.length-1];
        switch(last){
        case ".":
            document.getElementById("dot").style = "display:none;"
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            if(store[store.length-2] != ".")
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