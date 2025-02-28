
var clefFudge = 3;
var sharpAndFlatFudge  = 52;
var timeSignatureFudge = 40;
var repeatBarSignatureFudge = 23;
var repeatReverseBarSignatureFudge = 16;
var singleBarSignatureFudge = -14;
var singleBarMeasure4Fudge  = 18;
var notesFudge  = 12;
var notesFudge4 = 0;
var notesFudge5 = 12;
var notesFudge6 = 5;


let newStateNumber = 0;
let showPatternNewInstructions = true;
let iterateNewGPentonicMajorScale;
 



var fSharpRelativeTopOffset = -132;
var cSharpRelativeTopOffset = -104;
var gSharpRelativeTopOffset = -142;
var dSharpRelativeTopOffset = -115;
var aSharpRelativeTopOffset = -94;
var eSharpRelativeTopOffset = -124;
var bSharpRelativeTopOffset = -98;

var quarterNoteUpOffsets = {};
var quarterNoteDownOffsets = {};

const lowerStaff = {
   NONE: 0,
   ONE_BELOW: 1,
   TWO_BELOW: 2,
   THREE_BELOW: 3
};
const upperStaff = {
   NONE: 0,
   ONE_ABOVE: 1,
   TWO_ABOVE: 2,
   THREE_ABOVE: 3
};


const quarterNoteUpNames   = ["quf6","que6","qud6","quc6",
                  "qub5","qua5","qug5","quf5","que5","qud5","quc5",
                  "qub4","qua4","qug4","quf4","que4","qud4","quc4",
                  "qub3","qua3","qug3","quf3","que3","qud3","quc3"];

const quarterNoteDownNames   = ["qdf6","qde6","qdd6","qdc6",
                  "qdb5","qda5","qdg5","qdf5","qde5","qdd5","qdc5",
                  "qdb4","qda4","qdg4","qdf4","qde4","qdd4","qdc4",
                  "qdb3","qda3","qdg3","qdf3","qde3","qdd3","qdc3"];

const qnoteUpOffsets     = [-218,-210,-201,-194,
                  -186,-179,-172,-164,-157,-147,-140,
                  -130,-123,-115,-106,-97,-88,-79,
                  -70,-61,-53,-44,-36,0,0];

const qnoteDownOffsets     = [-183,-175,-167,-159,
                  -149,-142,-136,-129,-121,-113,-104,
                  -96,-88,-80,-71,-63,-55,-10,
                  -10,-10,-10,-10,-10,0,0];


function findLeft(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.left + window.scrollX);
} //call it like findLeft('#header');

function findRight(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.right + window.scrollX);
} //call it like findRight('#header');

function findTop(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.top + window.scrollY);
} //call it like findTop('#header');

function findBottom(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.bottom + window.scrollY);
} //call it like findBottom('#header');

function findHeight(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.height);
} //call it like findHeight('#header');
function findWidth(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return Math.floor(rec.width);
} //call it like findWidth('#header');

function populateGlobals()
{
   if (quarterNoteUpNames.length == qnoteUpOffsets.length)
   {
      for (var i = 0; i < quarterNoteUpNames.length; i++)
      {
        quarterNoteUpOffsets[quarterNoteUpNames[i]] = qnoteUpOffsets[i];
      }
   }
   else
   {
      alert("error: lengths don't match");
      exit -1;
   }
   if (quarterNoteDownNames.length == qnoteDownOffsets.length)
   {
      for (var i = 0; i < quarterNoteDownNames.length; i++)
      {
        quarterNoteDownOffsets[quarterNoteDownNames[i]] = qnoteDownOffsets[i];
      }
   }
   else
   {
      alert("error: lengths don't match");
      exit -1;
   }

}
$('#newclearstaffl1l5').click(function(){
   console.log("CLEAR HAS BEEN CLICKED!!!!!!!!!!!!!");
   clearStaff();
});


