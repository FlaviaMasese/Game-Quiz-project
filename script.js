const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false }
    ]
  },
  {
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    answers: [
      { text: "Final", correct: true },
      { text: "Static", correct: false },
      { text: "Private", correct: false },
      { text: "Public", correct: false }
    ]
  },
  {
    question: "The logo for Snapchat is a Bell.",
    answers: [
      { text: "True", correct: false },
      { text: "False",correct: true },
      
    ]
  },
  {
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    answers: [
      { text: "True", correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: "The logo for Snapchat is a Bell.",
    answers: [
      { text: "True", correct: false },
      { text: "False",correct: true },
      
    ]
  },
  {
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    answers: [
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".svg", correct: true },
      { text: ".gif", correct: false }
      
    ]
  },
  {
    question: "In web design, what does CSS stand for?",
    answers: [
      { text: "Counter Strike: Source", correct: false },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true }
      
    ]
  },
  {
    question: "What is the code name for the mobile operating system Android 7.0?",
    answers: [
      { text: "Ice Cream Sandwich", correct: false },
      { text: "Nougat", correct: true },
      { text: "Jelly Bean", correct: false },
      { text: "Marshmallow", correct: false },
      
    ]
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    answers: [
      { text: "100", correct: false },
      { text: "120", correct: false },
      { text: "140", correct: true },
      { text: "160", correct: false }
      
    ]
  },
  {
    question: "Linux was first created as an alternative to Windows XP.",
    answers: [
      { text: "False",correct: true },
      { text: "True", correct: false },
      
    ]
  },
  {
    question: "Which programming language shares its name with an island in Indonesia?",
    answers: [
      { text: "Python", correct: false },
      { text: "C", correct: false },
      { text: "Jakarta", correct: false },
      { text: "Java", correct: true },
      
    ]
  },
]