
var clefFudge = 3;
var sharpAndFlatFudge  = 52;
var timeSignatureFudge = 40;
var repeatBarSignatureFudge = 23;
var notesFudge = 12;

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
                  -151,-142,-136,-129,-121,-113,-104,
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


function showStaff()
{

   populateGlobals();

   document.getElementById("injectStaffID").style.display = "inline";
   injectTrebleClef();
   changeKey("CSharp");
   injectTimeSignatureHtml("bsharp", "4", "4");
   injectRepeatBarHtml("trebleStaffTimeSignatureID");
   injectQuarterNotesUpHtml("trebleStaffRepeatBarID", "quarterNotesID", "qug3");

   // E Chord (I): (Low)
   //placeNotes("trebleStaffRepeatBarID","quarterNotesID","que3 qug3 qub3 que4 qug4");
   // A Chord (IV): (Low)
   //placeNotes("trebleStaffRepeatBarID","quarterNotesID","qua3 quc4 que4 qua4 quc5");
   // B Chord (V): (Low)
   placeNotes("trebleStaffRepeatBarID","quarterNotesID","qub3 qud4 quf4 qub4 qud5");

   // F Chord (I): High
   //placeNotes("trebleStaffRepeatBarID","quarterNotesID","qdf5 qda5 qdc6 qdf6");



// injectSharpHtml("trebleStaffClefID", "fsharp", "fsharpCharacter");
// injectSharpHtml("fsharp", "csharp", "csharpCharacter");
// injectSharpHtml("csharp", "gsharp", "gsharpCharacter");
// injectSharpHtml("gsharp", "dsharp", "dsharpCharacter");
// injectSharpHtml("dsharp", "asharp", "asharpCharacter");
// injectSharpHtml("asharp", "esharp", "esharpCharacter");
// injectSharpHtml("esharp", "bsharp", "bsharpCharacter");
 
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
function injectTrebleClef()
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml += "<div class='trebleStaffClef' id='trebleStaffClefID' style='display:inline;'>\n";
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

   let left   = findLeft("trebleStaffClefID");
   let right  = findRight("trebleStaffClefID");
   let top    = findTop("trebleStaffClefID");
   let height = findHeight("trebleStaffClefID");
   let width  = findWidth("trebleStaffClefID");

   // Move clef up:
   let trebleClefDiv     = document.getElementById("trebleClefIId");
   height = findHeight("trebleClefIId");
   clefHeightOffset = "-" + (height - clefFudge).toString() + "px";
   trebleClefDiv.style.top  = clefHeightOffset;

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
    placeTimeSignature("bsharp", "trebleStaffTimeSignatureID");
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
function injectQuarterNotesUpHtml(previousElement, currentElement, notesString)
{
    let staffElement = document.getElementById("injectStaffID");
    let innerHtml = staffElement.innerHTML;

    innerHtml +=  "<div class='quarterNotes' id='quarterNotesID' style='display:inline;'>\n";
    innerHtml += "   <table>\n";
    innerHtml += "     <tr>\n";
    innerHtml += "       <td>&#x1d11a</td>\n";
    innerHtml += "     </tr>\n";
    innerHtml += "   </table>\n";

//>>>>  New:
    innerHtml += "   <div class='notesUpOne' id='quarterNoteUp1' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpTwo' id='quarterNoteUp2' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpThree' id='quarterNoteUp3' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpFour' id='quarterNoteUp4' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUpFive' id='quarterNoteUp5' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";

    innerHtml += "   <div class='notesDownOne' id='quarterNoteDown1' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownTwo' id='quarterNoteDown2' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownThree' id='quarterNoteDown3' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownFour' id='quarterNoteDown4' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesDownFive' id='quarterNoteDown5' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";

//>>>>  Old, will go away:
 
    innerHtml += "   <div class='notesUp' id='quarterNoteOneUp' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUp2' id='quarterNoteTwoUp' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUp3' id='quarterNoteThreeUp' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUp4' id='quarterNoteFourUp' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='notesUp5' id='quarterNoteFiveUp' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
 
 
    innerHtml += "   <div class='notesDown' id='quarterNoteOneDown' style='display:none';>\n";
    innerHtml += "     <p><b>&#x1d15f</b></p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='oneLineBelow' style='display:none';>\n";
    innerHtml += "     <p>&#x1d116</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='twoLinesBelow' style='display:none';>\n";
    innerHtml += "     <p>&#x1d117</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesBelow' id='threeLinesBelow' style='display:none';>\n";
    innerHtml += "     <p>&#x1d118</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='oneLineAbove' style='display:none';>\n";
    innerHtml += "     <p>&#x1d116</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='twoLinesAbove' style='display:none';>\n";
    innerHtml += "     <p>&#x1d117</p>";
    innerHtml += "   </div>\n";
    innerHtml += "   <div class='staffLinesAbove' id='threeLinesAbove' style='display:none';>\n";
    innerHtml += "     <p>&#x1d118</p>";
    innerHtml += "   </div>\n";
    innerHtml += "</div>\n";

    staffElement.innerHTML = innerHtml;
    placeQuarterNotes(previousElement, currentElement, notesString);
}
function placeQuarterNote(noteIndex, noteValue, leftElement, currentElement, underS, overS, isLast)
{
   // Is it up or down?
   let isUp = true;
   if (noteValue.includes("qd"))
      isUp = false;
 

   let idString = "quarterNoteUp" + (noteIndex + 1).toString();
   if (!isUp)
      idString = "quarterNoteDown" + (noteIndex + 1).toString();

   let characterNote = document.getElementById(idString);
   let notesDiv = document.getElementById(currentElement);
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let oneLineBelowStaff = document.getElementById("oneLineBelow");
   let twoLinesBelowStaff = document.getElementById("twoLinesBelow");
   let threeLinesBelowStaff = document.getElementById("threeLinesBelow");

   let oneLineAboveStaff = document.getElementById("oneLineAbove");
   let twoLinesAboveStaff = document.getElementById("twoLinesAbove");
   let threeLinesAboveStaff = document.getElementById("threeLinesAbove");
 
 
   characterNote.style.display = "inline";

   notesDiv.style.display = "inline";
   notesDiv.style.left = (rightLeftElement-notesFudge).toString() + "px";
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
 
 
   console.log("    offsetNote:  " + offsetNote);
 
   console.log("    Left Element:  " + leftElement);
   console.log(" current Element:  " + currentElement);
   console.log("character name:    " + idString);

   console.log("character bottom:  " + findBottom(idString));
   console.log("   character top:  " + findTop(idString));
   console.log("character height:  " + findHeight(idString));

   console.log(" division bottom:  " + findBottom(currentElement));
   console.log("    division top:  " + findTop(currentElement));
   console.log(" division height:  " + findHeight(currentElement));
}
function placeQuarterNotes(leftElement, currentElement, notesString)
{

   //placeQuarterNote(0, "qde6", leftElement, currentElement, lowerStaff.NONE, upperStaff.THREE_ABOVE, true);
   //placeQuarterNote(0, "qdc6", leftElement, currentElement, lowerStaff.NONE, upperStaff.TWO_ABOVE, true);
   //placeQuarterNote(0, "qda5", leftElement, currentElement, lowerStaff.NONE, upperStaff.ONE_ABOVE, true);
   //placeQuarterNote(0, "qdd4", leftElement, currentElement, lowerStaff.NONE, upperStaff.NONE, true);





   // New function: Up notes with three staff notes below (A Chord)
// placeQuarterNote(0, "qua4", leftElement, currentElement, lowerStaff.NONE, upperStaff.THREE_ABOVE, false);
// placeQuarterNote(1, "qua5", leftElement, currentElement, lowerStaff.NONE, upperStaff.THREE_ABOVE, false);
// placeQuarterNote(2, "quc6", leftElement, currentElement, lowerStaff.NONE, upperStaff.THREE_ABOVE, false);
// placeQuarterNote(3, "que6", leftElement, currentElement, lowerStaff.NONE, upperStaff.THREE_ABOVE, true);

// // New function: Up notes with no staff notes below (E Chord)
// placeQuarterNote(0, "que4", leftElement, currentElement, lowerStaff.NONE, upperStaff.NONE, false);
// placeQuarterNote(1, "qug4", leftElement, currentElement, lowerStaff.NONE, upperStaff.NONE, false);
// placeQuarterNote(2, "que5", leftElement, currentElement, lowerStaff.NONE, upperStaff.NONE, true);


   // New function: Up notes with one staff notes below (C Chord)
// placeQuarterNote(0, "quc4", leftElement, currentElement, lowerStaff.ONE_BELOW, false);
// placeQuarterNote(1, "que4", leftElement, currentElement, lowerStaff.ONE_BELOW, false);
// placeQuarterNote(2, "qug4", leftElement, currentElement, lowerStaff.ONE_BELOW, false);
// placeQuarterNote(3, "quc5", leftElement, currentElement, lowerStaff.ONE_BELOW, false);
// placeQuarterNote(4, "que5", leftElement, currentElement, lowerStaff.ONE_BELOW, true);


   // New function:  Up notes with two staff notes below (G Chord)
// placeQuarterNote(0, "qug3", leftElement, currentElement, lowerStaff.TWO_BELOW, upperStaff.NONE, false);
// placeQuarterNote(1, "qub3", leftElement, currentElement, lowerStaff.TWO_BELOW, upperStaff.NONE, false);
// placeQuarterNote(2, "qud4", leftElement, currentElement, lowerStaff.TWO_BELOW, upperStaff.NONE, false);
// placeQuarterNote(3, "qug4", leftElement, currentElement, lowerStaff.TWO_BELOW, upperStaff.NONE, false);
// placeQuarterNote(4, "qub4", leftElement, currentElement, lowerStaff.TWO_BELOW, upperStaff.NONE, true);

   // New function: Up notes with three staff notes below (E Chord)
// placeQuarterNote(0, "que3", leftElement, currentElement, lowerStaff.THREE_BELOW, upperStaff.NONE, false);
// placeQuarterNote(1, "qug3", leftElement, currentElement, lowerStaff.THREE_BELOW, upperStaff.NONE, false);
// placeQuarterNote(2, "qub3", leftElement, currentElement, lowerStaff.THREE_BELOW, upperStaff.NONE, false);
// placeQuarterNote(3, "que4", leftElement, currentElement, lowerStaff.THREE_BELOW, upperStaff.NONE, false);
// placeQuarterNote(4, "qug4", leftElement, currentElement, lowerStaff.THREE_BELOW, upperStaff.NONE, true);


   return;

//>>>>>>>>>>>>>>>>>>
   let noteCount = 5;
//<<<<<<<<<<<<<<<<
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let notesDiv = document.getElementById(currentElement);
   let character1 = document.getElementById("quarterNoteOneUp");
   let character2 = document.getElementById("quarterNoteTwoUp");
   let character3 = document.getElementById("quarterNoteThreeUp");
   let character4 = document.getElementById("quarterNoteFourUp");
 
   if (notesString.includes("qd"))
      character1 = document.getElementById("quarterNoteOneDown");
 
   let notesDown = document.getElementById("quarterNoteOneDown");
   let notesUp   = document.getElementById("quarterNoteOneUp");
   let notesUp2  = document.getElementById("quarterNoteTwoUp");
   let notesUp3  = document.getElementById("quarterNoteThreeUp");
   let notesUp4  = document.getElementById("quarterNoteFourUp");
   let notesUp5  = document.getElementById("quarterNoteFiveUp");


   let down = false;
   if (notesString.includes("qd"))
      down = true;

   if (down)
   {
      notesUp.style.display = "none";
      notesDown.style.display = "inline";
   }
   else
   {
      notesDown.style.display = "none";
//>>>>>>>>>>>>>>>>>>
      notesUp.style.display = "inline";
      notesUp2.style.display = "inline";
      notesUp3.style.display = "inline";
      notesUp4.style.display = "inline";
      notesUp5.style.display = "inline";
//<<<<<<<<<<<<<<<<<<<<<
   }



   notesDiv.style.display = "inline";
   notesDiv.style.left = (rightLeftElement-notesFudge).toString() + "px";
   notesDiv.style.top  = topLeftElement.toString() + "px";

   let oneLineBelowStaff = document.getElementById("oneLineBelow");
   let twoLinesBelowStaff = document.getElementById("twoLinesBelow");
   let threeLinesBelowStaff = document.getElementById("threeLinesBelow");
   let oneLineAboveStaff = document.getElementById("oneLineAbove");
   let twoLinesAboveStaff = document.getElementById("twoLinesAbove");
   let threeLinesAboveStaff = document.getElementById("threeLinesAbove");

   if (down)
   {
     character1.style.top   = (quarterNoteDownOffsets[notesString]+36).toString() + "px";
     character1.style.left  = "-37px";
   }
   else
   {
     character1 = document.getElementById("quarterNoteOneUp");
     character2 = document.getElementById("quarterNoteTwoUp");
     character3 = document.getElementById("quarterNoteThreeUp");
     character4 = document.getElementById("quarterNoteFourUp");
     character5 = document.getElementById("quarterNoteFiveUp");





//>>>>>>>>>>>>>>>>>>

     // One note:
//   character1.style.top   = quarterNoteUpOffsets[notesString].toString() + "px";
//   character1.style.left  = "10px";

     // Two notes:
//   character1.style.top   = (quarterNoteUpOffsets[notesString]-10).toString() + "px";
//   character1.style.left  = "10px";
//   character2.style.top   = (quarterNoteUpOffsets["qub3"]-108-10).toString() + "px";
//   character2.style.left  = "10px";

//   // Three notes: 
//   character1.style.top   = (quarterNoteUpOffsets["qug3"]-3).toString() + "px";
//   character1.style.left  = "10px";
//   character2.style.top   = (quarterNoteUpOffsets["qub3"]-113).toString() + "px";
//   character2.style.left  = "10px";
//   character3.style.top   = (quarterNoteUpOffsets["qud4"]-221).toString() + "px";
//   character3.style.left  = "10px";

//    // Four notes: 
//   character1.style.top   = (quarterNoteUpOffsets["qug3"]-3).toString() + "px";
//   character1.style.left  = "10px";
//   character2.style.top   = (quarterNoteUpOffsets["qub3"]-113).toString() + "px";
//   character2.style.left  = "10px";
//   character3.style.top   = (quarterNoteUpOffsets["qud4"]-221).toString() + "px";
//   character3.style.left  = "10px";
//   character4.style.top   = (quarterNoteUpOffsets["qug4"]-330).toString() + "px";
//   character4.style.left  = "10px";

     // Five notes: 
     character1.style.top   = (quarterNoteUpOffsets["qug3"]-3).toString() + "px";
     character1.style.left  = "10px";
     character2.style.top   = (quarterNoteUpOffsets["qub3"]-113).toString() + "px";
     character2.style.left  = "10px";
     character3.style.top   = (quarterNoteUpOffsets["qud4"]-221).toString() + "px";
     character3.style.left  = "10px";
     character4.style.top   = (quarterNoteUpOffsets["qug4"]-330).toString() + "px";
     character4.style.left  = "10px";
     character5.style.top   = (quarterNoteUpOffsets["qub4"]-441).toString() + "px";
     character5.style.left  = "10px";



//<<<<<<<<<<<<<<<<<<

   }

   console.log("Note:  " + notesString);
   if (down)
   {
      console.log("Note down offset:  " + quarterNoteDownOffsets[notesString]);
   }
   else
   {
      //console.log("Note up   offset:  " + quarterNoteUpOffsets[notesString]);
      console.log("Note up   offset:  " + quarterNoteUpOffsets["qug3"]);
      console.log("Note2 up   offset:  " + quarterNoteUpOffsets["qua3"]);
      console.log("Note up height:  " + findHeight("quarterNoteOneUp"));
      console.log("Note2 up height:  " + findHeight("quarterNoteTwoUp"));
      console.log("Quarter notes height:  " + findHeight("quarterNotesID"));
 
   }
 
   switch (notesString)
   {
      case "quf6":
      case "que6":
      case "qdf6":
      case "qde6":
         threeLinesAboveStaff.style.display = "inline";
         threeLinesAboveStaff.style.top   = "-297px";
         threeLinesAboveStaff.style.left  = "-15px";
         break;
      case "qdd6":
      case "qdc6":
      case "qud6":
      case "quc6":
         twoLinesAboveStaff.style.display = "inline";
         twoLinesAboveStaff.style.top   = "-297px";
         twoLinesAboveStaff.style.left  = "-15px";
         break;
      case "qdb5":
      case "qda5":
      case "qub5":
      case "qua5":
         oneLineAboveStaff.style.display = "inline";
         oneLineAboveStaff.style.top   = "-281px";
         oneLineAboveStaff.style.left  = "-15px";
         break;
      case "qdc4":
      case "qdb3":
      case "quc4":
      case "qub3":
         oneLineBelowStaff.style.display = "inline";
         oneLineBelowStaff.style.top   = "-182px";
         oneLineBelowStaff.style.left  = "-15px";
         break;
      case "qda3":
      case "qdg3":
      case "qua3":
      case "qug3":
         twoLinesBelowStaff.style.display = "inline";
         twoLinesBelowStaff.style.left  = "-15px";
         if (noteCount == 1)
         {
            twoLinesBelowStaff.style.top   = "-182px";
         }
         if (noteCount == 2)
         {
            twoLinesBelowStaff.style.top = "-292px";
         }
         else if (noteCount == 3)
         {
           twoLinesBelowStaff.style.top = "-405px";
         }
         else if (noteCount == 4)
         {
           twoLinesBelowStaff.style.top = "-515px";
         }
         else if (noteCount == 5)
         {
           twoLinesBelowStaff.style.top = "-625px";
         }
 
 
         break;
      case "qdf3":
      case "qde3":
      case "quf3":
      case "que3":
         threeLinesBelowStaff.style.display = "inline";
         threeLinesBelowStaff.style.left  = "-15px";
         if (noteCount == 1)
         {
           threeLinesBelowStaff.style.top   = "-165px";
         }
         else if (noteCount == 2)
         {
           threeLinesBelowStaff.style.top = "-285px";
         }
         
         break;
   }
}
function placeNote(noteRep)
{
   console.log("Note: " + noteRep);
}
function placeNotes(leftElement, currentElement, noteString)
{
   notes = noteString.split(' ');
   // DONT LIKE THIS:  notes.forEach(placeNote);

   numberOfNotes = notes.length;
   let underStaff =  lowerStaff.NONE;
   let overStaff  =  upperStaff.NONE;
 
   for (noteId = 0; noteId < notes.length; noteId++)
   {
     console.log("Note: " + noteId + " = " + notes[noteId]);

     switch (notes[notes.length - 1])
     {
        case "qda5":
           overStaff =  upperStaff.ONE_ABOVE;
           break;
        case "qdc6":
           overStaff =  upperStaff.TWO_ABOVE;
           break;
        case "qdf6":
           overStaff =  upperStaff.THREE_ABOVE;
           break;
 
     }
     switch (notes[0])
     {
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
         placeQuarterNote(noteId, notes[noteId], leftElement, currentElement, underStaff, overStaff, true);
         console.log("Note id:  " + noteId + ", Over staff: " + overStaff);
      }
      else
      {
         placeQuarterNote(noteId, notes[noteId], leftElement, currentElement, lowerStaff.NONE, upperStaff.NONE, false);
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

   timeDiv.style.left = (rightLeftElement - timeSignatureFudge).toString() + "px";
   timeDiv.style.top  = topLeftElement.toString() + "px";

   let currentElementWidth = findWidth("timeSigIID");
   let currentElementHeight = findHeight("timeSigIID");
   let currentElementBottom = findBottom("timeSigIID");


   character.style.top  = (topLeftElement - currentElementBottom).toString + "px";
   character.style.left = (-10 + currentElementWidth / 2).toString() + "px";

}
function placeRepeatBar(leftElement, currentElement)
{
   let rightLeftElement = findRight(leftElement);
   let topLeftElement   = findTop(leftElement);

   let repeatBarDiv = document.getElementById(currentElement);

   repeatBarDiv.style.display = "inline";
   repeatBarDiv.style.left = (rightLeftElement - repeatBarSignatureFudge).toString() + "px";
   repeatBarDiv.style.top  = topLeftElement.toString() + "px";
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