$('#newnextl1l5').click(function(){
   console.log("NEW NEXT HAS BEEN CLICKED!!!!!!!!!!!!!");
   let instructions = document.getElementById("l1l5Newinstructions");
   let background   = document.getElementById("backgroundHighlightTest");
   let header       = document.getElementById("l1l5NewHeader");
   let lyrics1      = document.getElementById("lyricRowsLine1");
   let lyrics2      = document.getElementById("lyricRowsLine2");
   let patIILeft    = document.getElementById("pattern_II_LeftNotation_1");
   let patIIGMaj    = document.getElementById("pattern_II_G_Major");
   let patIIBott    = document.getElementById("pattern_II_BottomNotation_1");
   let nextButton   = document.getElementById("newnextl1l5");
 
   let state        = stateId.getAttribute("class");
   let clickButton  = document.getElementById("newnextl1l5");
   let tempoCombo  = document.getElementById("tempoComboNewId");



 
   switch (state)
   {
      case "state_1":
        instructions.innerHTML = 
              "The notes on the treble staff for the pentonic scale looks like this:";
        header.style.display  = "none";
        clickButton.style.top = "700px";
        clickButton.innerHTML = "CLICK TO SHOW SKIPPED NOTES";
 
        showStaff(250);
        stateId.setAttribute("class", "state_2");
        break;
      case "state_2":
        instructions.innerHTML = 
              "For the key of G major, we skip notes C and F sharp:";
        background.style.display="inline";
        lyrics1.style.display="inline";
        lyrics2.style.display="inline";
        clickButton.innerHTML = "NEXT";
 
        stateId.setAttribute("class", "state_3");
        break;
      case "state_3":
        instructions.innerHTML = 
              "If you have never learned to read music, no worries..<br>I do not put a lot of emphasis on reading music.<br>It's just important to start to get familiar with sheet music.";
 
        background.style.display="none";
        clickButton.innerHTML = "NEXT";

        stateId.setAttribute("class", "state_4");
        break; 
      case "state_4":
        instructions.innerHTML = 
              "Using a guitar pick, we will be plucking each note one by one.<br>We alternate one side of the pick then the other side of the pick.<br>One side is a down stroke, the other side is an up stroke.";

        document.getElementById("q1m1b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m1b2").innerHTML = "&#9660";
        document.getElementById("q1m1b3").innerHTML = "&#xfe3b";
        document.getElementById("q1m1b4").innerHTML = "&#9660";

        document.getElementById("q1m2b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m2b2").innerHTML = "&#9660";
        document.getElementById("q1m2b3").innerHTML = "&#xfe3b";
        document.getElementById("q1m2b4").innerHTML = "&#9660";

        document.getElementById("q1m3b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m3b2").innerHTML = "&#9660";
        document.getElementById("q1m3b3").innerHTML = "&#xfe3b";
        document.getElementById("q1m3b4").innerHTML = "&#9660";

        document.getElementById("q1m4b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m4b2").innerHTML = "&#9660";
        document.getElementById("q1m4b3").innerHTML = "&#xfe3b";
        document.getElementById("q1m4b4").innerHTML = "&#9660";
        
        document.getElementById("q1m5b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m5b2").innerHTML = "&#9660";
        document.getElementById("q1m5b3").innerHTML = "&#xfe3b";
        document.getElementById("q1m5b4").innerHTML = "&#9660";

        document.getElementById("q1m6b1").innerHTML = "&#xfe3b";
        document.getElementById("q1m6b2").innerHTML = "&#9660";

        document.getElementById("lyricsMeasure4").innerHTML = "&#xfe3b = downstroke&nbsp;&nbsp;&nbsp;";
        document.getElementById("lyricsMeasure5").innerHTML = "&#9660 = upstroke";

        stateId.setAttribute("class", "state_5");
        break;
       case "state_5":
        instructions.innerHTML = 
              "The following diagram depicts the guitar notes we will be using.<br>Note that the white circled numbers are the 'root' notes (G ie)";
        clearStaff();
        patIILeft.style.display="inline";
        patIIGMaj.style.display="inline";
        patIIBott.style.display="inline";
        lyrics1.style.display="none";
        lyrics2.style.display="none";
        nextButton.style.top = "500px";

        showStaff(600);
        stateId.setAttribute("class", "state_6");
        break;
       case "state_6":
        instructions.innerHTML = 
              "This is 'Pattern II' of the G Major Scale, click next at the bottom<br>of the quitar diagram, this will highlight notes to be picked:";
        stateId.setAttribute("class", "state_7");
        break;
       case "state_7":
        instructions.innerHTML = 
              "Beginning animation....";
        stateId.setAttribute("class", "state_8");
        nextButton.style.display = "none";
        tempoCombo.value = "45";
 
        iterateNewGPentonicMajorScale = setInterval(playNewGPentonicMajorScale, 1000.0 * 60.0 / 45.0);
 
        break;


   }
 

});

$('#tempoComboNewId').change(function() {
   let tempoSelect           = document.getElementById("tempoComboNewId");
   let instructions = document.getElementById("l1l5Newinstructions");
 

   instructions.innerHTML = "Tempo changed to " + tempoSelect.value + " BPM";

    // ? seconds = 1beat * (60seconds/1minute) * (1minute/value)
   let v = (60.0 / parseFloat(tempoSelect.value)) * 1000.0;
   clearInterval(iterateNewGPentonicMajorScale);

   iterateNewGPentonicMajorScale = setInterval(playNewGPentonicMajorScale, v);
   showPatternNewInstructions = false;
});



