// Define the set of test frequencies that we'll use to analyze microphone data.
var C2 = 65.41; // C2 note, in Hz.
var notes = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];

var aMajPos1Notes = 	["A","B","C#","D","E","F#","G#","A","B","C#","D","E","F#","G#","A"];
var aHMinPos1Notes = 	["A","B","C","D","E","F","G#","A","B","C","D","E","F","G#","A","B","C"];
var aMMinPos1Notes = 	["A","B","C","D","E","F#","G#","A","B","C","D","E","F#","G#","A","B"];
var aPentPos1Notes =	["A","C","D","E","G","A","C","D","E","G","A","C"];
var aOctPos1Notes = 	["A","A#","C","C#","D#","E","F#","G","A","A#","C","C#","D#","E","F#","G","A"];
var aWholePos1Notes = 	["A","B","C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#","F","G"];

var aSharpMajPos1Notes = 	["A#","C","D","D#","F","G","A","A#","C","D","D#","F","G","A","A#"];
var aSharpHMinPos1Notes = 	["A#","C","C#","D#","F","F#","A","A#","C","C#","D#","F","F#","A","A#","C","C#"];
var aSharpMMinPos1Notes = 	["A#","C","C#","D#","F","G","A","A#","C","C#","D#","F","G","A","A#","C"];
var aSharpPentPos1Notes =	["A#","C#","D#","F","G#","A#","C#","D#","F","G#","A#","C#"];
var aSharpOctPos1Notes = 	["A#","B","C#","D","E","F","G","G#","A#","B","C#","D","E","F","G","G#","A#"];
var aSharpWholePos1Notes = 	["A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#"];

var bMajPos1Notes = 	["B","C#","D#","E","F#","F#","A#","B","C#","D#","E","F#","G#","A#","B"];
var bHMinPos1Notes = 	["B","C#","D","E","F#","G","A#","B","C#","D","E","F#","G","A#","B","C#","D"];
var bMMinPos1Notes = 	["B","C#","D","E","F#","G#","A#","B","C#","D","E","F#","G#","A#","B","C#"];
var bPentPos1Notes =	["B","D","E","F#","A","B","D","E","F#","A","B","D"];
var bOctPos1Notes = 	["B","C","D","D#","F","F#","G#","A","B","C","D","D#","F","F#","G#","A","B"];
var bWholePos1Notes = 	["B","C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#","F","G","A"];

var cMajPos1Notes = 	["C","D","E","F","G","A","B","C","D","E","F","G","A","B","C"];
var cHMinPos1Notes = 	["C","D","D#","F","G","G#","B","C","D","D#","F","G","G#","B","C","D","D#"];
var cMMinPos1Notes = 	["C","D","D#","F","G","A","B","C","D","D#","F","G","A","B","C","D"];
var cPentPos1Notes =	["C","D#","F","G","A#","C","D#","F","G","A#","C","D#"];
var cOctPos1Notes = 	["C","C#","D#","E","F#","G","A","A#","C","C#","D#","E","F","G","A","A#","C"];
var cWholePos1Notes = 	["C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#"];

var cSharpMajPos1Notes = 	["C#","D#","F","F#","G#","A#","C","C#","D#","F","F#","G#","A#","C","C#"];
var cSharpHMinPos1Notes = 	["C#","D#","E","F#","G#","A","C","C#","D#","E","F#","G#","A","C","C#","D#","E"];
var cSharpMMinPos1Notes = 	["C#","D#","E","F#","G#","A#","C","C#","D#","E","F#","G#","A#","C","C#","D#"];
var cSharpPentPos1Notes =	["C#","E","F#","G#","B","C#","E","F#","G#","B","C#","E"];
var cSharpOctPos1Notes = 	["C#","D","E","F","G","G#","A#","B","C#","D","E","F","F#","G#","A#","B","C#"];
var cSharpWholePos1Notes = 	["C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#","F","G","A","B"];

var dMajPos1Notes = 	["D","E","F#","G","A","B","C#","D","E","F#","G","A","B","C#","D"];
var	dHMinPos1Notes = 	["D","E","F","G","A","A#","C#","D","E","F","G","A","A#","C#","D","E","F"];
var dMMinPos1Notes = 	["D","E","F","G","A","B","C#","D","E","F","G","A","B","C#","D","E"];
var dPentPos1Notes =	["D","F","G","A","C","D","F","G","A","C","D","F"];
var dOctPos1Notes = 	["D","D#","F","F#","G#","A","B","C","D","D#","F","F#","G","A","B","C","D"];
var dWholePos1Notes = 	["D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C"];

var dSharpMajPos1Notes = 	["D#","F","G","G#","A#","C","D","D#","F","G","G#","A#","C","D","D#"];
var	dSharpHMinPos1Notes = 	["D#","F","F#","G#","A#","B","D","D#","F","F#","G#","A#","B","D","D#","F","F#"];
var dSharpMMinPos1Notes = 	["D#","F","F#","G#","A#","C","D","D#","F","F#","G#","A#","C","D","D#","F"];
var dSharpPentPos1Notes =	["D#","F#","G#","A#","C#","D#","F#","G#","A#","C#","D#","F#"];
var dSharpOctPos1Notes = 	["D#","E","F#","G","A","A#","C","C#","D#","E","F#","G","G#","A#","C","C#","D#"];
var dSharpWholePos1Notes = 	["D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#"];

var eMajPos1Notes = 	["E","F#","G#","A","B","C#","D#","E","F#","G#","A","B","C#","D#","E"];
var	eHMinPos1Notes = 	["E","F#","G","A","B","C","D#","E","F#","G","A","B","C","D#","E","F#","G"];
var eMMinPos1Notes = 	["E","F#","G","A","B","C#","D#","E","F#","G","A","B","C#","D#","E","F#"];
var ePentPos1Notes =	["E","G","A","B","D","E","G","A","B","D","E","G"];
var eOctPos1Notes = 	["E","F","G","G#","A#","B","C#","D","E","F","G","G#","A","B","C#","D","E"];
var eWholePos1Notes = 	["E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D"];

var fMajPos1Notes = 	["F","G","A","A#","C","D","E","F","G","A","A#","C","D","E","F"];
var	fHMinPos1Notes = 	["F","G","G#","A#","C","C#","E","F","G","G#","A#","C","C#","E","F","G","G#"];
var fMMinPos1Notes = 	["F","G","G#","A#","C","D","E","F","G","G#","A#","C","D","E","F","G"];
var fPentPos1Notes =	["F","G#","A#","C","D#","F","G#","A#","C","D#","F","G#"];
var fOctPos1Notes = 	["F","F#","G#","A","B","C","D","D#","F","F#","G#","A","A#","C","D","D#","F"];
var fWholePos1Notes = 	["F","G","A","B","C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#"];

var fSharpMajPos1Notes = 	["F#","G#","A#","B","C#","D#","F","F#","G#","A#","B","C#","D#","F","F#"];
var	fSharpHMinPos1Notes = 	["F#","G#","A","B","C#","D","F","F#","G#","A","B","C#","D","F","F#","G#","A"];
var fSharpMMinPos1Notes = 	["F#","G#","A","B","C#","D#","F","F#","G#","A","B","C#","D#","F","F#","G#"];
var fSharpPentPos1Notes =	["F#","A","B","C#","E","F#","A","B","C#","E","F#","A"];
var fSharpOctPos1Notes = 	["F#","G","A","A#","C","C#","D#","E","F#","G","A","A#","B","C#","D#","E","F#"];
var fSharpWholePos1Notes = 	["F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E"];

