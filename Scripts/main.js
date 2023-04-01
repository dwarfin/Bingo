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

noteAddButton.addEventListener("click", () => {
  const noteText = noteTextarea.value.trim();
  if (noteText !== "") {
    notes.push(noteText);
    noteTextarea.value = "";
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



// Add function

function add() {
    score += 1;
    document.getElementById('sum').innerHTML = score;
    document.style.color = 'white';
}

function subtract() {
    score -= 1;
    document.getElementById('sum').innerHTML = score;
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
}

class ClassSwitch {
    constructor(letter, numbs) {
        this.letter = letter;
        this.numbs = numbs;
    }

    switcher() {
        const innerFunc = () => {
            window[nums[this.numbs]] += 1;
            if (window[nums[this.numbs]] % 2 === 0) {
                let elem = document.getElementById(this.letter)
                // elem.style.color = "whitesmoke";
                elem.classList.toggle('hover')
            } else {
                let elem = document.getElementById(this.letter)
                // elem.style.color = 'rgb(255, 5, 192)';
                window[nums[this.numbs]] = 1;
                elem.classList.toggle('hover')
                console.log(window[nums[this.numbs]])
            }
        }
        innerFunc()
    }
}

function createObj(pLetter, pNumbs) {
    const object = new ClassSwitch(pLetter, pNumbs);
    return object;
}