function playNewGPentonicMajorScale()
{
     let instructions = document.getElementById("l1l5Newinstructions");
     let countDisplay = document.getElementById("fretMessagesLine2");
 
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

     let tempo        = document.getElementById("tempoSelectId");


     switch (newStateNumber)
     {
        case 1:   //G3
          g3white.style.display  = "none";    // hide division
          g3yellow.style.display = "inline";  // show division
          document.getElementById("Measure1Beat1UpNote1").style.color = "orange";
          countDisplay.innerHTML = "COUNT:  1";
//        m1b1.style.color = "orange";
//        col2.innerHTML = "count: ";
//        col3.innerHTML = "1";
//        col4.innerHTML = "";
//        col5.innerHTML = "";
          if (showPatternNewInstructions)
          {
             instructions.innerHTML = "Why start at 'Pattern II', and not 'Pattern 1'?";
          }
          break;

        case 2:   //A
          g3yellow.style.display = "none";
          g3white.style.display  = "inline";
          a4black.style.display  = "none";
          a4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";

          document.getElementById("Measure1Beat1UpNote1").style.color = "black";
          document.getElementById("Measure1Beat2UpNote1").style.color = "orange";
 
          break;
        case 3:   //B
          a4black.style.display  = "inline";
          a4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  3";



          document.getElementById("Measure1Beat2UpNote1").style.color = "black";
          document.getElementById("Measure1Beat3UpNote1").style.color = "orange";
 

          break;
        case 4:   //D
          b4black.style.display  = "inline";
          b4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  4";



          document.getElementById("Measure1Beat3UpNote1").style.color = "black";
          document.getElementById("Measure1Beat4UpNote1").style.color = "orange";
          
          break;
        case 5:   //E
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          e4black.style.display  = "none";
          e4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  1";



          document.getElementById("Measure1Beat4UpNote1").style.color = "black";
          document.getElementById("Measure2Beat1UpNote1").style.color = "orange";
 
          break;
        case 6:   //G
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";



          document.getElementById("Measure2Beat1UpNote1").style.color = "black";
          document.getElementById("Measure2Beat2UpNote1").style.color = "orange";
 
          if (showPatternNewInstructions)
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

          countDisplay.innerHTML = "COUNT:  3";



          document.getElementById("Measure2Beat2UpNote1").style.color = "black";
          document.getElementById("Measure2Beat3UpNote1").style.color = "orange";

          break;
        case 8: //B
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  4";



          document.getElementById("Measure2Beat3UpNote1").style.color = "black";
          document.getElementById("Measure2Beat4UpNote1").style.color = "orange";

          break;
        case 9: //D
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  1";



          document.getElementById("Measure2Beat4UpNote1").style.color = "black";
          document.getElementById("Measure3Beat1DownNote1").style.color = "orange";

          break;
        case 10: //E
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";



          document.getElementById("Measure3Beat1DownNote1").style.color = "black";
          document.getElementById("Measure3Beat2DownNote1").style.color = "orange";

          break;
        case 11: //G
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          g5white.style.display  = "none";
          g5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  3";



          document.getElementById("Measure3Beat2DownNote1").style.color = "black";
          document.getElementById("Measure3Beat3DownNote1").style.color = "orange";


          break;
        case 12: //A
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          a6black.style.display  = "none";
          a6yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  4";



          document.getElementById("Measure3Beat3DownNote1").style.color = "black";
          document.getElementById("Measure3Beat4DownNote1").style.color = "orange";


          if (showPatternNewInstructions)
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

          countDisplay.innerHTML = "COUNT:  1";



          document.getElementById("Measure3Beat4DownNote1").style.color = "black";
          document.getElementById("Measure4Beat1DownNote1").style.color = "orange";
         
          break;
        case 14: //E
          g5white.style.display  = "inline";
          g5yellow.style.display = "none";
          e5black.style.display  = "none";
          e5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";



          document.getElementById("Measure4Beat1DownNote1").style.color = "black";
          document.getElementById("Measure4Beat2DownNote1").style.color = "orange";
 
          break;
        case 15: //D
          e5black.style.display  = "inline";
          e5yellow.style.display = "none";
          d5black.style.display  = "none";
          d5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  3";



          document.getElementById("Measure4Beat2DownNote1").style.color = "black";
          document.getElementById("Measure4Beat3DownNote1").style.color = "orange";
 
          break;
        case 16: //B
          d5black.style.display  = "inline";
          d5yellow.style.display = "none";
          b5black.style.display  = "none";
          b5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  4";


          document.getElementById("Measure4Beat3DownNote1").style.color = "black";
          document.getElementById("Measure4Beat4DownNote1").style.color = "orange";
 
          break;
        case 17: //A
          b5black.style.display  = "inline";
          b5yellow.style.display = "none";
          a5black.style.display  = "none";
          a5yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  1";



          document.getElementById("Measure4Beat4DownNote1").style.color = "black";
          document.getElementById("Measure5Beat1UpNote1").style.color = "orange";

          break;
        case 18: //G
          a5black.style.display  = "inline";
          a5yellow.style.display = "none";
          g4white.style.display  = "none";
          g4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";



          document.getElementById("Measure5Beat1UpNote1").style.color = "black";
          document.getElementById("Measure5Beat2UpNote1").style.color = "orange";
          
          if (showPatternNewInstructions)
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

          countDisplay.innerHTML = "COUNT:  3";



          document.getElementById("Measure5Beat2UpNote1").style.color = "black";
          document.getElementById("Measure5Beat3UpNote1").style.color = "orange";
          
          break;
        case 20: //D
          e4black.style.display  = "inline";
          e4yellow.style.display = "none";
          d4black.style.display  = "none";
          d4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  4";



          document.getElementById("Measure5Beat3UpNote1").style.color = "black";
          document.getElementById("Measure5Beat4UpNote1").style.color = "orange";
 
          break;
        case 21: //B
          d4black.style.display  = "inline";
          d4yellow.style.display = "none";
          b4black.style.display  = "none";
          b4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  1";


          document.getElementById("Measure5Beat4UpNote1").style.color = "black";
          document.getElementById("Measure6Beat1UpNote1").style.color = "orange";
 
          break;
        case 22: //A
          b4black.style.display  = "inline";
          b4yellow.style.display = "none";
          a4black.style.display  = "none";
          a4yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  2";



          document.getElementById("Measure6Beat1UpNote1").style.color = "black";
          document.getElementById("Measure6Beat2UpNote1").style.color = "orange";
 
 
          break;
        case 23: //G
          a4black.style.display  = "inline";
          a4yellow.style.display = "none";
          g3white.style.display  = "none";
          g3yellow.style.display = "inline";

          countDisplay.innerHTML = "COUNT:  1";



          document.getElementById("Measure6Beat2UpNote1").style.color = "black";
          document.getElementById("Measure1Beat1UpNote1").style.color = "orange";
 

          if (showPatternNewInstructions)
          {
             instructions.innerHTML = "Change tempo as desired, click restart to restart simulation";
          }
 

          //tempoSelect.style.display = "inline";

          tempo.style.display="inline";
          showPatternNewInstructions = false;
          //myButton.style.display = "inline";
          //myButton.disabled  = false;

 
          newStateNumber = 1;
          break;

      }

      newStateNumber += 1;
 
}