var gMajPos1Notes = 	["G","A","B","C","D","E","F#","G","A","B","C","D","E","F#","G"];
var	gHMinPos1Notes = 	["G","A","A#","C","D","D#","F#","G","A","A#","C","D","D#","F#","G","A","A#"];
var gMMinPos1Notes = 	["G","A","A#","C","D","E","F#","G","A","A#","C","D","E","F#","G","A"];
var gPentPos1Notes =	["G","A#","C","D","F","G","A#","C","D","F","G","A#"];
var gOctPos1Notes = 	["G","G#","A#","B","C#","D","E","F","G","G#","A#","B","C","D","E","F","G"];
var gWholePos1Notes = 	["G","A","B","C#","D#","F","G","A","B","C#","D#","F","G","A","B","C#","D#","F"];

var gSharpMajPos1Notes = 	["G#","A#","C","C#","D#","F","G","G#","A#","C","C#","D#","F","G","G#"];
var	gSharpHMinPos1Notes = 	["G#","A#","B","C#","D#","E","G","G#","A#","B","C#","D#","E","G","G#","A#","B"];
var gSharpMMinPos1Notes = 	["G#","A#","B","C#","D#","F","G","G#","A#","B","C#","D#","F","G","G#","A#"];
var gSharpPentPos1Notes =	["G#","B","C#","D#","F#","G#","B","C#","D#","F#","G#","B"];
var gSharpOctPos1Notes = 	["G#","A","B","C","D","D#","F","F#","G#","A","B","C","C#","D#","F","F#","G#"];
var gSharpWholePos1Notes = 	["G#","A#","C","D","E","F#","G#","A#","C","D","E","F#","G#","A#","C","D","E","F#"];

