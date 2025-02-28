  let iterateGPentonicMajorScale;
  let stateNumber = 0;
  let showPatternInstructions = true;

  function initializeStaff()
  {
  }
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

     let m1b1           = document.getElementById("m1b1_g3");
     let m1b2           = document.getElementById("m1b2_a3");
     let m1b3           = document.getElementById("m1b3_b3");
     let m1b4           = document.getElementById("m1b4_d4");

     let m2b1           = document.getElementById("m2b1_e4");
     let m2b2           = document.getElementById("m2b2_g4");
     let m2b3           = document.getElementById("m2b3_a4");
     let m2b4           = document.getElementById("m2b4_b4");

     let m3b1           = document.getElementById("m3b1_d5");
     let m3b2           = document.getElementById("m3b2_e5");
     let m3b3           = document.getElementById("m3b3_g5");
     let m3b4           = document.getElementById("m3b4_e5");

     let m4b1           = document.getElementById("m4b1_d5");
     let m4b2           = document.getElementById("m4b2_b4");
     let m4b3           = document.getElementById("m4b3_a4");
     let m4b4           = document.getElementById("m4b4_g4");

     let m5b1           = document.getElementById("m5b1_e4");
     let m5b2           = document.getElementById("m5b2_d4");
     let m5b3           = document.getElementById("m5b3_b3");
     let m5b4           = document.getElementById("m5b4_a3");


     let myButton    = document.getElementById("nextl1l5");
     let tempoSelect = document.getElementById("tempoSelectId");



     switch (stateNumber)
     {
        case 1:   //G3
          g3white.style.display  = "none";    // hide division
          g3yellow.style.display = "inline";  // show division
          m1b1.style.color = "orange";
          col2.innerHTML = "count: ";
          col3.innerHTML = "1";
          col4.innerHTML = "";
          col5.innerHTML = "";
          if (showPatternInstructions)
          {
             instructions.innerHTML = "Why start at 'Pattern II', and not 'Pattern 1'?";
          }
          break;
        case 2:   //A
          g3yellow.style.display = "none";
          g3white.style.display  = "inline";
          a4black.style.display  = "none";
          a4yellow.style.display = "inline";

          m1b1.style.color = "black";
          m1b2.style.color = "orange";
 
          col3.innerHTML = "2";
 
          break;
        case 3:   //B
          a4black.style.display  = "inline";
          a4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";

          m1b2.style.color = "black";
          m1b3.style.color = "orange";
 
          col3.innerHTML = "3";
 
          break;
        case 4:   //D
          b4black.style.display  = "inline";
          b4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";
          
          m1b3.style.color = "black";
          m1b4.style.color = "orange";
 
          col3.innerHTML = "4";
 
          break;
        case 5:   //E
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          e4black.style.display  = "none";
          e4yellow.style.display = "inline";
          
          m1b4.style.color = "black";
          m2b1.style.color = "orange";
 
 
          col3.innerHTML = "1";
 
          break;
        case 6:   //G
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";

          m2b1.style.color = "black";
          m2b2.style.color = "orange";
 
          col3.innerHTML = "2";
          if (showPatternInstructions)
          {
            instructions.innerHTML = "This will become apparent later when we start learning the minor keys.<br>";
            instructions.innerHTML += "One reason is Pattern I is off the fret board for this exercise.";
          }
 
          break;
        case 7:  //A
          g4white.style.display  = "inline";
          g4yellow.style.display = "none";
          a5black.style.display  = "none";
          a5yellow.style.display = "inline";

          m2b2.style.color = "black";
          m2b3.style.color = "orange";
 
          col3.innerHTML = "3";
 
          break;
        case 8: //B
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";

          m2b3.style.color = "black";
          m2b4.style.color = "orange";
 

          col3.innerHTML = "4";


          break;
        case 9: //D
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";

          m2b4.style.color = "black";
          m3b1.style.color = "orange";
 
          col3.innerHTML = "1";
 
          break;
        case 10: //E
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";

          m3b1.style.color = "black";
          m3b2.style.color = "orange";
 
          col3.innerHTML = "2";
 
          break;
        case 11: //G
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          g5white.style.display  = "none";
          g5yellow.style.display = "inline";

          m3b2.style.color = "black";
          m3b3.style.color = "orange";
 
          col3.innerHTML = "3";
 
          break;
        case 12: //A
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          a6black.style.display  = "none";
          a6yellow.style.display = "inline";

          m3b3.style.color = "black";
          m3b4.style.color = "orange";
 
          col3.innerHTML = "4";
          if (showPatternInstructions)
          {
             instructions.innerHTML = "This pattern should be practiced until you go crazy.<br>";
             instructions.innerHTML += "When playing these notes becomes smooth, gradually increase the speed.";
          }
 
           break;
        case 13: //G
          a6black.style.display  = "inline";
          a6yellow.style.display = "none";
          g5white.style.display  = "none";
          g5yellow.style.display = "inline";
          
          m3b4.style.color = "black";
          m4b1.style.color = "orange";
 
          col3.innerHTML = "1";
 
          break;
        case 14: //E
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";

          m4b1.style.color = "black";
          m4b2.style.color = "orange";
 
          col3.innerHTML = "2";
 
          break;
        case 15: //D
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";

          m4b2.style.color = "black";
          m4b3.style.color = "orange";
 
          col3.innerHTML = "3";
 
          break;
        case 16: //B
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";

          m4b3.style.color = "black";
          m4b4.style.color = "orange";
 
          col3.innerHTML = "4";

          break;
        case 17: //A
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          a5black.style.display  = "none";
          a5yellow.style.display = "inline";

          m4b4.style.color = "black";
          m5b1.style.color = "orange";
 
          col3.innerHTML = "1";
 
          break;
        case 18: //G
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";
          
          m5b1.style.color = "black";
          m5b2.style.color = "orange";
 
          col3.innerHTML = "2";
          if (showPatternInstructions)
          {
             instructions.innerHTML = "You can use this animation to get started, but eventually<br>";
             instructions.innerHTML += "practice this pattern with a metronome.";
          }
 
 
          break;
        case 19: //E
          g4white.style.display  = "inline";
          g4yellow.style.display = "none";
          e4black.style.display  = "none";
          e4yellow.style.display = "inline";
          
          m5b2.style.color = "black";
          m5b3.style.color = "orange";
 
          col3.innerHTML = "3";
 
          break;
        case 20: //D
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";

          m5b3.style.color = "black";
          m5b4.style.color = "orange";
 
          col3.innerHTML = "4";
 
          break;
        case 21: //B
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";

          m5b4.style.color = "black";
          m5b4.style.color = "orange";
 
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

          m5b4.style.color = "black";
 
          col3.innerHTML = "3";
          
          if (showPatternInstructions)
          {
             instructions.innerHTML = "Change tempo as desired, click restart to restart simulation";
          }
 

          tempoSelect.style.display = "inline";
          showPatternInstructions = false;
          myButton.style.display = "inline";
          myButton.disabled  = false;

 
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

     let n1m1          = document.getElementById("n1m1");
     let n2m1          = document.getElementById("n2m1");
     let n3m1          = document.getElementById("n3m1");
     let n4m1          = document.getElementById("n4m1");

     let n1m2          = document.getElementById("n1m2");
     let n2m2          = document.getElementById("n2m2");
     let n3m2          = document.getElementById("n3m2");
     let n4m2          = document.getElementById("n4m2");

     let n1m3          = document.getElementById("n1m3");
     let n2m3          = document.getElementById("n2m3");
     let n3m3          = document.getElementById("n3m3");
     let n4m3          = document.getElementById("n4m3");

     let n1m4          = document.getElementById("n1m4");
     let n2m4          = document.getElementById("n2m4");
     let n3m4          = document.getElementById("n3m4");
     let n4m4          = document.getElementById("n4m4");

     let n1m5          = document.getElementById("n1m5");
     let n2m5          = document.getElementById("n2m5");
     let n3m5          = document.getElementById("n3m5");
     let n4m5          = document.getElementById("n4m5");

     let line2Bottom   = document.getElementById("line2BottomTrebleStaff");
 
 
     let stateId       = document.getElementById("stateId");

     let leftNotation  = document.getElementById("pattern_II_LeftNotation_1");
     let diagram_II    = document.getElementById("pattern_II_G_Major");
     let bottomNotation= document.getElementById("pattern_II_BottomNotation_1");
     let bottomStaffNotation1 = document.getElementById("trebleStaffUnderStaffNotation1ID");
     let bottomStaffNotation2 = document.getElementById("trebleStaffUnderStaffNotation2ID");
 
     let state       = stateId.getAttribute("class");
     let myButton    = document.getElementById("nextl1l5");
     let instructions = document.getElementById("l1l5instructions");

     let tempoSelect = document.getElementById("tempoSelectId");
     let tempoCombo  = document.getElementById("tempoComboId");

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

           myButton.style.left = "750px";
           myButton.style.top  = "430px";

           stateId.setAttribute("class", "state_2");
           header.style.display = "none"; 
           background.setAttribute("class", "background_2");
           instructions.innerHTML = 
              "The notes on the treble staff for this scale looks this:";

           break;
        case "state_2":
           background.style.display = "inline";
           stateId.setAttribute("class", "state_3");
           bottomStaffNotation1.style.display = "inline";
           bottomStaffNotation2.style.display = "inline";


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
 
           n1m1.innerHTML = "&#xfe3b";
           n2m1.innerHTML = "&#9660";
           n3m1.innerHTML = "&#xfe3b";
           n4m1.innerHTML = "&#9660";
  
           n1m2.innerHTML = "&#xfe3b";
           n2m2.innerHTML = "&#9660";
           n3m2.innerHTML = "&#xfe3b";
           n4m2.innerHTML = "&#9660";

           n1m3.innerHTML = "&#xfe3b";
           n2m3.innerHTML = "&#9660";
           n3m3.innerHTML = "&#xfe3b";
           n4m3.innerHTML = "&#9660";
 
           n1m4.innerHTML = "&#xfe3b";
           n2m4.innerHTML = "&#9660";
           n3m4.innerHTML = "&#xfe3b";
           n4m4.innerHTML = "&#9660";

           n1m5.innerHTML = "&#xfe3b";
           n2m5.innerHTML = "&#9660";
           n3m5.innerHTML = "&#xfe3b";
           n4m5.innerHTML = "&#9660";

           line2Bottom.innerHTML = "&#xfe3b = downstroke&nbsp;&nbsp;&nbsp;&nbsp;&#9660 = upstroke";
 
           instructions.innerHTML = 
              "Using a guitar pick, we will be picking each note in an alternating way:";

           break;
 
        case "state_5":
           console.log("IN BACKGROUND 5 STATE");
           stateId.setAttribute("class", "state_6");
 
           background.setAttribute("class", "background_unkown");

           bottomStaffNotation1.style.display = "none";
           bottomStaffNotation2.style.display = "none";



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
           stateId.setAttribute("class", "state_7");
           background.setAttribute("class", "background_unkown");


           instructions.innerHTML = 
              "This is 'Pattern II' of the G Major Scale, click next at the bottom<br>of the guitar diagram, this will highlight notes to be picked:";

           break;
        case "state_7":
           stateId.setAttribute("class", "state_unknown");

           myButton.innerHTML = "RESTART";
           myButton.disabled  = true;
           myButton.style.display = "none";

           tempoCombo.value = "45";
           instructions.innerHTML = 
              "Simulation will begin shortly...";

           iterateGPentonicMajorScale = setInterval(playGPentonicMajorScale, 1000.0 * 60.0 / 45.0);
           break;
        default:
           console.log("IN DEFAULT STATE");
           // Reset tempo to 45:

           tempoCombo.value = "45";
           clearInterval(iterateGPentonicMajorScale);
           iterateGPentonicMajorScale = setInterval(playGPentonicMajorScale, 1000.0 * 60.0 / 45.0);
 
     }


 
  });


