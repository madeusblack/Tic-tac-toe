var logicalgrid = (function () {    
    var board = [];
    mark="blank";
    var generateboard = function(){
        while (board.length<9){
            boarpiece={
                mark:mark,
                position:board.length
            }
            board.push(boarpiece)
        }
    }
    generateboard()  
    return {
        board :board
      }
  
  
  }());
let board=logicalgrid.board
console.log(board)
var actualmark="blank"

var displaycontroller = (function () {
    domcont=document.getElementById("boardcontainer");
    var checkDisplay = function(posMark){
        switch (posMark) {
        case "blank":
            return "" 
        case "x":
            return "x"
        case "o":
            return "o"
        }
    }
    var removechilds = function(){
        var checkNodes = document.getElementById("boardcontainer").hasChildNodes();
        if (checkNodes==true){
         let element = document.getElementById("boardcontainer");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}
    }
    var myHandler=function (){
        actualmark=player.mark;
        console.log(actualmark)
        tochange=this.firstChild.id
        board[tochange].mark=actualmark
        console.log(board[tochange.mark])
        if(actualmark=="x"){
            console.log("markx")
            player['mark']="o";
            console.log(player)
        }if(actualmark=="o"){
            console.log("marko")
            player['mark']="x";
            console.log(player)

        }
        displayboard()
       
    }
  
        
    

    var displayboard = function(){
        removechilds()
        displayedpos=0;
        while (displayedpos<9){
            let actualmark=board[displayedpos]
            let boardPosCard=document.createElement('div');
            boardPosCard.classList.add('cardbox');
            let boardcheck=document.createElement('h1');
            boardcheck.classList.add('mark');
            boardcheck.setAttribute("id", displayedpos);
            boardPosCard.addEventListener("click",myHandler);
            boardcheck.innerHTML=checkDisplay(actualmark.mark);
            boardPosCard.appendChild(boardcheck);
            domcont.appendChild(boardPosCard);
            displayedpos++
        }console.log("dboard")
    }
    displayboard();
    return {
        displayboard: displayboard,}
        //passed for dimanic redraw
  }());
  
  function Player(){
    function getmark(){
        var getter = document.getElementById("X").checked 
        console.log(getter)
        if(getter==true){
            return "x"
        }else{
            return "o"
        }
    }
    var name =document.getElementById("Pname").value;
    var mark = getmark();

    
    function add() { console.log(name,marksel + " test"); }
    
    return Object({
        add,
        mark,
        
    });
}
player=""
function setplayer(){
     player = new Player()
     window.player=player

}
console.log(player +"test")
function checkglobal(){
    actualmark=player.mark
    console.log(player)
}

  