function initStaff()
{
   console.log("INIT STAFF CALLED..........");
}
function clearStaff()
{
   let staffElement = document.getElementById('injectStaffID');
   staffElement.style.display = "none";
   staffElement.innerHTML = "";
}

function showStaff(pos_y)
{

   populateGlobals();

   document.getElementById("injectStaffID").style.display = "inline";
   injectTrebleClef(pos_y);
   changeKey("G");

   injectTimeSignatureHtml("fsharp", "4", "4");
   injectRepeatBarHtml("trebleStaffTimeSignatureID");


   /* Up Notes:  */

   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "qua5");
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "qub5");
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "quc6");
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "qud6");
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "que6");
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "quf6");
 
 
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "quf4 qua4 quc5");
   // E Chord (I): (Low)
   //injectQuarterNotesHtml("trebleStaffRepeatBarID","Measure1","Beat1","que3 qug3 qub3 que4 qug4");
 
   // A Chord (IV): (Low)
   //injectQuarterNotesHtml("trebleStaffRepeatBarID","Measure1","Beat1","qua3 quc4 que4 qua4 quc5");

   // B Chord (V): (Low)
   //injectQuarterNotesHtml("trebleStaffRepeatBarID","Measure1","Beat1","qub3 qud4 quf4 qub4 qud5");

   // F Chord (I): High
   //injectQuarterNotesHtml("trebleStaffRepeatBarID","Measure1","Beat1","qdf5 qda5 qdc6 qdf6");

   /* Down Notes:  */
   //injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "qdf6");



   /* Pentonic G Major Scale:  */
   // G3:
   let previousElement = injectQuarterNotesHtml("trebleStaffRepeatBarID", "Measure1", "Beat1", "qug3");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure1", "Beat2", "qua3");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure1", "Beat3", "qub3");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure1", "Beat4", "qud4");
   previousElement = injectSingleBarHtml(previousElement, "Measure1");

   previousElement = injectQuarterNotesHtml(previousElement, "Measure2", "Beat1", "que4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure2", "Beat2", "qug4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure2", "Beat3", "qua4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure2", "Beat4", "qub4");
   previousElement = injectSingleBarHtml(previousElement, "Measure2");

   previousElement = injectQuarterNotesHtml(previousElement, "Measure3", "Beat1", "qdd5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure3", "Beat2", "qde5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure3", "Beat3", "qdg5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure3", "Beat4", "qda5");
   previousElement = injectSingleBarHtml(previousElement, "Measure3");

   injectTrebleClefNew(previousElement);
   let l2  = document.getElementById("line2Id");
   l2.style.top  = (pos_y + 230).toString() + "px";
   l2.style.left = "70px";
   previousElement = changeKeyNew("G", "line2");
   //previousElement = injectSingleBarHtml(previousElement, "Measure4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure4", "Beat1", "qdg5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure4", "Beat2", "qde5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure4", "Beat3", "qdd5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure4", "Beat4", "qdb4");
   previousElement = injectSingleBarHtml(previousElement, "Measure5");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure5", "Beat1", "qua4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure5", "Beat2", "qug4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure5", "Beat3", "que4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure5", "Beat4", "qud4");
   previousElement = injectSingleBarHtml(previousElement, "Measure6");
   previousElement = injectTimeSignatureHtmlNew(previousElement, "2", "4");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure6", "Beat1", "qub3");
   previousElement = injectQuarterNotesHtml(previousElement, "Measure6", "Beat2", "qua3");
   previousElement = injectReverseRepeatBarHtml(previousElement);
 


// injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
// injectSharpHtml("fsharp", "csharp", "csharpCharacter");
// injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
// injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
// injectSharpHtml("dsharp", "asharp", "asharpCharacter");
// injectSharpHtml("asharp", "esharp", "esharpCharacter");
// injectSharpHtml("esharp", "bsharp", "bsharpCharacter");
 
}
function placeSharpNew(leftElement, currentElement, currentCharacter, currentLine)
{
   let right = findRight('trebleStaffClefLine2ID');
   let sharpDiv = document.getElementById(currentElement + currentLine); //'fsharpline2');
   //let sharpDiv = document.getElementById('fsharpline2');
   let top    = findTop('trebleStaffClefLine2ID');

   sharpDiv.style.display = "inline";
   sharpDiv.style.left = (right-sharpAndFlatFudge).toString() + "px";
   sharpDiv.style.top  = top.toString() + "px";
   let height = findHeight(currentElement);

   let character     = document.getElementById('fsharpCharacterline2');
   let width = findWidth(currentCharacter);
   character.style.left = (width / 2 - 10).toString() + "px";
   switch (currentCharacter)
   {
      case "fsharpCharacter":
         character.style.top  = fSharpRelativeTopOffset.toString() + "px";
         break;
      case "csharpCharacter":
         character.style.top  = cSharpRelativeTopOffset.toString() + "px";
         break;
      case "gsharpCharacter":
         character.style.top  = gSharpRelativeTopOffset.toString() + "px";
         break;
      case "dsharpCharacter":
         character.style.top  = dSharpRelativeTopOffset.toString() + "px";
         break;
      case "asharpCharacter":
         character.style.top  = aSharpRelativeTopOffset.toString() + "px";
         break;
      case "esharpCharacter":
         character.style.top  = eSharpRelativeTopOffset.toString() + "px";
         break;
      case "bsharpCharacter":
         character.style.top  = bSharpRelativeTopOffset.toString() + "px";
         break;
   }
}

