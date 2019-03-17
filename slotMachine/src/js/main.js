
class SlothMachine {

    constructor() {
        coins = 0;
    }

    play() {
        
        coins++;
        
        const luck = () => Math.random() >= 0.5;
        
        val1 = luck();
        val2 = luck();
        val3 = luck();
        
        if(val1 && val2 && val3){
            console.log("Congratulations!!!. You won " + coins + " coins!!");
            coins = 0;
        } else {
            console.log("Good luck next time!!");
        }

    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

