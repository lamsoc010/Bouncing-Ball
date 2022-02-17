class Time {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.turn = 1;
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

    addListTime(listTimesArr) {
        listTimesArr.push([this.minutes, this.seconds]);
        console.log(listTimesArr);
        let listTimes = document.getElementById('listTimes');
        listTimes.innerHTML += `<li>Lượt ${this.turn}: ${this.minutes}:${this.seconds}</li>`;
        this.turn += 1;
    }
}