function placeSharp(leftElement, currentElement, currentCharacter)
{
   let right = findRight(leftElement);
   let sharpDiv = document.getElementById(currentElement);
   let top    = findTop(leftElement);
 
   sharpDiv.style.display = "inline";
   sharpDiv.style.left = (right-sharpAndFlatFudge).toString() + "px";
   sharpDiv.style.top  = top.toString() + "px";
   let height = findHeight(currentElement);

   let character     = document.getElementById(currentCharacter);
   let width = findWidth(currentCharacter);
   character.style.left = (width / 2 - 10).toString() + "px";
   switch (currentCharacter)
   {
      case "fsharpCharacter":
         character.style.top  = fSharpRelativeTopOffset.toString() + "px";
         break;
      case "csharpCharacter":
         character.style.top  = cSharpRelativeTopOffset.toString() + "px";
         break;
      case "gsharpCharacter":
         character.style.top  = gSharpRelativeTopOffset.toString() + "px";
         break;
      case "dsharpCharacter":
         character.style.top  = dSharpRelativeTopOffset.toString() + "px";
         break;
      case "asharpCharacter":
         character.style.top  = aSharpRelativeTopOffset.toString() + "px";
         break;
      case "esharpCharacter":
         character.style.top  = eSharpRelativeTopOffset.toString() + "px";
         break;
      case "bsharpCharacter":
         character.style.top  = bSharpRelativeTopOffset.toString() + "px";
         break;
 
   }
}
function injectTrebleClef(pos_y)
{
    let staffElement = document.getElementById('injectStaffID');
    let innerHtml = staffElement.innerHTML;

    innerHtml += "<div class='trebleStaffClef' id='trebleStaffClefID' style='display:inline;top:" + pos_y + "px'>\n";
    innerHtml += "  <table id='staffLinesID'>\n";
    innerHtml += "    <tr>\n";
    innerHtml += "      <td>&#x1d100</td>\n";
    innerHtml += "      <td>&#x1d11a</td>\n";
    innerHtml += "    </tr>\n";
    innerHtml += "  </table>\n";
    innerHtml += "   <div class='trebleClefI' id='trebleClefIId'>\n";
    innerHtml += "     <p>&#x1d11e</p>\n";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;

    //console.log(staffElement.innerHTML);

   let left   = findLeft("trebleStaffClefID");
   let right  = findRight("trebleStaffClefID");
   let top    = findTop("trebleStaffClefID");
   let height = findHeight("trebleStaffClefID");
   let width  = findWidth("trebleStaffClefID");

   // Move clef up:
   let trebleClefDiv     = document.getElementById("trebleClefIId");
   height = findHeight("trebleClefIId");
   let clefHeightOffset = "-" + (height - clefFudge).toString() + "px";
   trebleClefDiv.style.top  = clefHeightOffset;

}
function injectTrebleClefNew(previousElement)
{
    let staffElement = document.getElementById('injectStaffID');
    let innerHtml = staffElement.innerHTML;

    innerHtml += "<div class='line2' id='line2Id'>\n";
    innerHtml += "  <div class='trebleStaffClefLine2' id='trebleStaffClefLine2ID' style='display:inline;'>\n"
    innerHtml += "     <table>\n";
    innerHtml += "        <tr>\n";
    innerHtml += "           <td>&#x1d100</td>\n";
    innerHtml += "           <td>&#x1d11a</td>\n";
    innerHtml += "        </tr>\n";
    innerHtml += "     </table>\n";
    innerHtml += "   <div class='trebleClefLine2'>\n";
    innerHtml += "     <p>&#x1d11e</p>\n";
    innerHtml += "   </div>\n";
    innerHtml += "  </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;

}
function injectSharpNewHtml(previousElement, currentElement, currentCharacter, currentLine)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;


    innerHtml +=  "<div class='trebleSharpsAndFlats' id='" + currentElement + currentLine + "' style='display:inline;'>\n";
    innerHtml += "   <table id ='keyLinesID" + currentLine + "'>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "   <div class='sharps' id='" + currentCharacter + currentLine + "'>\n";
    innerHtml += "     <p>&#x266f</p>\n";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    console.log(staffElement.innerHTML);

    placeSharpNew(previousElement, currentElement, currentCharacter, currentLine);
    return currentElement + currentLine;
}