var aMajPos1Frets = 	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var aHMinPos1Frets = 	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var aMMinPos1Frets = 	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var aPentPos1Frets = 	[5,8,5,7,5,7,5,7,5,8,5,8];
var aOctPos1Frets = 	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var aWholePos1Frets =	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var aSharpMajPos1Frets = 	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var aSharpHMinPos1Frets = 	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var aSharpMMinPos1Frets =	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var aSharpPentPos1Frets = 	[5,8,5,7,5,7,5,7,5,8,5,8];
var aSharpOctPos1Frets = 	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var aSharpWholePos1Frets =	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var bMajPos1Frets =			[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var bHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var bMMinPos1Frets = 		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var bPentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var bOctPos1Frets = 		[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var bWholePos1Frets = 		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var cMajPos1Frets = 		[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var cHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var cMMinPos1Frets =		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var cPentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var cOctPos1Frets = 		[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var cWholePos1Frets = 		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var cSharpMajPos1Frets = 	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var cSharpHMinPos1Frets = 	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var cSharpMMinPos1Frets = 	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var cSharpPentPos1Frets = 	[5,8,5,7,5,7,5,7,5,8,5,8];
var cSharpOctPos1Frets = 	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var cSharpWholePos1Frets = 	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var dMajPos1Frets = 		[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var dHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var dMMinPos1Frets = 		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var dPentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var dOctPos1Frets =			[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var dWholePos1Frets = 		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var dSharpMajPos1Frets = 	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var dSharpHMinPos1Frets =	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var dSharpMMinPos1Frets =	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var dSharpPentPos1Frets =	[5,8,5,7,5,7,5,7,5,8,5,8];
var dSharpOctPos1Frets =	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var dSharpWholePos1Frets =	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var eMajPos1Frets =			[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var eHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var eMMinPos1Frets = 		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var ePentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var eOctPos1Frets =			[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var eWholePos1Frets = 		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var fMajPos1Frets = 		[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var fHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var fMMinPos1Frets = 		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var fPentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var fOctPos1Frets = 		[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var fWholePos1Frets = 		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var fSharpMajPos1Frets = 	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var fSharpHMinPos1Frets = 	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var fSharpMMinPos1Frets = 	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var fSharpPentPos1Frets = 	[5,8,5,7,5,7,5,7,5,8,5,8];
var fSharpOctPos1Frets =	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var fSharpWholePos1Frets = 	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var gMajPos1Frets = 		[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var gHMinPos1Frets = 		[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var gMMinPos1Frets = 		[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var gPentPos1Frets = 		[5,8,5,7,5,7,5,7,5,8,5,8];
var gOctPos1Frets = 		[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var gWholePos1Frets =		[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];

var gSharpMajPos1Frets =	[5,7,4,5,7,4,6,7,4,6,7,5,7,4,5];
var gSharpHMinPos1Frets = 	[5,7,8,5,7,8,6,7,4,5,7,5,6,9,5,7,8];
var gSharpMMinPos1Frets = 	[5,7,3,5,7,4,6,7,4,5,7,5,7,4,5,7];
var gSharpPentPos1Frets =	[5,8,5,7,5,7,5,7,5,8,5,8];
var gSharpOctPos1Frets =	[5,6,8,4,6,7,4,5,7,8,4,5,6,5,7,8,5];
var gSharpWholePos1Frets =	[5,7,9,6,8,10,7,9,11,8,10,12,10,12,14,11,13,15];


var majPos1Strings = 	[1,1,2,2,2,3,3,3,4,4,4,5,5,6,6];
var hMinPos1Strings = 	[1,1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,6];
var mMinPos1Strings = 	[1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,6];
var pentPos1Strings = 	[1,1,2,2,3,3,4,4,5,5,6,6];
var octPos1Strings = 	[1,1,1,2,2,2,3,3,3,3,4,4,5,5,5,5,6];
var wholePos1Strings =	[1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6];



var test_frequencies = [];
var canvas;
var key;
var accidental = "n";
var scale;
var position = "one";
var slots = [120,360,600,840,1080,1320,1560,1800,2040,2280,2520,2760];
var strings = [288,242,190,138,88,35];
var scaleNum = -1;
var scaleIndex = -1;

var notesToPlay;

for (var i = 0; i < 30; i++)
{
	var note_frequency = C2 * Math.pow(2, i / 12);
	var note_name = notes[i % 12];
	var note = { "frequency": note_frequency, "name": note_name };
	var just_above = { "frequency": note_frequency * Math.pow(2, 1 / 48), "name": note_name/* + " (a bit sharp)" */};
	var just_below = { "frequency": note_frequency * Math.pow(2, -1 / 48), "name": note_name/* + " (a bit flat)" */};
	test_frequencies = test_frequencies.concat([ just_below, note, just_above ]);
}

window.addEventListener("load", initialize);

var correlation_worker = new Worker("correlation_worker.js");
correlation_worker.addEventListener("message", interpret_correlation_result);

function initialize()
{
	var x =  document.getElementById('canvas');
	canvas = x.getContext('2d');
	var get_user_media = navigator.getUserMedia;
	get_user_media = get_user_media || navigator.webkitGetUserMedia;
	get_user_media = get_user_media || navigator.mozGetUserMedia;
	get_user_media.call(navigator, { "audio": true }, use_stream, function() {});
	//document.getElementById("play-note").addEventListener("click", toggle_playing_note);
    
    document.getElementById("nextNote").addEventListener("click", toNextNote);
    drawBase();
	
	//need to iterate through the values of all the fret arrays and store them in new ones.....
	//so one for loop with 12 as the end.
	//inside, put for loop for each of the six scales that goes through the values and puts them in the other arrays
	for(var i=0;i<11;i++){
		//each index increase represents a new key
		//each for loop is the scale, iterating through
		for(var j=0;j<aMajPos1Frets.length;j++){
			if(i==0){
				aSharpMajPos1Frets[j]+=1;
			}
			else if(i==1){
				bMajPos1Frets[j]+=2;
			}
			else if(i==2){
				cMajPos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpMajPos1Frets[j]+=4;
			}
			else if(i==4){
				dMajPos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpMajPos1Frets[j]+=6;
			}
			else if(i==6){
				eMajPos1Frets[j]+=7;
			}
			else if(i==7){
				fMajPos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpMajPos1Frets[j]-=3;
			}
			else if(i==9){
				gMajPos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpMajPos1Frets[j]-=1;
			}
		
		}
		for(var j=0;j<aHMinPos1Frets.length;j++){
			if(i==0){
				aSharpHMinPos1Frets[j]+=1;
			}
			else if(i==1){
				bHMinPos1Frets[j]+=2;
			}
			else if(i==2){
				cHMinPos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpHMinPos1Frets[j]+=4;
			}
			else if(i==4){
				dHMinPos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpHMinPos1Frets[j]+=6;
			}
			else if(i==6){
				eHMinPos1Frets[j]+=7;
			}
			else if(i==7){
				fHMinPos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpHMinPos1Frets[j]-=3;
			}
			else if(i==9){
				gHMinPos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpHMinPos1Frets[j]-=1;
			}
		
		}
		for(var j=0;j<aMMinPos1Frets.length;j++){
			if(i==0){
				aSharpMMinPos1Frets[j]+=1;
			}
			else if(i==1){
				bMMinPos1Frets[j]+=2;
			}
			else if(i==2){
				cMMinPos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpMMinPos1Frets[j]+=4;
			}
			else if(i==4){
				dMMinPos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpMMinPos1Frets[j]+=6;
			}
			else if(i==6){
				eMMinPos1Frets[j]+=7;
			}
			else if(i==7){
				fMMinPos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpMMinPos1Frets[j]-=3;
			}
			else if(i==9){
				gMMinPos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpMMinPos1Frets[j]-=1;
			}
		
		}
		for(var j=0;j<aPentPos1Frets.length;j++){			
			if(i==0){
				aSharpPentPos1Frets[j]+=1;
			}
			else if(i==1){
				bPentPos1Frets[j]+=2;
			}
			else if(i==2){
				cPentPos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpPentPos1Frets[j]+=4;
			}
			else if(i==4){
				dPentPos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpPentPos1Frets[j]+=6;
			}
			else if(i==6){
				ePentPos1Frets[j]+=7;
			}
			else if(i==7){
				fPentPos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpPentPos1Frets[j]-=3;
			}
			else if(i==9){
				gPentPos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpPentPos1Frets[j]-=1;
			}
		
		}
		for(var j=0;j<aOctPos1Frets.length;j++){
			if(i==0){
				aSharpOctPos1Frets[j]+=1;
			}
			else if(i==1){
				bOctPos1Frets[j]+=2;
			}
			else if(i==2){
				cOctPos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpOctPos1Frets[j]+=4;
			}
			else if(i==4){
				dOctPos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpOctPos1Frets[j]+=6;
			}
			else if(i==6){
				eOctPos1Frets[j]+=7;
			}
			else if(i==7){
				fOctPos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpOctPos1Frets[j]-=3;
			}
			else if(i==9){
				gOctPos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpOctPos1Frets[j]-=1;
			}

		}
		for(var j=0;j<aWholePos1Frets.length;j++){
			
			if(i==0){
				aSharpWholePos1Frets[j]+=1;
			}
			else if(i==1){
				bWholePos1Frets[j]+=2;
			}
			else if(i==2){
				cWholePos1Frets[j]+=3;
			}
			else if(i==3){
				cSharpWholePos1Frets[j]+=4;
			}
			else if(i==4){
				dWholePos1Frets[j]+=5;
			}
			else if(i==5){
				dSharpWholePos1Frets[j]+=6;
			}
			else if(i==6){
				eWholePos1Frets[j]+=7;
			}
			else if(i==7){
				fWholePos1Frets[j]+=8;
			}
			else if(i==8){
				fSharpWholePos1Frets[j]-=3;
			}
			else if(i==9){
				gWholePos1Frets[j]-=2;	
			}
			else if(i==10){
				gSharpWholePos1Frets[j]-=1;
			}
		
		}
		
	}
}
function keySelect(e){
    key = e;
	scaleSelector();
}
function accidentalSelect(e){
    accidental = e;
	scaleSelector();
}
function scaleSelect(e){
    scale = e;
	scaleSelector();
}
function positionSelect(e){
    position = e;
	scaleSelector();
}
function scaleSelector(){
	if(key == "a" && accidental=="n" && scale=="maj"){
		aMajPos1Scale();
	}
	else if(key == "a" && accidental=="n" && scale=="hMin"){
		aHMinPos1Scale();
	}
	else if(key == "a" && accidental=="n" && scale=="mMin"){
		aMMinPos1Scale();
	}
	else if (key=="a" && accidental=="n" && scale=="pent"){
        aPentPos1Scale();
    }
	else if (key=="a" && accidental=="n" && scale=="oct"){
        aOctPos1Scale();
    }
	else if (key=="a" && accidental=="n" && scale=="whole"){
        aWholePos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="maj"){
        aSharpMajPos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="hMin"){
        aSharpHMinPos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="mMin"){
        aSharpMMinPos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="pent"){
        aSharpPentPos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="oct"){
        aSharpOctPos1Scale();
    }
	else if (((key=="a" && accidental=="sharp")||(key=="b" && accidental=="flat")) && scale=="whole"){
        aSharpWholePos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="maj"){
         gSharpMajPos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="hMin"){
         gSharpHMinPos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="mMin"){
         gSharpMMinPos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="pent"){
         gSharpPentPos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="oct"){
         gSharpOctPos1Scale();
    }
	else if (((key=="a" && accidental=="flat")||(key=="g" && accidental=="sharp")) && scale=="whole"){
         gSharpWholePos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="maj"){
         bMajPos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="hMin"){
         bHMinPos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="mMin"){
         bMMinPos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="pent"){
         bPentPos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="oct"){
         bOctPos1Scale();
    }
	else if (((key=="b" && accidental=="n")||(key=="c" && accidental=="flat")) && scale=="whole"){
         bWholePos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="maj"){
         cMajPos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="hMin"){
         cHMinPos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="mMin"){
         cMMinPos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="pent"){
         cPentPos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="oct"){
         cOctPos1Scale();
    }
	else if (((key=="c" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="whole"){
         cWholePos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="maj"){
         cSharpMajPos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="hMin"){
         cSharpHMinPos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="mMin"){
         cSharpMMinPos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="pent"){
         cSharpPentPos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="oct"){
         cSharpOctPos1Scale();
    }
	else if (((key=="c" && accidental=="sharp")||(key=="d" && accidental=="flat")) && scale=="whole"){
         cSharpWholePos1Scale();
    }
	else if (key == "d" && accidental=="n" && scale=="maj"){
		dMajPos1Scale();
	}
	else if (key == "d" && accidental=="n" && scale=="hMin"){
		dHMinPos1Scale();
	}
	else if (key == "d" && accidental=="n" && scale=="mMin"){
		dMMinPos1Scale();
	}
	else if (key=="d" && accidental=="n" && scale=="pent"){
        dPentPos1Scale();
    }
	else if (key=="d" && accidental=="n" && scale=="oct"){
        dOctPos1Scale();
    }
	else if (key=="d" && accidental=="n" && scale=="whole"){
        dWholePos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="maj"){
         dSharpMajPos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="hMin"){
         dSharpHMinPos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="mMin"){
         dSharpMMinPos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="pent"){
         dSharpPentPos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="oct"){
         dSharpOctPos1Scale();
    }
	else if (((key=="d" && accidental=="sharp")||(key=="e" && accidental=="flat")) && scale=="whole"){
         dSharpWholePos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="maj"){
         eMajPos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="hMin"){
         eHMinPos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="mMin"){
         eMMinPos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="pent"){
         ePentPos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="oct"){
         eOctPos1Scale();
    }
	else if (((key=="e" && accidental=="n")||(key=="f" && accidental=="flat")) && scale=="whole"){
         eWholePos1Scale();
    }
	else if (((key=="f" && accidental=="n")||(key=="b" && accidental=="sharp")) && scale=="maj"){
		fMajPos1Scale();
	}
	else if (((key=="f" && accidental=="n")||(key=="e" && accidental=="sharp")) && scale=="hMin"){
		fHMinPos1Scale();
	}
	else if (((key=="f" && accidental=="n")||(key=="e" && accidental=="sharp")) && scale=="mMin"){
		fMMinPos1Scale();
	}
	else if (((key=="f" && accidental=="n")||(key=="e" && accidental=="sharp")) && scale=="pent"){
        fPentPos1Scale();
    }
	else if (((key=="f" && accidental=="n")||(key=="e" && accidental=="sharp")) && scale=="oct"){
        fOctPos1Scale();
    }
	else if (((key=="f" && accidental=="n")||(key=="e" && accidental=="sharp")) && scale=="whole"){
        fWholePos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="maj"){
         fSharpMajPos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="hMin"){
         fSharpHMinPos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="mMin"){
         fSharpMMinPos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="pent"){
         fSharpPentPos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="oct"){
         fSharpOctPos1Scale();
    }
	else if (((key=="f" && accidental=="sharp")||(key=="g" && accidental=="flat")) && scale=="whole"){
         fSharpWholePos1Scale();
    }
	else if (key == "g" && accidental=="n" && scale=="maj"){
		gMajPos1Scale();
	}
	else if (key == "g" && accidental=="n" && scale=="hMin"){
		gHMinPos1Scale();
	}
	else if (key == "g" && accidental=="n" && scale=="mMin"){
		gMMinPos1Scale();
	}
	else if (key=="g" && accidental=="n" && scale=="pent"){
        gPentPos1Scale();
    }
	else if (key=="g" && accidental=="n" && scale=="oct"){
        gOctPos1Scale();
    }
	else if (key=="g" && accidental=="n" && scale=="whole"){
        gWholePos1Scale();
    }
}
function use_stream(stream)
{
	var audio_context = new AudioContext();
	var microphone = audio_context.createMediaStreamSource(stream);
	window.source = microphone; // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=934512
	var script_processor = audio_context.createScriptProcessor(1024, 1, 1);

	script_processor.connect(audio_context.destination);
	microphone.connect(script_processor);

	var buffer = [];
	var sample_length_milliseconds = 100;
	var recording = true;

	// Need to leak this function into the global namespace so it doesn't get
	// prematurely garbage-collected.
	// http://lists.w3.org/Archives/Public/public-audio/2013JanMar/0304.html
	window.capture_audio = function(event)
	{
		if (!recording)
			return;

		buffer = buffer.concat(Array.prototype.slice.call(event.inputBuffer.getChannelData(0)));

		// Stop recording after sample_length_milliseconds.
		if (buffer.length > sample_length_milliseconds * audio_context.sampleRate / 1000)
		{
			recording = false;

			correlation_worker.postMessage
			(
				{
					"timeseries": buffer,
					"test_frequencies": test_frequencies,
					"sample_rate": audio_context.sampleRate
				}
			);

			buffer = [];
			setTimeout(function() { recording = true; }, 250);
		}
        
	};

	script_processor.onaudioprocess = window.capture_audio;
}

function interpret_correlation_result(event)
{
	var timeseries = event.data.timeseries;
	var frequency_amplitudes = event.data.frequency_amplitudes;

	// Compute the (squared) magnitudes of the complex amplitudes for each
	// test frequency.
	var magnitudes = frequency_amplitudes.map(function(z) { return z[0] * z[0] + z[1] * z[1]; });

	// Find the maximum in the list of magnitudes.
	var maximum_index = -1;
	var maximum_magnitude = 0;
	for (var i = 0; i < magnitudes.length; i++)
	{
		if (magnitudes[i] <= maximum_magnitude)
			continue;

		maximum_index = i;
		maximum_magnitude = magnitudes[i];
	}

	// Compute the average magnitude. We'll only pay attention to frequencies
	// with magnitudes significantly above average.
	var average = magnitudes.reduce(function(a, b) { return a + b; }, 0) / magnitudes.length;
	var confidence = maximum_magnitude / average;
	var confidence_threshold = 10; // empirical, arbitrary.
	if (confidence > confidence_threshold)
	{
		var dominant_frequency = test_frequencies[maximum_index];
		document.getElementById("note-name").textContent = dominant_frequency.name;
		document.getElementById("frequency").textContent = dominant_frequency.frequency;
        //somehow need to check here!!!!!
        if(scaleNum == 0){
			if(dominant_frequency.name == aMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 1){
			if(dominant_frequency.name == aHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 2){
			if(dominant_frequency.name == aMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 3){
            if(dominant_frequency.name == aPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 4){
            if(dominant_frequency.name == aOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 5){
            if(dominant_frequency.name == aWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        } 
		else if(scaleNum == 6){
			if(dominant_frequency.name == aSharpMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 7){
			if(dominant_frequency.name == aSharpHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 8){
			if(dominant_frequency.name == aSharpMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 9){
            if(dominant_frequency.name == aSharpPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 10){
            if(dominant_frequency.name == aSharpOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 11){
            if(dominant_frequency.name == aSharpWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 12){
			if(dominant_frequency.name == bMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 13){
			if(dominant_frequency.name == bHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 14){
			if(dominant_frequency.name == bMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 15){
            if(dominant_frequency.name == bPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 16){
            if(dominant_frequency.name == bOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 17){
            if(dominant_frequency.name == bWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 18){
			if(dominant_frequency.name == cMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 19){
			if(dominant_frequency.name == cHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 20){
			if(dominant_frequency.name == cMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 21){
            if(dominant_frequency.name == cPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 22){
            if(dominant_frequency.name == cOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 23){
            if(dominant_frequency.name == cWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 24){
			if(dominant_frequency.name == cSharpMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 25){
			if(dominant_frequency.name == cSharpHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 26){
			if(dominant_frequency.name == cSharpMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 27){
            if(dominant_frequency.name == cSharpPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 28){
            if(dominant_frequency.name == cSharpOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 29){
            if(dominant_frequency.name == cSharpWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 30){
			if(dominant_frequency.name == dMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 31){
			if(dominant_frequency.name == dHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 32){
			if(dominant_frequency.name == dMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 33){
            if(dominant_frequency.name == dPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 34){
            if(dominant_frequency.name == dOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 35){
            if(dominant_frequency.name == dWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 36){
			if(dominant_frequency.name == dSharpMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 37){
			if(dominant_frequency.name == dSharpHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 38){
			if(dominant_frequency.name == dSharpMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 39){
            if(dominant_frequency.name == dSharpPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 40){
            if(dominant_frequency.name == dSharpOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 41){
            if(dominant_frequency.name == dSharpWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 42){
			if(dominant_frequency.name == eMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 43){
			if(dominant_frequency.name == eHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 44){
			if(dominant_frequency.name == eMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 45){
            if(dominant_frequency.name == ePentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 46){
            if(dominant_frequency.name == eOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 47){
            if(dominant_frequency.name == eWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 48){
			if(dominant_frequency.name == fMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 49){
			if(dominant_frequency.name == fHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 50){
			if(dominant_frequency.name == fMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 51){
            if(dominant_frequency.name == fPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 52){
            if(dominant_frequency.name == fOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 53){
            if(dominant_frequency.name == fWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 54){
			if(dominant_frequency.name == fSharpMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 55){
			if(dominant_frequency.name == fSharpHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 56){
			if(dominant_frequency.name == fSharpMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 57){
            if(dominant_frequency.name == fSharpPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 58){
            if(dominant_frequency.name == fSharpOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 59){
            if(dominant_frequency.name == fSharpWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 60){
			if(dominant_frequency.name == gMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 61){
			if(dominant_frequency.name == gHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 62){
			if(dominant_frequency.name == gMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 63){
            if(dominant_frequency.name == gPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 64){
            if(dominant_frequency.name == gOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 65){
            if(dominant_frequency.name == gWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 66){
			if(dominant_frequency.name == gSharpMajPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 67){
			if(dominant_frequency.name == gSharpHMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 68){
			if(dominant_frequency.name == gSharpMMinPos1Notes[scaleIndex]){
                toNextNote(); 
            }
		}
		else if(scaleNum == 69){
            if(dominant_frequency.name == gSharpPentPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 70){
            if(dominant_frequency.name == gSharpOctPos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
		else if(scaleNum == 71){
            if(dominant_frequency.name == gSharpWholePos1Notes[scaleIndex]){
                toNextNote(); 
            }
        }
	}
    
}

// Unnecessary addition of button to play an E note.
var note_context = new AudioContext();
var note_node = note_context.createOscillator();
var gain_node = note_context.createGain();
note_node.frequency = C2 * Math.pow(2, 4 / 12); // E, ~82.41 Hz.
gain_node.gain.value = 0;
note_node.connect(gain_node);
gain_node.connect(note_context.destination);
note_node.start();

/*var playing = false;
function toggle_playing_note()
{
	playing = !playing;
	if (playing)
		gain_node.gain.value = 0.1;
	else
		gain_node.gain.value = 0;
}*/
function drawBase(){
    canvas.clearRect(0,0,2000,2000);
	canvas.fillStyle="gray";
	canvas.font="20px Arial";
	canvas.fillRect(45,300,2000,12);
	canvas.fillRect(45,255,2000,10);
	canvas.fillRect(45,205,2000,8);
	canvas.fillRect(45,155,2000,6);
	canvas.fillRect(45,105,2000,4);
	canvas.fillRect(45,55,2000,2);
    canvas.fillText("E",10,312);
	canvas.fillText("A",10,265);
	canvas.fillText("D",10,215);
	canvas.fillText("G",10,165);
	canvas.fillText("B",10,115);
	canvas.fillText("e",10,60);
    canvas.fillStyle="red";
    
    //canvas.fillRect(120,288,40,40);
    canvas.fillRect(250,55,6,257);
    //canvas.fillRect(360,242,40,40);
    //canvas.fillRect(600,190,40,40);
    //canvas.fillRect(840,138,40,40);
    //canvas.fillRect(1080,88,40,40);
   
    
}

function aMajPos1Scale(){
	document.getElementById("noteToPlay").textContent = aMajPos1Notes[0] + ", Fret " + aMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 0;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aHMinPos1Scale(){
	document.getElementById("noteToPlay").textContent = aHMinPos1Notes[0] + ", Fret " + aHMinPos1Frets[0] + " on String " + hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 1;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aMMinPos1Scale(){
	document.getElementById("noteToPlay").textContent = aMMinPos1Notes[0] + ", Fret " + aMMinPos1Frets[0] + " on String " + mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 2;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aPentPos1Scale(){
	document.getElementById("noteToPlay").textContent = aPentPos1Notes[0] + ", Fret " + aPentPos1Frets[0] + " on String " + pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 3;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aOctPos1Scale(){
	document.getElementById("noteToPlay").textContent = aOctPos1Notes[0] + ", Fret " + aOctPos1Frets[0] + " on String " + octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 4;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aWholePos1Scale(){
	document.getElementById("noteToPlay").textContent = aWholePos1Notes[0] + ", Fret " + aWholePos1Frets[0] + " on String " + wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 5;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}

function aSharpMajPos1Scale(){
	//6
	document.getElementById("noteToPlay").textContent = aSharpMajPos1Notes[0] + ", Fret " + aSharpMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 6;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aSharpHMinPos1Scale(){
	//7
	document.getElementById("noteToPlay").textContent = aSharpHMinPos1Notes[0] + ", Fret " + aSharpHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 7;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aSharpMMinPos1Scale(){
	//8
	document.getElementById("noteToPlay").textContent = aSharpMMinPos1Notes[0] + ", Fret " + aSharpMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 8;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function aSharpPentPos1Scale(){
	//9
	document.getElementById("noteToPlay").textContent = aSharpPentPos1Notes[0] + ", Fret " + aSharpPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 9;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function aSharpOctPos1Scale(){
//10
	document.getElementById("noteToPlay").textContent = aSharpOctPos1Notes[0] + ", Fret " + aSharpOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 10;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function aSharpWholePos1Scale(){
//11
	document.getElementById("noteToPlay").textContent = aSharpWholePos1Notes[0] + ", Fret " + aSharpWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 11;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < aSharpWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(aSharpWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function bMajPos1Scale(){
//12
	document.getElementById("noteToPlay").textContent = bMajPos1Notes[0] + ", Fret " + bMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 12;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }


}
function bHMinPos1Scale(){
	//13
	document.getElementById("noteToPlay").textContent = bHMinPos1Notes[0] + ", Fret " + bHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 13;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function bMMinPos1Scale(){
//14
	document.getElementById("noteToPlay").textContent = bMMinPos1Notes[0] + ", Fret " + bMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 14;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function bPentPos1Scale(){
//15
	document.getElementById("noteToPlay").textContent = bPentPos1Notes[0] + ", Fret " + bPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 15;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function bOctPos1Scale(){
//16
	document.getElementById("noteToPlay").textContent = bOctPos1Notes[0] + ", Fret " + bOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 16;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function bWholePos1Scale(){
//17
	document.getElementById("noteToPlay").textContent = bWholePos1Notes[0] + ", Fret " + bWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 17;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < bWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(bWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}

function cMajPos1Scale(){
//18
	document.getElementById("noteToPlay").textContent = cMajPos1Notes[0] + ", Fret " + cMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 18;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cHMinPos1Scale(){
//19
	document.getElementById("noteToPlay").textContent = cHMinPos1Notes[0] + ", Fret " + cHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 19;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function cMMinPos1Scale(){
//20
	document.getElementById("noteToPlay").textContent = cMMinPos1Notes[0] + ", Fret " + cMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 20;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cPentPos1Scale(){
//21
	document.getElementById("noteToPlay").textContent = cPentPos1Notes[0] + ", Fret " + cPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 21;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function cOctPos1Scale(){
//22
	document.getElementById("noteToPlay").textContent = cOctPos1Notes[0] + ", Fret " + cOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 22;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function cWholePos1Scale(){
//23
	document.getElementById("noteToPlay").textContent = cWholePos1Notes[0] + ", Fret " + cWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 23;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}

function cSharpMajPos1Scale(){
//24
	document.getElementById("noteToPlay").textContent = cSharpMajPos1Notes[0] + ", Fret " + cSharpMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 24;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function cSharpHMinPos1Scale(){
//25
	document.getElementById("noteToPlay").textContent = cSharpHMinPos1Notes[0] + ", Fret " + cSharpHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 25;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cSharpMMinPos1Scale(){
//26
	document.getElementById("noteToPlay").textContent = cSharpMMinPos1Notes[0] + ", Fret " + cSharpMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 26;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cSharpPentPos1Scale(){
//27
	document.getElementById("noteToPlay").textContent = cSharpPentPos1Notes[0] + ", Fret " + cSharpPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 27;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cSharpOctPos1Scale(){
//28
	document.getElementById("noteToPlay").textContent = cSharpOctPos1Notes[0] + ", Fret " + cSharpOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 28;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function cSharpWholePos1Scale(){
//29
	document.getElementById("noteToPlay").textContent = cSharpWholePos1Notes[0] + ", Fret " + cSharpWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 29;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < cSharpWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(cSharpWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function dMajPos1Scale(){
//30
	document.getElementById("noteToPlay").textContent = dMajPos1Notes[0] + ", Fret " + dMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 30;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function dHMinPos1Scale(){
//31
	document.getElementById("noteToPlay").textContent = dHMinPos1Notes[0] + ", Fret " + dHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 31;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }


}
function dMMinPos1Scale(){
//32
	document.getElementById("noteToPlay").textContent = dMMinPos1Notes[0] + ", Fret " + dMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 32;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function dPentPos1Scale(){
//33
	document.getElementById("noteToPlay").textContent = dPentPos1Notes[0] + ", Fret " + dPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 33;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function dOctPos1Scale(){
//34
	document.getElementById("noteToPlay").textContent = dOctPos1Notes[0] + ", Fret " + dOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 34;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function dWholePos1Scale(){
//35
	document.getElementById("noteToPlay").textContent = dWholePos1Notes[0] + ", Fret " + dWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 35;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function dSharpMajPos1Scale(){
//36
	document.getElementById("noteToPlay").textContent = dSharpMajPos1Notes[0] + ", Fret " + dSharpMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 36;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function dSharpHMinPos1Scale(){
//37
	document.getElementById("noteToPlay").textContent = dSharpHMinPos1Notes[0] + ", Fret " + dSharpHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 37;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function dSharpMMinPos1Scale(){
//38
	document.getElementById("noteToPlay").textContent = dSharpMMinPos1Notes[0] + ", Fret " + dSharpMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 38;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function dSharpPentPos1Scale(){
//39
	document.getElementById("noteToPlay").textContent = dSharpPentPos1Notes[0] + ", Fret " + dSharpPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 39;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function dSharpOctPos1Scale(){
//40
document.getElementById("noteToPlay").textContent = dSharpOctPos1Notes[0] + ", Fret " + dSharpOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 40;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }	
}
function dSharpWholePos1Scale(){
//41
document.getElementById("noteToPlay").textContent = dSharpWholePos1Notes[0] + ", Fret " + dSharpWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 41;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < dSharpWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(dSharpWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
	
}

function eMajPos1Scale(){
//42
	document.getElementById("noteToPlay").textContent = eMajPos1Notes[0] + ", Fret " + eMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 42;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < eMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function eHMinPos1Scale(){
//43
	document.getElementById("noteToPlay").textContent = eHMinPos1Notes[0] + ", Fret " + eHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 43;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < eHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function eMMinPos1Scale(){
//44
	document.getElementById("noteToPlay").textContent = eMMinPos1Notes[0] + ", Fret " + eMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 44;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < eMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
	
}
function ePentPos1Scale(){
//45
	document.getElementById("noteToPlay").textContent = ePentPos1Notes[0] + ", Fret " + ePentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 45;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < ePentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(ePentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function eOctPos1Scale(){
//46
	document.getElementById("noteToPlay").textContent = eOctPos1Notes[0] + ", Fret " + eOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 46;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < eOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
	
}
function eWholePos1Scale(){
//47
	document.getElementById("noteToPlay").textContent = eWholePos1Notes[0] + ", Fret " + eWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 47;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < eWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(eWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function fMajPos1Scale(){
//48
	document.getElementById("noteToPlay").textContent = fMajPos1Notes[0] + ", Fret " + fMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 48;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function fHMinPos1Scale(){
//49
	document.getElementById("noteToPlay").textContent = fHMinPos1Notes[0] + ", Fret " + fHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 49;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function fMMinPos1Scale(){
//50
document.getElementById("noteToPlay").textContent = fMMinPos1Notes[0] + ", Fret " + fMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 50;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

	
}
function fPentPos1Scale(){
//51
	document.getElementById("noteToPlay").textContent = fPentPos1Notes[0] + ", Fret " + fPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 51;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function fOctPos1Scale(){
//52
	document.getElementById("noteToPlay").textContent = fOctPos1Notes[0] + ", Fret " + fOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 52;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function fWholePos1Scale(){
//53
	document.getElementById("noteToPlay").textContent = fWholePos1Notes[0] + ", Fret " + fWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 53;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function fSharpMajPos1Scale(){
//54
	document.getElementById("noteToPlay").textContent = fSharpMajPos1Notes[0] + ", Fret " + fSharpMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 54;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function fSharpHMinPos1Scale(){
//55
	document.getElementById("noteToPlay").textContent = fSharpHMinPos1Notes[0] + ", Fret " + fSharpHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 55;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function fSharpMMinPos1Scale(){
//56
	document.getElementById("noteToPlay").textContent = fSharpMMinPos1Notes[0] + ", Fret " + fSharpMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 56;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function fSharpPentPos1Scale(){
//57
document.getElementById("noteToPlay").textContent = fSharpPentPos1Notes[0] + ", Fret " + fSharpPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 57;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }	
}
function fSharpOctPos1Scale(){
//58
	document.getElementById("noteToPlay").textContent = fSharpOctPos1Notes[0] + ", Fret " + fSharpOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 58;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function fSharpWholePos1Scale(){
//59
	document.getElementById("noteToPlay").textContent = fSharpWholePos1Notes[0] + ", Fret " + fSharpWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 59;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < fSharpWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(fSharpWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function gMajPos1Scale(){
//60
	document.getElementById("noteToPlay").textContent = gMajPos1Notes[0] + ", Fret " + gMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 60;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gHMinPos1Scale(){
//61
	document.getElementById("noteToPlay").textContent = gHMinPos1Notes[0] + ", Fret " + gHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 61;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gMMinPos1Scale(){
//62
	document.getElementById("noteToPlay").textContent = gMMinPos1Notes[0] + ", Fret " + gMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 62;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gPentPos1Scale(){
//63
	document.getElementById("noteToPlay").textContent = gPentPos1Notes[0] + ", Fret " + gPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 63;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gOctPos1Scale(){
//64
	document.getElementById("noteToPlay").textContent = gOctPos1Notes[0] + ", Fret " + gOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 64;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gWholePos1Scale(){
//65
	document.getElementById("noteToPlay").textContent = gWholePos1Notes[0] + ", Fret " + gWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 65;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}

function gSharpMajPos1Scale(){
//66
	document.getElementById("noteToPlay").textContent = gSharpMajPos1Notes[0] + ", Fret " + gSharpMajPos1Frets[0] + " on String " 
		+ majPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 66;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpMajPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(majPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(majPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(majPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(majPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(majPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(majPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMajPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }

}
function gSharpHMinPos1Scale(){
//67
	document.getElementById("noteToPlay").textContent = gSharpHMinPos1Notes[0] + ", Fret " + gSharpHMinPos1Frets[0] + " on String " 
		+ hMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 67;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpHMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(hMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(hMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(hMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(hMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(hMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(hMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpHMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gSharpMMinPos1Scale(){
//68
	document.getElementById("noteToPlay").textContent = gSharpMMinPos1Notes[0] + ", Fret " + gSharpMMinPos1Frets[0] + " on String " 
		+ mMinPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 68;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpMMinPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(mMinPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(mMinPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(mMinPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(mMinPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(mMinPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(mMinPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpMMinPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gSharpPentPos1Scale(){
//69
	document.getElementById("noteToPlay").textContent = gSharpPentPos1Notes[0] + ", Fret " + gSharpPentPos1Frets[0] + " on String " 
		+ pentPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 69;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpPentPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(pentPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(pentPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(pentPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(pentPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(pentPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(pentPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpPentPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gSharpOctPos1Scale(){
//70
	document.getElementById("noteToPlay").textContent = gSharpOctPos1Notes[0] + ", Fret " + gSharpOctPos1Frets[0] + " on String " 
		+ octPos1Strings[0];
    scaleIndex = 0;
    scaleNum = 70;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpOctPos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(octPos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(octPos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(octPos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(octPos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(octPos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(octPos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpOctPos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }
}
function gSharpWholePos1Scale(){
//71
document.getElementById("noteToPlay").textContent = gSharpWholePos1Notes[0] + ", Fret " + gSharpWholePos1Frets[0] + " on String " 
		+ wholePos1Strings[0];
    scaleIndex = 0;
    scaleNum = 71;
    //something about a for loop that gets all the values for each note and draws the thing based on that...
    drawBase();
    for(var i = 0;i < gSharpWholePos1Notes.length;i++){
        canvas.fillStyle="#33ccff";
        if(wholePos1Strings[i]==1){
            canvas.fillRect(slots[i+1],strings[0],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[0]+20);
        }
        else if(wholePos1Strings[i]==2){
            canvas.fillRect(slots[i+1],strings[1],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[1]+20);
        }
        else if(wholePos1Strings[i]==3){
            canvas.fillRect(slots[i+1],strings[2],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[2]+20);
        }
        else if(wholePos1Strings[i]==4){
            canvas.fillRect(slots[i+1],strings[3],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[3]+20);
        }
        else if(wholePos1Strings[i]==5){
            canvas.fillRect(slots[i+1],strings[4],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[4]+20);
        }
        else if(wholePos1Strings[i]==6){
            canvas.fillRect(slots[i+1],strings[5],40,40);
            canvas.fillStyle="white";
            canvas.fillText(gSharpWholePos1Frets[i],slots[i+1],strings[5]+20);
            
        }
    }	
}

function toNextNote(){
    scaleIndex++;
	if(scaleNum == 0){
        if(scaleIndex<aMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aMajPos1Notes[scaleIndex] + ", Fret " 
				+ aMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
	else if(scaleNum == 1){
        if(scaleIndex<aHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aHMinPos1Notes[scaleIndex] + ", Fret " 
				+ aHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
	else if(scaleNum == 2){
        if(scaleIndex<aMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aMMinPos1Notes[scaleIndex] + ", Fret " 
				+ aMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
    else if(scaleNum == 3){
        if(scaleIndex<aPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aPentPos1Notes[scaleIndex] + ", Fret " + aPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
	else if(scaleNum == 4){
        if(scaleIndex<aOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aOctPos1Notes[scaleIndex] + ", Fret " 
				+ aOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
    else if(scaleNum == 5){
        if(scaleIndex<aWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = aWholePos1Notes[scaleIndex] + ", Fret " 
				+ aWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
	else if(scaleNum == 6){
		if(scaleIndex<aSharpMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpMajPos1Notes[scaleIndex] + ", Fret " 
				+ aSharpMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 7){
		if(scaleIndex<aSharpHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpHMinPos1Notes[scaleIndex] + ", Fret " 
				+ aSharpHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 8){
		if(scaleIndex<aSharpMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpMMinPos1Notes[scaleIndex] + ", Fret " 
				+ aSharpMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
	}
	else if(scaleNum == 9){
		if(scaleIndex<aSharpPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpPentPos1Notes[scaleIndex] + ", Fret " 
				+ aSharpPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 10){
		if(scaleIndex<aSharpOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpOctPos1Notes[scaleIndex] + ", Fret " 
				+ aSharpOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 11){
		if(scaleIndex<aSharpWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = aSharpWholePos1Notes[scaleIndex] + ", Fret " 
				+ aSharpWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < aSharpWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(aSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(aSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 12){
		if(scaleIndex<bMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = bMajPos1Notes[scaleIndex] + ", Fret " 
				+ bMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
        
    }
	else if(scaleNum == 13){
		if(scaleIndex<bHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = bHMinPos1Notes[scaleIndex] + ", Fret " 
				+ bHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 14){
		if(scaleIndex<bMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = bMMinPos1Notes[scaleIndex] + ", Fret " 
				+ bMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 15){
		if(scaleIndex<bPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = bPentPos1Notes[scaleIndex] + ", Fret " 
				+ bPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 16){
		if(scaleIndex<bOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = bOctPos1Notes[scaleIndex] + ", Fret " 
				+ bOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 17){
		if(scaleIndex<bWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = bWholePos1Notes[scaleIndex] + ", Fret " 
				+ bWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < bWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(bWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(bWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 18){
		
if(scaleIndex<cMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cMajPos1Notes[scaleIndex] + ", Fret " 
				+ cMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 19){
		if(scaleIndex<cHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cHMinPos1Notes[scaleIndex] + ", Fret " 
				+ cHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 20){
		if(scaleIndex<cMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cMMinPos1Notes[scaleIndex] + ", Fret " 
				+ cMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 21){
		if(scaleIndex<cPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cPentPos1Notes[scaleIndex] + ", Fret " 
				+ cPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 22){
		if(scaleIndex<cOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cOctPos1Notes[scaleIndex] + ", Fret " 
				+ cOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 23){
		if(scaleIndex<cWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = cWholePos1Notes[scaleIndex] + ", Fret " 
				+ cWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 24){
		if(scaleIndex<cSharpMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpMajPos1Notes[scaleIndex] + ", Fret " 
				+ cSharpMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 25){
		if(scaleIndex<cSharpHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpHMinPos1Notes[scaleIndex] + ", Fret " 
				+ cSharpHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 26){
		if(scaleIndex<cSharpMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpMMinPos1Notes[scaleIndex] + ", Fret " 
				+ cSharpMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 27){
		if(scaleIndex<cSharpPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpPentPos1Notes[scaleIndex] + ", Fret " 
				+ cSharpPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 28){
		if(scaleIndex<cSharpOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpOctPos1Notes[scaleIndex] + ", Fret " 
				+ cSharpOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 29){
		if(scaleIndex<cSharpWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = cSharpWholePos1Notes[scaleIndex] + ", Fret " 
				+ cSharpWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < cSharpWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(cSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(cSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 30){
		if(scaleIndex<dMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dMajPos1Notes[scaleIndex] + ", Fret " 
				+ dMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }



	}
	else if(scaleNum == 31){
		if(scaleIndex<dHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dHMinPos1Notes[scaleIndex] + ", Fret " 
				+ dHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 32){
		if(scaleIndex<dMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dMMinPos1Notes[scaleIndex] + ", Fret " 
				+ dMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 33){
		if(scaleIndex<dPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dPentPos1Notes[scaleIndex] + ", Fret " 
				+ dPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 34){
		if(scaleIndex<dOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dOctPos1Notes[scaleIndex] + ", Fret " 
				+ dOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 35){
		if(scaleIndex<dWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = dWholePos1Notes[scaleIndex] + ", Fret " 
				+ dWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }


	}
	else if(scaleNum == 36){
		if(scaleIndex<dSharpMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpMajPos1Notes[scaleIndex] + ", Fret " 
				+ dSharpMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 37){
		if(scaleIndex<dSharpHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpHMinPos1Notes[scaleIndex] + ", Fret " 
				+ dSharpHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 38){
	if(scaleIndex<dSharpMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpMMinPos1Notes[scaleIndex] + ", Fret " 
				+ dSharpMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }	
	}
	else if(scaleNum == 39){
	if(scaleIndex<dSharpPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpPentPos1Notes[scaleIndex] + ", Fret " 
				+ dSharpPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }	
	}
	else if(scaleNum == 40){
		if(scaleIndex<dSharpOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpOctPos1Notes[scaleIndex] + ", Fret " 
				+ dSharpOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 41){
		if(scaleIndex<dSharpWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = dSharpWholePos1Notes[scaleIndex] + ", Fret " 
				+ dSharpWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < dSharpWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(dSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(dSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 42){
		if(scaleIndex<eMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = eMajPos1Notes[scaleIndex] + ", Fret " 
				+ eMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < eMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 43){
		if(scaleIndex<eHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = eHMinPos1Notes[scaleIndex] + ", Fret " 
				+ eHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < eHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 44){
		if(scaleIndex<eMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = eMMinPos1Notes[scaleIndex] + ", Fret " 
				+ eMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < eMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 45){
		if(scaleIndex<ePentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = ePentPos1Notes[scaleIndex] + ", Fret " 
				+ ePentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < ePentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(ePentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(ePentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 46){
		if(scaleIndex<eOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = eOctPos1Notes[scaleIndex] + ", Fret " 
				+ eOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < eOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 47){
		if(scaleIndex<eWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = eWholePos1Notes[scaleIndex] + ", Fret " 
				+ eWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < eWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(eWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(eWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }


	}
	else if(scaleNum == 48){
		if(scaleIndex<fMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fMajPos1Notes[scaleIndex] + ", Fret " 
				+ fMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 49){
		if(scaleIndex<fHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fHMinPos1Notes[scaleIndex] + ", Fret " 
				+ fHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 50){
		if(scaleIndex<fMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fMMinPos1Notes[scaleIndex] + ", Fret " 
				+ fMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 51){
		if(scaleIndex<fPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fPentPos1Notes[scaleIndex] + ", Fret " 
				+ fPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 52){
		if(scaleIndex<fOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fOctPos1Notes[scaleIndex] + ", Fret " 
				+ fOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 53){
		if(scaleIndex<fWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = fWholePos1Notes[scaleIndex] + ", Fret " 
				+ fWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }


	}
	else if(scaleNum == 54){
		if(scaleIndex<fSharpMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpMajPos1Notes[scaleIndex] + ", Fret " 
				+ fSharpMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 55){
		if(scaleIndex<fSharpHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpHMinPos1Notes[scaleIndex] + ", Fret " 
				+ fSharpHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 56){
		if(scaleIndex<fSharpMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpMMinPos1Notes[scaleIndex] + ", Fret " 
				+ fSharpMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 57){
		if(scaleIndex<fSharpPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpPentPos1Notes[scaleIndex] + ", Fret " 
				+ fSharpPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 58){
		if(scaleIndex<fSharpOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpOctPos1Notes[scaleIndex] + ", Fret " 
				+ fSharpOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 59){
		if(scaleIndex<fSharpWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = fSharpWholePos1Notes[scaleIndex] + ", Fret " 
				+ fSharpWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < fSharpWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(fSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(fSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 60){
		if(scaleIndex<gMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gMajPos1Notes[scaleIndex] + ", Fret " 
				+ gMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 61){
		if(scaleIndex<gHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gHMinPos1Notes[scaleIndex] + ", Fret " 
				+ gHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 62){
		if(scaleIndex<gMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gMMinPos1Notes[scaleIndex] + ", Fret " 
				+ gMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 63){
		if(scaleIndex<gPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gPentPos1Notes[scaleIndex] + ", Fret " 
				+ gPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 64){
	if(scaleIndex<gOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gOctPos1Notes[scaleIndex] + ", Fret " 
				+ gOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }	
	}
	else if(scaleNum == 65){
		if(scaleIndex<gWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = gWholePos1Notes[scaleIndex] + ", Fret " 
				+ gWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }


	}
	else if(scaleNum == 66){
		if(scaleIndex<gSharpMajPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpMajPos1Notes[scaleIndex] + ", Fret " 
				+ gSharpMajPos1Frets[scaleIndex] 
				+ " on String " + majPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpMajPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(majPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(majPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMajPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(majPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(majPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMajPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 67){
		if(scaleIndex<gSharpHMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpHMinPos1Notes[scaleIndex] + ", Fret " 
				+ gSharpHMinPos1Frets[scaleIndex] 
				+ " on String " + hMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpHMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(hMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(hMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpHMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(hMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(hMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpHMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 68){
		if(scaleIndex<gSharpMMinPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpMMinPos1Notes[scaleIndex] + ", Fret " 
				+ gSharpMMinPos1Frets[scaleIndex] 
				+ " on String " + mMinPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpMMinPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(mMinPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(mMinPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpMMinPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(mMinPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(mMinPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpMMinPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 69){
		if(scaleIndex<gSharpPentPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpPentPos1Notes[scaleIndex] + ", Fret " 
				+ gSharpPentPos1Frets[scaleIndex] 
				+ " on String " + pentPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpPentPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(pentPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(pentPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpPentPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(pentPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(pentPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpPentPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	else if(scaleNum == 70){
		if(scaleIndex<gSharpOctPos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpOctPos1Notes[scaleIndex] + ", Fret " 
				+ gSharpOctPos1Frets[scaleIndex] 
				+ " on String " + octPos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpOctPos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(octPos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(octPos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpOctPos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(octPos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(octPos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpOctPos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }

	}
	else if(scaleNum == 71){
		if(scaleIndex<gSharpWholePos1Notes.length){
            document.getElementById("noteToPlay").textContent = gSharpWholePos1Notes[scaleIndex] + ", Fret " 
				+ gSharpWholePos1Frets[scaleIndex] 
				+ " on String " + wholePos1Strings[scaleIndex];
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            for(var i = 0;i < gSharpWholePos1Notes.length;i++){
                canvas.fillStyle="#33ccff";
                if(wholePos1Strings[i+scaleIndex]==1){
                    canvas.fillRect(slots[i+1],strings[0],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[0]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==2){
                    canvas.fillRect(slots[i+1],strings[1],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[1]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==3){
                    canvas.fillRect(slots[i+1],strings[2],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[2]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==4){
                    canvas.fillRect(slots[i+1],strings[3],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[3]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==5){
                    canvas.fillRect(slots[i+1],strings[4],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[4]+20);
                }
                else if(wholePos1Strings[i+scaleIndex]==6){
                    canvas.fillRect(slots[i+1],strings[5],40,40);
                    canvas.fillStyle="white";
                    canvas.fillText(gSharpWholePos1Frets[i+scaleIndex],slots[i+1],strings[5]+20);
                }
            }
        }
        else{
            document.getElementById("noteToPlay").textContent = "Finished!";
            drawBase();
            canvas.fillStyle = "lightgreen";
            if(wholePos1Strings[scaleIndex-1]==1){
                canvas.fillRect(slots[0],strings[0],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[0]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==2){
                canvas.fillRect(slots[0],strings[1],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[1]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==3){
                canvas.fillRect(slots[0],strings[2],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[2]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==4){
                canvas.fillRect(slots[0],strings[3],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[3]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==5){
                canvas.fillRect(slots[0],strings[4],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[4]+20);
            }
            else if(wholePos1Strings[scaleIndex-1]==6){
                canvas.fillRect(slots[0],strings[5],40,40);
                canvas.fillStyle="white";
                canvas.fillText(gSharpWholePos1Frets[scaleIndex-1],slots[0],strings[5]+20);
            }
            scaleNum = -1;
            scale = "";
            //position = "";
            key = "";
            
        }
	}
	
    
}