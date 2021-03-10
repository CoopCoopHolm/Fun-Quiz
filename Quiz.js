const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currecntQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currecntQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currecntQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currecntQuestionIndex])
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
    if (shuffledQuestions.length > currecntQuestionIndex + 1) {
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

const questions = [{
        question: 'What is 1 + 1?',
        answers: [{
                text: '12',
                correct: false
            },
            {
                text: '45',
                correct: false
            },
            {
                text: '2',
                correct: true
            },
            {
                text: '0',
                correct: false
            },
        ]
    },
    {
        question: 'What is Ojis favorite color?',
        answers: [{
                text: 'gray',
                correct: false
            },
            {
                text: 'yellow',
                correct: true
            },
            {
                text: 'orange',
                correct: false
            },
            {
                text: 'blue',
                correct: false
            },
        ]
    },
    {
        question: 'What is your name?',
        answers: [{
                text: 'Jack',
                correct: false
            },
            {
                text: 'Buddie Boy',
                correct: false
            },
            {
                text: 'Jennifer',
                correct: false
            },
            {
                text: 'Phoebe',
                correct: true
            },
        ]
    },
    {
        question: 'How many grandkids do Loli and Pop have?',
        answers: [{
                text: '4',
                correct: false
            },
            {
                text: '70',
                correct: false
            },
            {
                text: '2',
                correct: false
            },
            {
                text: '3',
                correct: true
            },
        ]
    },
    {
        question: 'Who is Silas?',
        answers: [{
                text: 'Your Brother',
                correct: true
            },
            {
                text: 'Your Sister',
                correct: false
            },
            {
                text: 'Who?',
                correct: false
            },
            {
                text: 'Your Cousin',
                correct: false
            },
        ]
    },
]