function injectSharpHtml(previousElement, currentElement, currentCharacter)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;


    innerHtml +=  "<div class='trebleSharpsAndFlats' id='" + currentElement + "' style='display:inline;'>\n";
    innerHtml += "   <table id ='keyLinesID'>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "   <div class='sharps' id='" + currentCharacter + "'>\n";
    innerHtml += "     <p>&#x266f</p>\n";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;

    placeSharp(previousElement, currentElement, currentCharacter);
}
function injectTimeSignatureHtml(previousElement, numerator, denominator)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='trebleStaffTimeSignature' id='trebleStaffTimeSignatureID' style='display:inline;'>\n";
    innerHtml += "   <table id ='keyLinesID'>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "   <div class='timeSigI' id='timeSigIID'>\n";
    innerHtml += "     <p><b>" + numerator + "</b></p><p><b>" + denominator + "</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    //frq32r2r31qawfsfascvzv Last element "fsharp" is not being past down:
    placeTimeSignature("fsharp", "trebleStaffTimeSignatureID");
}
function injectTimeSignatureHtmlNew(previousElement, numerator, denominator)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='trebleStaffTimeSignature' id='trebleStaffTimeSignatureIDNew' style='display:inline;'>\n";
    innerHtml += "   <table id ='keyLinesIDNew'>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "   <div class='timeSigI' id='timeSigIID'>\n";
    innerHtml += "     <p><b>" + numerator + "</b></p><p><b>" + denominator + "</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    //frq32r2r31qawfsfascvzv Last element "fsharp" is not being past down:
    placeTimeSignature(previousElement, "trebleStaffTimeSignatureIDNew");
    return "trebleStaffTimeSignatureIDNew";
}

function injectRepeatBarHtml(previousElement)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='trebleStaffRepeatBar' id='trebleStaffRepeatBarID' style='display:inline;'>\n";
    innerHtml += "   <table>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d106</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    placeRepeatBar(previousElement, "trebleStaffRepeatBarID");
}
function injectReverseRepeatBarHtml(previousElement)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='trebleStaffRepeatBar' id='trebleStaffReverseRepeatBarID' style='display:inline;'>\n";
    innerHtml += "   <table>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d107</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    placeRepeatBar(previousElement, "trebleStaffReverseRepeatBarID");
    return "trebleStaffReverseRepeatBarID";
}

