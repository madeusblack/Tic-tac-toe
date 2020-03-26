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


  var displaycontroller = (function () {
    console.log(board)
    domcont=document.getElementById("boardcontainer");
    var checkDisplay = function(posMark){
        console.log(posMark)
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
    var callJavascript =function (e) {
        alert(e.target);
  
        
    }

    var displayboard = function(){
        removechilds()
        displayedpos=0;
        while (displayedpos<9){
            let actualmark=board[displayedpos]
            let boardPosCard=document.createElement('div');
            boardPosCard.classList.add('cardbox');
            let boardcheck=document.createElement('h3');
            boardcheck.classList.add('mark');
            //boardcheck.addEventListener('clic',callJavascript(event),true);
            boardcheck.innerHTML=checkDisplay(actualmark.mark);
            boardPosCard.appendChild(boardcheck);
            domcont.appendChild(boardPosCard);
            displayedpos++
            

            
        }console.log("dboard")
    }
    displayboard();
    return {
        displayboard: displayboard,}
        //added for redraw

  
  
  }());
  
  
  displaycontroller.displayboard()
  
