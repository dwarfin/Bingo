var score = 0;
var sel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
var nums = ["num", "num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10", "num11", "num12", "num13", "num14", "num15", "num16", "num17", "num18", "num19", "num20", "num21", "num22", "num23", "num24"];

// Chat-gpt generated code
const noteTextarea = document.getElementById("note-textarea");
const noteAddButton = document.getElementById("note-add-button");
const noteCollapseButton = document.getElementById("note-collapse-button");
const noteCopyButton = document.getElementById("note-copy-button");
const noteList = document.getElementById("note-list");
const notes = [];


// Read notes from cookie and render on page
const storedNotes = getNotesFromCookie();
if (storedNotes) {
  notes.push(...storedNotes);
  renderNotes();
}

noteAddButton.addEventListener("click", () => {
  const noteText = noteTextarea.value.trim();
  if (noteText !== "") {
    notes.push(noteText);
    noteTextarea.value = "";
    setNotesCookie(notes); // Update the notes cookie
    renderNotes();
  }
});

noteCollapseButton.addEventListener("click", () => {
  noteTextarea.classList.toggle("collapsed");
  if (noteTextarea.classList.contains("collapsed")) {
    noteCollapseButton.innerText = "Expand";
  } else {
    noteCollapseButton.innerText = "Collapse";
  }
});

noteCopyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(notes.join("\n\n"));
});

function renderNotes() {
  noteList.innerHTML = "";
  notes.forEach((noteText) => {
    const noteElement = document.createElement("li");
    noteElement.innerText = noteText;
    noteList.appendChild(noteElement);
  });
}

// Cookie functions
function getNotesFromCookie() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("notes="));
  if (cookieValue) {
    const notesString = cookieValue.split("=")[1];
    return JSON.parse(notesString);
  } else {
    return null;
  }
}

function setNotesCookie(notes) {
  const notesString = JSON.stringify(notes);
  const cookieString = `notes=${notesString}`;
  document.cookie = cookieString;
}





// Add function

var score = getScoreFromCookie() || 0; // Read score from cookie or set to 0 if cookie is not present

const sumElement = document.getElementById("sum");
sumElement.innerHTML = score;

function getScoreFromCookie() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("score="));
  if (cookieValue) {
    return Number(cookieValue.split("=")[1]);
  } else {
    return null;
  }
}

function setScoreCookie() {
  const cookieString = `score=${score}`;
  document.cookie = cookieString;
}

// Add function
function add() {
    score += 1;
    sumElement.innerHTML = score;
    document.style.color = 'white';
    setScoreCookie(); // Update the score cookie
}

function subtract() {
    score -= 1;
    sumElement.innerHTML = score;
    setScoreCookie(); // Update the score cookie
}

function clr() {
    var counter = 0;
    for (let i of sel) {
        let elem = document.querySelector(`#${i}`);
        if (elem.classList.contains('hover')) {
            elem.classList.toggle('hover');
        };
        window[nums[counter]] = 0;
        counter += 1;
    }
    setScoreCookie(); // Update the score cookie
}

class ClassSwitch {
    constructor(letter, numbs) {
        this.letter = letter;
        this.numbs = numbs;
    }

    switcher() {
        const innerFunc = () => {
            window[nums[this.numbs]] += 1;
            let elem = document.getElementById(this.letter)
            if (window[nums[this.numbs]] % 2 === 0) {
                elem.classList.toggle('hover')
            } else {
                elem.classList.toggle('hover')
            }    
            setScoreCookie(); // Update the score cookie
        }
        innerFunc()
    }
}

function createObj(pLetter, pNumbs) {
    const object = new ClassSwitch(pLetter, pNumbs);
    return object;
}