function injectSingleBarHtml(previousElement, currentMeasure)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='trebleStaffSingleBar' id='trebleStaffSingleBarID" + currentMeasure + "' style='display:none;'>\n";
    innerHtml += "   <table>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d100</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    placeSingleBar(previousElement, currentMeasure); //, "trebleStaffSingleBarID");
    return "trebleStaffSingleBarID" + currentMeasure;
}
function injectNewLine(previousElement)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml += "<div class='newLine' id='newLine1'>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    return "newLine1";
}
function injectQuarterNotesHtml(previousElement, currentMeasure, currentBeat, notesString)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml += "<div class='quarterNotes' id='quarterNoteID_" + currentMeasure + currentBeat + "' style='display:inline;'>\n";
    innerHtml += "   <table>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";
    innerHtml += "   <div class='notesUpOne' id='" + currentMeasure + currentBeat + "UpNote1' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpTwo' id='" + currentMeasure + currentBeat + "UpNote2' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpThree' id='" + currentMeasure + currentBeat + "UpNote3' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpFour' id='" + currentMeasure + currentBeat + "UpNote4' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpFive' id='" + currentMeasure + currentBeat + "UpNote5' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownOne' id='" + currentMeasure + currentBeat + "DownNote1' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownTwo' id='" + currentMeasure + currentBeat + "DownNote2' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownThree' id='" + currentMeasure + currentBeat + "DownNote3' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownFour' id='" + currentMeasure + currentBeat + "DownNote4' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownFive' id='" + currentMeasure + currentBeat + "DownNote5' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='oneLineBelow" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d116</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='twoLinesBelow" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d117</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='threeLinesBelow" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d118</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='oneLineAbove" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d116</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='twoLinesAbove" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d117</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='threeLinesAbove" + currentMeasure + currentBeat + "' style='display:none';>\n";
    innerHtml += "     <p>&#x1d118</p>";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    //console.log(staffElement.innerHTML);
    placeNotes(previousElement,currentMeasure, currentBeat, notesString);


    //return "quarterNoteID_Measure1Beat1";
    return "quarterNoteID_" + currentMeasure + currentBeat;
}
function placeQuarterNote(noteIndex, noteValue, leftElement, currentMeasure, currentBeat, underS, overS, isLast)
{
   // Is it up or down?
   let isUp = true;
   if (noteValue.includes("qd"))
      isUp = false;


   let idString = currentMeasure + currentBeat + "UpNote" + (noteIndex + 1).toString();


   if (!isUp)
      idString = currentMeasure + currentBeat + "DownNote" + (noteIndex + 1).toString();

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// console.log("id:               " + idString);
// console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
 
   let characterNote = document.getElementById(idString);
   let notesDiv = document.getElementById("quarterNoteID_" + currentMeasure + currentBeat); //currentElement);
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let oneLineBelowStaff = document.getElementById("oneLineBelow" + currentMeasure + currentBeat);
   let twoLinesBelowStaff = document.getElementById("twoLinesBelow" + currentMeasure + currentBeat);
   let threeLinesBelowStaff = document.getElementById("threeLinesBelow" + currentMeasure + currentBeat);

   let oneLineAboveStaff = document.getElementById("oneLineAbove" + currentMeasure + currentBeat);
   let twoLinesAboveStaff = document.getElementById("twoLinesAbove" + currentMeasure + currentBeat);
   let threeLinesAboveStaff = document.getElementById("threeLinesAbove" + currentMeasure + currentBeat);
 
 
   characterNote.style.display = "inline";

   notesDiv.style.display = "inline";
   notesDiv.style.left = (rightLeftElement-notesFudge).toString() + "px";
   if (((currentMeasure == "Measure2") || (currentMeasure == "Measure3")) && (currentBeat == "Beat1"))
      notesDiv.style.left = (rightLeftElement+notesFudge).toString() + "px";
   else if ((currentMeasure == "Measure4") && (currentBeat == "Beat1"))
      notesDiv.style.left = (rightLeftElement+notesFudge4).toString() + "px";
   else if ((currentMeasure == "Measure5") && (currentBeat == "Beat1"))
      notesDiv.style.left = (rightLeftElement+notesFudge5).toString() + "px";
   else if ((currentMeasure == "Measure6") && (currentBeat == "Beat1"))
      notesDiv.style.left = (rightLeftElement+notesFudge6).toString() + "px";
 
   notesDiv.style.top  = topLeftElement.toString() + "px";

   if (isUp)
     characterNote.style.top   = quarterNoteUpOffsets[noteValue].toString() + "px";
   else
   {
     characterNote.style.top   = quarterNoteDownOffsets[noteValue].toString() + "px";
   }

   let offsetNote = quarterNoteUpOffsets[noteValue] - (110 * noteIndex);
   if (!isUp)
     offsetNote = quarterNoteDownOffsets[noteValue] - (110 * noteIndex);

   characterNote.style.top = offsetNote.toString() + "px"; 

   if (isUp)
     characterNote.style.left  = "10px";
   else
     characterNote.style.left  = "-37px";

// console.log(">>>>>>>>>>>>>>>>>  CURRENT MEASURE:   " + currentMeasure);
// console.log(">>>>>>>>>>>>>>>>>  CURRENT BEAD:      " + currentBeat);


// if ((currentMeasure == "Measure2") && (currentBeat == "Beat1"))
//    characterNote.style.left = "20px";
 

   if (isLast)
   {
      if (underS == lowerStaff.ONE_BELOW)
      {
        oneLineBelowStaff.style.display = "inline";
        oneLineBelowStaff.style.left    = "-15px";
        let offsetOneStaff = -182 - (110 * noteIndex);
        oneLineBelowStaff.style.top     = offsetOneStaff.toString() + "px";
      }
      else if (underS == lowerStaff.TWO_BELOW)
      {
        twoLinesBelowStaff.style.display = "inline";
        twoLinesBelowStaff.style.left    = "-15px";
        let offsetTwoStaff = -182 - (110 * noteIndex);
        twoLinesBelowStaff.style.top     = offsetTwoStaff.toString() + "px";
      }
      else if (underS == lowerStaff.THREE_BELOW)
      {
        threeLinesBelowStaff.style.display = "inline";
        threeLinesBelowStaff.style.left    = "-15px";
        let offsetThreeStaff = -182 - (110 * noteIndex) + 18;  //??? Why 18 hear??
        threeLinesBelowStaff.style.top     = offsetThreeStaff.toString() + "px";
      }
      if (overS == upperStaff.ONE_ABOVE)
      {
        oneLineAboveStaff.style.display = "inline";
        oneLineAboveStaff.style.left    = "-15px";
        let offsetOneStaff = -282 - (110 * noteIndex);
        oneLineAboveStaff.style.top     = offsetOneStaff.toString() + "px";
      }
      else if (overS == upperStaff.TWO_ABOVE)
      {
        twoLinesAboveStaff.style.display = "inline";
        twoLinesAboveStaff.style.left    = "-15px";
        let offsetTwoStaff = -282 - (110 * noteIndex) - 16;
        twoLinesAboveStaff.style.top     = offsetTwoStaff.toString() + "px";
      }
      else if (overS == upperStaff.THREE_ABOVE)
      {
        threeLinesAboveStaff.style.display = "inline";
        threeLinesAboveStaff.style.left    = "-15px";
        let offsetThreeStaff = -282 - (110 * noteIndex) - 16;
        threeLinesAboveStaff.style.top     = offsetThreeStaff.toString() + "px";
      }
 
   }
 
 
// console.log("    offsetNote:  " + offsetNote);
// console.log("    Left Element:  " + leftElement);
// console.log(" current measure:  " + currentMeasure);
// console.log(" current beat:     " + currentBeat);
// console.log("character name:    " + idString);

// console.log("character bottom:  " + findBottom(idString));
// console.log("   character top:  " + findTop(idString));
// console.log("character height:  " + findHeight(idString));

// console.log(" division bottom:  " + findBottom(currentElement));
// console.log("    division top:  " + findTop(currentElement));
// console.log(" division height:  " + findHeight(currentElement));
   return idString;
}


