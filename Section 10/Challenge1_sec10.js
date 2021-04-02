'use strict';

let i = 0;

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer() { 
        const x = Number(prompt(`${this.question}\n${this.options.join('\n')} \n (Write option number)`));
        
        console.log(x);
        typeof x === 'number' && x < this.answers.length && this.answers[x]++;
        //console.log(this.answers);

        this.displayResults();
        this.displayResults('blah');
        
        },
        displayResults(type = 'array'){
            if(type === 'array')
            {
            console.log(this.answers)}
            else
            { 
                console.log(`Poll results are ${poll.answers.join(', ')}`);
            }
            }
        }

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
