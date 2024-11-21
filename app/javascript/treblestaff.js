  let iterateGPentonicMajorScale;
  let stateNumber = 0;


  function playGPentonicMajorScale()
  {
     let instructions = document.getElementById("l1l5instructions");


     let g3white        = document.getElementById("g3PatternIIWhite");
     let g3yellow       = document.getElementById("g3PatternIIYellow");
     let a4black        = document.getElementById("a4PatternIIBlack");
     let a4yellow       = document.getElementById("a4PatternIIYellow");
     let b4black        = document.getElementById("b4PatternIIBlack");
     let b4yellow       = document.getElementById("b4PatternIIYellow");
     let d4black        = document.getElementById("d4PatternIIBlack");
     let d4yellow       = document.getElementById("d4PatternIIYellow");
     let e4black        = document.getElementById("e4PatternIIBlack");
     let e4yellow       = document.getElementById("e4PatternIIYellow");
     let g4white        = document.getElementById("g4PatternIIWhite");
     let g4yellow       = document.getElementById("g4PatternIIYellow");
     let a5black        = document.getElementById("a5PatternIIBlack");
     let a5yellow       = document.getElementById("a5PatternIIYellow");
     let b5black        = document.getElementById("b5PatternIIBlack");
     let b5yellow       = document.getElementById("b5PatternIIYellow");
     let d5black        = document.getElementById("d5PatternIIBlack");
     let d5yellow       = document.getElementById("d5PatternIIYellow");
     let e5black        = document.getElementById("e5PatternIIBlack");
     let e5yellow       = document.getElementById("e5PatternIIYellow");
     let g5white        = document.getElementById("g5PatternIIWhite");
     let g5yellow       = document.getElementById("g5PatternIIYellow");
     let a6black        = document.getElementById("a6PatternIIBlack");
     let a6yellow       = document.getElementById("a6PatternIIYellow");

     let col1           = document.getElementById("bottomColumn1");
     let col2           = document.getElementById("bottomColumn2");
     let col3           = document.getElementById("bottomColumn3");
     let col4           = document.getElementById("bottomColumn4");
     let col5           = document.getElementById("bottomColumn5");
 
     switch (stateNumber)
     {
        case 1:   //G
          g3white.style.display  = "none";    // hide division
          g3yellow.style.display = "inline";  // show division
          col2.innerHTML = "count: ";
          col3.innerHTML = "1";
          col4.innerHTML = "";
          col5.innerHTML = "";
    
          instructions.innerHTML = "Why start at 'Pattern II', and not 'Pattern 1'?";
          break;
        case 2:   //A
          g3yellow.style.display = "none";
          g3white.style.display  = "inline";
          a4black.style.display  = "none";
          a4yellow.style.display = "inline";
          col3.innerHTML = "2";
 
          break;
        case 3:   //B
          a4black.style.display  = "inline";
          a4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          break;
        case 4:   //D
          b4black.style.display  = "inline";
          b4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";
          instructions.innerHTML = "This will become apparent later when we start learning the minor keys.<br>";
          instructions.innerHTML += "One reason is Pattern I is off the fret board for this exercise.";
          col3.innerHTML = "4";
 
          break;
        case 5:   //E
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          e4black.style.display  = "none";
          e4yellow.style.display = "inline";
          col3.innerHTML = "1";
 
          break;
        case 6:   //G
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";
          col3.innerHTML = "2";
 

          break;
        case 7:  //A
          g4white.style.display  = "inline";
          g4yellow.style.display = "none";
          a5black.style.display  = "none";
          a5yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          break;
        case 8: //B
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";
          col3.innerHTML = "4";
 
          instructions.innerHTML = "This pattern should be practiced until you go crazy.<br>";
          instructions.innerHTML += "When playing these notes becomes smooth, gradually increase the speed.";
 
          break;
        case 9: //D
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";
          col3.innerHTML = "1";
 
          break;
        case 10: //E
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";
          col3.innerHTML = "2";
 
          break;
        case 11: //G
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          g5white.style.display  = "none";
          g5yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          break;
        case 12: //A
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          a6black.style.display  = "none";
          a6yellow.style.display = "inline";
          col3.innerHTML = "4";
 

          instructions.innerHTML = "You can use this animation to get started, but eventually<br>";
          instructions.innerHTML += "practice this pattern with a metronome.";
 
          break;
        case 13: //G
          a6black.style.display  = "inline";
          a6yellow.style.display = "none";
          g5white.style.display  = "none";
          g5yellow.style.display = "inline";
          col3.innerHTML = "1";
 
          break;
        case 14: //E
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";
          col3.innerHTML = "2";
 
          break;
        case 15: //D
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          break;
        case 16: //B
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";
           col3.innerHTML = "4";
 
          break;
        case 17: //A
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          a5black.style.display  = "none";
          a5yellow.style.display = "inline";
          col3.innerHTML = "1";
 
          break;
        case 18: //G
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";
          col3.innerHTML = "2";
 
          break;
        case 19: //E
          g4white.style.display  = "inline";
          g4yellow.style.display = "none";
          e4black.style.display  = "none";
          e4yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          break;
        case 20: //D
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";
          col3.innerHTML = "4";
 
          break;
        case 21: //B
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";
          col3.innerHTML = "1";
 
          break;
        case 22: //A
          b4black.style.display  = "inline";
          b4yellow.style.display = "none";
          a4black.style.display  = "none";
          a4yellow.style.display = "inline";
          col3.innerHTML = "2";
 
          break;
        case 23: //G
          a4black.style.display  = "inline";
          a4yellow.style.display = "none";
          g3white.style.display  = "none";
          g3yellow.style.display = "inline";
          col3.innerHTML = "3";
 
          stateNumber = 1;
          break;
     }
 
     stateNumber += 1;
  }


  $('.button_l1l5').click(function(){


     let scale1        = document.getElementById("pentonicScaleKeyOfG");
     let header        = document.getElementById("l1l5Header");
     let background    = document.getElementById("backgroundId");
     let measure1      = document.getElementById("pentonicScaleKeyOfGMeasure1");
     let measure2      = document.getElementById("pentonicScaleKeyOfGMeasure2");
     let measure3      = document.getElementById("pentonicScaleKeyOfGMeasure3");
     let measure4      = document.getElementById("pentonicScaleKeyOfGMeasure4");
     let measure5      = document.getElementById("pentonicScaleKeyOfGMeasure5");
     let stateId       = document.getElementById("stateId");

     let leftNotation  = document.getElementById("pattern_II_LeftNotation_1");
     let diagram_II    = document.getElementById("pattern_II_G_Major");
     let bottomNotation= document.getElementById("pattern_II_BottomNotation_1");
 
     let state       = stateId.getAttribute("class");
     let myButton    = document.getElementById("nextl1l5");
     let instructions = document.getElementById("l1l5instructions");

     console.log(state);





     switch (state)
     {
        case "state_1":
           scale1.style.display = "inline";  // show division
           measure1.style.display = "inline";  // show division
           measure2.style.display = "inline";  // show division
           measure3.style.display = "inline";  // show division
           measure4.style.display = "inline";  // show division
           measure5.style.display = "inline";  // show division

           scale1.style.top   = "200px";
           measure1.style.top = "200px";
           measure2.style.top = "200px";
           measure3.style.top = "200px";
           measure4.style.top = "400px";
           measure5.style.top = "400px";



           myButton.style.left = "250px";
           myButton.style.top  = "550px";

           stateId.setAttribute("class", "state_2");
           header.style.display = "none"; 
           background.setAttribute("class", "background_2");
           instructions.innerHTML = 
              "The notes on the treble staff for this scale looks this:";


           break;
        case "state_2":
           background.style.display = "inline";
           stateId.setAttribute("class", "state_3");

           instructions.innerHTML = 
              "Diatonic scale includes all 7 notes, pentonic scale that<br>we will be working on skips two notes per octave:";

           break;
        case "state_3":
           console.log("IN BACKGROUND 3 STATE");
           stateId.setAttribute("class", "state_4");
           background.setAttribute("class", "background_3");

           myButton.style.left = "750px";
           myButton.style.top  = "450px";



           instructions.innerHTML = 
              "If you can already read music, great!  If not, no worries, I do not put a huge emphasis on reading music.  Just get familiar with the treble staff for now:";


           break;
        case "state_4":
           console.log("IN BACKGROUND 4 STATE");
           stateId.setAttribute("class", "state_5");
           background.setAttribute("class", "background_4");
 

           instructions.innerHTML = 
              "Using a guitar pick, we will be picking each note in an alternating way:";


           break;
 
        case "state_5":
           console.log("IN BACKGROUND 5 STATE");
           stateId.setAttribute("class", "state_6");
 
           background.setAttribute("class", "background_unkown");

           instructions.innerHTML = 
              "The following diagram depicts the guitar notes we will be using.<br>Note that the white circled numbers are the 'root' notes (G ie).";


           myButton.style.left = "150px";
           myButton.style.top  = "500px";



           scale1.style.top   = "600px";
           measure1.style.top = "600px";
           measure2.style.top = "600px";
           measure3.style.top = "600px";
           measure4.style.top = "800px";
           measure5.style.top = "800px";

           leftNotation.style.display = "inline";    // show division
           diagram_II.style.display = "inline";
           bottomNotation.style.display = "inline";
           break;
        case "state_6":
           console.log("IN SIXTH STATE");
           stateId.setAttribute("class", "state_unkown");
           background.setAttribute("class", "background_unkown");


           instructions.innerHTML = 
              "This is 'Pattern II' of the G Major Scale, click next at the bottom<br>of the guitar diagram, this will highlight notes to be picked:";


           break;
        default:
           console.log("IN DEFAULT STATE");
           myButton.innerHTML = "STOP";
           myButton.disabled  = true;
 
           iterateGPentonicMajorScale = setInterval(playGPentonicMajorScale, 1500);
 
     }


 
  });