function placeNote(noteRep)
{
   //console.log("Note: " + noteRep);
}
function placeNotes(leftElement, currentMeasure, currentBeat, noteString)
{
   let notes = noteString.split(' ');
   // DONT LIKE THIS:  notes.forEach(placeNote);

   let numberOfNotes = notes.length;
   let underStaff =  lowerStaff.NONE;
   let overStaff  =  upperStaff.NONE;
 
   for (let noteId = 0; noteId < notes.length; noteId++)
   {
     //console.log("Note: " + noteId + " = " + notes[noteId]);

     switch (notes[notes.length - 1])
     {
        case "qda5":
        case "qdb5":
           overStaff =  upperStaff.ONE_ABOVE;
           break;
        case "qdc6":
        case "qdd6":
           overStaff =  upperStaff.TWO_ABOVE;
           break;
        case "qde6":
        case "qdf6":
           overStaff =  upperStaff.THREE_ABOVE;
           break;
 
     }
     switch (notes[0])
     {
        case "qua5":
        case "qub5":
           overStaff =  upperStaff.ONE_ABOVE;
           break;
        case "qud6":
        case "quc6":
           overStaff =  upperStaff.TWO_ABOVE;
           break;
        case "que6":
        case "quf6":
           overStaff =  upperStaff.THREE_ABOVE;
           break;
        case "quc4":
        case "qub3":
           underStaff =  lowerStaff.ONE_BELOW;
           break;
        case "qua3":
        case "qug3":
           underStaff =  lowerStaff.TWO_BELOW;
           break;
        case "que3":
        case "quf3":
           underStaff =  lowerStaff.THREE_BELOW;
           break;
 
     }
 
      if (noteId == notes.length - 1)
      {
         placeQuarterNote(noteId, notes[noteId], leftElement, currentMeasure, currentBeat, underStaff, overStaff, true);
         //console.log("Note id:  " + noteId + ", Over staff: " + overStaff);
      }
      else
      {
         placeQuarterNote(noteId, notes[noteId], leftElement, currentMeasure, currentBeat, lowerStaff.NONE, upperStaff.NONE, false);
      }
   }
}
function placeTimeSignature(leftElement, currentElement)
{
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let timeDiv = document.getElementById(currentElement);
   let character = document.getElementById("timeSigIID");


   timeDiv.style.display = "inline";
   if (currentElement == "trebleStaffTimeSignatureIDNew")
      timeDiv.style.left = (rightLeftElement - 14).toString() + "px";
   else
      timeDiv.style.left = (rightLeftElement - timeSignatureFudge).toString() + "px";

   timeDiv.style.top  = topLeftElement.toString() + "px";

   let currentElementWidth = findWidth("timeSigIID");
   let currentElementHeight = findHeight("timeSigIID");
   let currentElementBottom = findBottom("timeSigIID");


   character.style.top  = (topLeftElement - currentElementBottom).toString + "px";
   character.style.left = (-10 + currentElementWidth / 2).toString() + "px";

}
function placeSingleBar(leftElement, currentMeasure)
{
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let singleBarDiv = document.getElementById("trebleStaffSingleBarID" + currentMeasure);

   singleBarDiv.style.display = "inline";
   //singleBarDiv.style.left = (rightLeftElement - repeatBarSignatureFudge).toString() + "px";
   if (currentMeasure == "Measure4")
      singleBarDiv.style.left = (rightLeftElement - singleBarMeasure4Fudge).toString() + "px";
   else
      singleBarDiv.style.left = (rightLeftElement - singleBarSignatureFudge).toString() + "px";
   singleBarDiv.style.top  = topLeftElement.toString() + "px";
}
function placeRepeatBar(leftElement, currentElement)
{
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let repeatBarDiv = document.getElementById(currentElement);

   repeatBarDiv.style.display = "inline";
   if (currentElement == "trebleStaffReverseRepeatBarID")
      repeatBarDiv.style.left = (rightLeftElement - repeatReverseBarSignatureFudge).toString() + "px";
   else
      repeatBarDiv.style.left = (rightLeftElement - repeatBarSignatureFudge).toString() + "px";
   repeatBarDiv.style.top  = topLeftElement.toString() + "px";
}
function changeKeyNew(newKey, location)
{
   let rtnValue = "";
   switch (newKey)
   {
      case 'G':
         // F# (Fat):
        rtnValue = injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter", "line2");
        break;
      case 'D':
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter", "line2");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        break;
      case 'A':
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter", "line2");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpNewHtml("csharp", "gsharp", "gsharpCharacter");
        break;
      case 'E':
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpNewHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpNewHtml("gsharp", "dsharp", "dsharpCharacter");
        break;
      case 'B':
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpNewHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpNewHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpNewHtml("dsharp", "asharp", "asharpCharacter");

        break;
      case "FSharp":   //fsharp
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpNewHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpNewHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpNewHtml("dsharp", "asharp", "asharpCharacter");
        // E# (eating):
        injectSharpNewHtml("asharp", "esharp", "esharpCharacter");
 
        break;
      case "CSharp":   //csharp
        // F# (Fat):
        injectSharpNewHtml("trebleStaffClefLine2ID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpNewHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpNewHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpNewHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpNewHtml("dsharp", "asharp", "asharpCharacter");
        // E# (eating):
        injectSharpNewHtml("asharp", "esharp", "esharpCharacter");
        // B# (bologna):
        injectSharpNewHtml("esharp", "bsharp", "bsharpCharacter");
 
        break;
 
   }
   return rtnValue;
}
function changeKey(newKey)
{
   switch (newKey)
   {
      case 'G':
         // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        break;
      case 'D':
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        break;
      case 'A':
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
        break;
      case 'E':
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
        break;
      case 'B':
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpHtml("dsharp", "asharp", "asharpCharacter");

        break;
      case "FSharp":   //fsharp
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpHtml("dsharp", "asharp", "asharpCharacter");
        // E# (eating):
        injectSharpHtml("asharp", "esharp", "esharpCharacter");
 
        break;
      case "CSharp":   //csharp
        // F# (Fat):
        injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
        // C# (cats):
        injectSharpHtml("fsharp", "csharp", "csharpCharacter");
        // G# (go):
        injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
        // D# (down):
        injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
        // A# (alleys):
        injectSharpHtml("dsharp", "asharp", "asharpCharacter");
        // E# (eating):
        injectSharpHtml("asharp", "esharp", "esharpCharacter");
        // B# (bologna):
        injectSharpHtml("esharp", "bsharp", "bsharpCharacter");
 
        break;
 
   }
}
