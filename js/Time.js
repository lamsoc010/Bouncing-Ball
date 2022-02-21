class Time {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
    }

    countTime() {
        this.seconds += 1;
        let time = document.getElementById('time');
        time.innerHTML = `${this.minutes}:${this.seconds}`;
        if(this.seconds == 60) {
            this.seconds = 0;
            this.minutes += 1;
        }
    }

    addListTime(listTimesArr, turn, score) {
        listTimesArr.push([this.minutes, this.seconds, score]);
        console.log(listTimesArr);
        let listTimes = document.getElementById('listTimes');
        listTimes.innerHTML += `<li>Lượt ${turn}: ${this.minutes}:${this.seconds} -- Điểm: ${score}</li>`;
        
    }
}