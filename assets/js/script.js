const quizData = [

    {
    question: "What sport has a toe pick",
    a: "Basketball",
    b: "Hockey",
    c: "Figure Skating",
    d: "Golf",
    correct: "c",

    },

    {
        question: "In what part of the human body is the heart found? ",
        a: "Foot ",
        b: "Chest",
        c: "Head",
        d: "Arm",
        correct: "b",
    
        },

        {
            question: "Which Minecraft mob explodes?",
            a: "Enderman",
            b: "Zombie",
            c: " Bat",
            d: "Creeper",
            correct: "d",
        
            },

            {
                question: "Which type of creature is a crab? ",
                a: "Crustacean ",
                b: " Fish",
                c: "Reptile ",
                d: "Insect ",
                correct: "a",
            
                },

                {
                    question: "Which of these fruits is shaped like a lemon?",
                    a: " Tangerine",
                    b: "Plum ",
                    c: "Lime ",
                    d: " Apple",
                    correct: "c",
                
                    },

                    {
                        question: "What is the hottest colour of fire?",
                        a: "Orange",
                        b: "Yellow",
                        c: "Purple",
                        d: "Blue",
                        correct: "d",
                    
                        },
            
];

const quiz = document.getElementById('quiz')
const answer = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')