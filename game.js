let ul = document.getElementById('ul')
let nextButton = document.getElementById('btnNext');
let quizbox = document.getElementById('questionBox')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')

let app={
    questions:[
        {
            q:"What does CPU stand for?",
            options: ["Central Process Unit", 
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit",],
            answer:2
        },
        {
            q:"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
            options: ["Final","Static", "Private", "Public"],
            answer:1
        },
        {
            q:"The logo for Snapchat is a ...",
            options: ["Cup", "Gill", "Bell", "Apple"],
            answer:3
        },            
        {
            q: "Pointers were not used in the original C programming language; they were added later on in C++.",
            options: ["False","True"],
            answer:1
        },
        {
            q:"What is the most preferred image format used for logos in the Wikimedia database?",
            options: [".png", ".jpeg", ".gif",".svg",],
            answer:4
        },
        {
            q:"In web design, what does CSS stand for?",
            options: ["Counter Strike: Source", 
            "Corrective Style Sheet",
            "Cascading Style Sheet",
            "Computer Style Sheet",],
            answer:3
        },
        {
            q:"What is the code name for the mobile operating system Android 7.0?",
            options: [ "Ice Cream Sandwich", "Jelly Bean", "Marshmallow", "Nougat",],
            answer:4
        },
        {
            q:"On Twitter, what is the character limit for a Tweet?",
            options: ["120", "160", "140", "100"],
            answer:3
        },
        {
            q:"Linux was first created as an alternative to?.",
            options: ["Windows", "Linux", "MacBook", "Window XP"],
            answer:1
        },
        {
            q:"Which programming language shares its name with an island in Indonesia?",
            options: ["Python","Java", "C", "Jakarta"],
            answer:2
        },
    ],
    index:0,
    //Load a question using the index
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            //Show the end screen
            quizbox.innerHTML="Quiz Completed!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    //Check if answer is correct or not
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    //disable options once user selects on option
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}
window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}