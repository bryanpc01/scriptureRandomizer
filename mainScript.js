let Moses_bk = "Pentateuch"
let History_bk = "Historical Books"
let Poetry_bk = "Poetry Books"
let Major_p_bk = "Major Prophets"
let Minor_p_bk = "Minor Prophets"

let Gospels_bk = "The Gospels"
let Church_bk = "History of the Church"
let Paul_bk = "Pauline Epistles"
let Epstles_bk = "General Epistles"
let End_bk = "Apocalyptic Writings"

//testament objects contains book name, number of chapters and section of the testament for reference
let oldTestament = {
  Genesis: {
    name: "Genesis",
    chapters: 50,
    section: Moses_bk
  },
  Exodus: {
    name: "Exodus",
    chapters: 40,
    section: Moses_bk
  },
  Leviticus: {
    name: "Leviticus",
    chapters: 27,
    section: Moses_bk
  },
  Numbers: {
    name: "Numbers",
    chapters: 36,
    section: Moses_bk
  },
  Deuteronomy: {
    name: "Deuteronomy",
    chapters: 34,
    section: Moses_bk
  },
  Joshua: {
    name: "Joshua",
    chapters: 24,
    section: History_bk
  },
  Judges: {
    name: "Judges",
    chapters: 21,
    section: History_bk
  },
  Ruth: {
    name: "Ruth",
    chapters: 4,
    section: History_bk
  },
  Samuel_1: {
    name: "1st Samuel",
    chapters: 31,
    section: History_bk
  },
  Samuel_2: {
    name: "2nd Samuel",
    chapters: 24,
    section: History_bk
  },
  Kings_1: {
    name: "1st Kings",
    chapters: 22,
    section: History_bk
  },
  Kings_2: {
    name: "2nd Kings",
    chapters: 25,
    section: History_bk
  },
  Chronicles_1: {
    name: "1st Chronicles",
    chapters: 29,
    section: History_bk
  },
  Chronicles_2: {
    name: "2nd Chronicles",
    chapters: 36,
    section: History_bk
  },
  Ezra: {
    name: "Ezra",
    chapters: 10,
    section: History_bk
  },
  Nehemiah: {
    name: "Nehemiah",
    chapters: 13,
    section: History_bk
  },
  Esther: {
    name: "Esther",
    chapters: 10,
    section: History_bk
  },
  Job: {
    name: "Job",
    chapters: 42,
    section: Poetry_bk
  },
  Psalms: {
    name: "Psalms",
    chapters: 150,
    section: Poetry_bk
  },
  Proverbs: {
    name: "Proverbs",
    chapters: 31,
    section: Poetry_bk
  },
  Ecclesiastes: {
    name: "Ecclesiastes",
    chapters: 12,
    section: Poetry_bk
  },
  Solomon: {
    name: "Song of Solomon",
    chapters: 8,
    section: Poetry_bk
  },
  Isaiah: {
    name: "Isaiah",
    chapters: 66,
    section: Major_p_bk
  },
  Jeremiah: {
    name: "Jeremiah",
    chapters: 52,
    section: Major_p_bk
  },
  Lamentations: {
    name: "Lamentations",
    chapters: 5,
    section: Major_p_bk
  },
  Ezekiel: {
    name: "Ezekiel",
    chapters: 48,
    section: Major_p_bk
  },
  Daniel: {
    name: "Daniel",
    chapters: 12,
    section: Major_p_bk
  },
  Hosea: {
    name: "Hosea",
    chapters: 14,
    section: Minor_p_bk
  },
  Joel: {
    name: "Joel",
    chapters: 3,
    section: Minor_p_bk
  },
  Amos: {
    name: "Amos",
    chapters: 3,
    section: Minor_p_bk
  },
  Obadiah: {
    name: "Obadiah",
    chapters: 1,
    section: Minor_p_bk
  },
  Jonah: {
    name: "Jonah",
    chapters: 4,
    section: Minor_p_bk
  },
  Micah: {
    name: "Micah",
    chapters: 7,
    section: Minor_p_bk
  },
  Nahum: {
    name: "Nahum",
    chapters: 3,
    section: Minor_p_bk
  },
  Habakkuk: {
    name: "Habakkuk",
    chapters: 3,
    section: Minor_p_bk
  },
  Zephaniah: {
    name: "Zephaniah",
    chapters: 3,
    section: Minor_p_bk
  },
  Haggai: {
    name: "Haggai",
    chapters: 2,
    section: Minor_p_bk
  },
  Zechariah: {
    name: "Zechariah",
    chapters: 14,
    section: Minor_p_bk
  },
  Malachi: {
    name: "Malachi",
    chapters: 4,
    section: Minor_p_bk
  }  
}
let newTestament = {
  Matthew: {
    name: "Matthew",
    chapters: 28,
    section: Gospels_bk
  },
  Mark: {
    name: "Mark",
    chapters: 16,
    section: Gospels_bk
  },
  Luke: {
    name: "Luke",
    chapters: 24,
    section: Gospels_bk
  },
  John: {
    name: "John",
    chapters: 21,
    section: Gospels_bk
  },
  Acts: {
    name: "Acts",
    chapters: 28,
    section: Church_bk
  },
  Romans: {
    name: "Romans",
    chapters: 16,
    section: Paul_bk
  },
  Corinthians_1: {
    name: "1st Corinthians",
    chapters: 16,
    section: Paul_bk
  },
  Corinthians_2: {
    name: "2nd Corinthians",
    chapters: 13,
    section: Paul_bk
  },
  Galatians: {
    name: "Galatians",
    chapters: 6,
    section: Paul_bk
  },
  Ephesians: {
    name: "Ephesians",
    chapters: 6,
    section: Paul_bk
  },
  Philippians: {
    name: "Philippians",
    chapters: 4,
    section: Paul_bk
  },
  Colossians: {
    name: "Colossians",
    chapters: 4,
    section: Paul_bk
  },
  Thessalonians_1: {
    name: "1st Thessalonians",
    chapters: 5,
    section: Paul_bk
  },
  Thessalonians_2: {
    name: "2nd Thessalonians",
    chapters: 3,
    section: Paul_bk
  },
  Timothy_1: {
    name: "1st Timothy",
    chapters: 6,
    section: Paul_bk
  },
  Timothy_2: {
    name: "2nd Timothy",
    chapters: 4,
    section: Paul_bk
  },
  Titus: {
    name: "Titus",
    chapters: 3,
    section: Paul_bk
  },
  Philemon: {
    name: "Philemon",
    chapters: 1,
    section: Paul_bk
  },
  Hebrews: {
    name: "Hebrews",
    chapters: 13,
    section: Epstles_bk
  },
  James: {
    name: "James",
    chapters: 5,
    section: Epstles_bk
  },
  Peter_1: {
    name: "1st Peter",
    chapters: 5,
    section: Epstles_bk
  },
  Peter_2: {
    name: "	2nd Peter",
    chapters: 3,
    section: Epstles_bk
  },
  John_1: {
    name: "1st John",
    chapters: 5,
    section: Epstles_bk
  },
  John_2: {
    name: "2nd John",
    chapters: 1,
    section: Epstles_bk
  },
  John_3: {
    name: "3rd John",
    chapters: 1,
    section: Epstles_bk
  },
  Jude: {
    name: "Jude",
    chapters: 1,
    section: Epstles_bk
  },
  Revelation: {
    name: "Revelation",
    chapters: 22,
    section: End_bk
  }
}

//Returns the object of a random book given a testament object
let randomBookObject = function (obj) {
    let books = Object.keys(obj)
    return obj[books[ books.length * Math.random() << 0]];
};

let zeroOne = Math.round(Math.random())
let oldVsNew = zeroOne ? oldTestament : newTestament     
let randomBook = randomBookObject(oldVsNew).name
console.log(randomBook)
let randomNum  = Math.floor(Math.random() * (4) + 2)

let readingPrompt = document.getElementById('randomBook')
let randomizerBtn = document.getElementById('randomizer')

randomizerBtn.addEventListener("click", () => {
  readingPrompt.innerHTML = `${randomNum} Chapters of ${randomBook}`
  randomizerBtn.className = "btn btn-outline-orang disabled noHoverBtn"
})
