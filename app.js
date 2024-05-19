const quizData = [
  {
    question: "Who is the PM on India",
    a: "Narendra Modi",
    b: "Dr. Manmohan singh",
    c: "Atal bihari bajpayee",
    d: "Sonia gandhi",
    correct : d
  },
  {
    question: "What is Shankey age",
    a: "10",
    b: "25",
    c: "30",
    d: "140",
    correct : b
  },
  {
    question : "Where Do Shankey Live" , 
    a : "Delhi",
    b: "Bhira",
    c: "Moon",
    d : "Mumbai",
    correct : c
},
{
    question : "What is shankey favourite Food" , 
    a : "Dal Cahwal",
    b: "Mutton" ,
    c: "Chicken",
    d : "Biryani",
    correct : d
}
];


let quizIndex = 0

const aText = document.getElementById('a')
const bText = document.getElementById('b')
const cText = document.getElementById('c')
const dText = document.getElementById('d')
const QuestionEl = document.getElementById('question')
const btnEl = document.getElementById('btn')


function loadQuiz() {
 const currentQuizData = quizData[quizIndex]

  aText.innerText = currentQuizData.a
  bText.innerText = currentQuizData.b
  cText.innerText = currentQuizData.c
  dText.innerText = currentQuizData.d
  QuestionEl.innerText = currentQuizData.question


}


btnEl.addEventListener('click', () => {



    quizIndex++;

 
    if (quizIndex < quizData.length) {
        loadQuiz();
    } else {
        alert("You finished the quiz");
    }
});
    
