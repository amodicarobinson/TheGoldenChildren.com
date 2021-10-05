class DigitalClock{
  constructor(element){
          this.element = element;
  }

start(){
  this.update();
  
  setInterval(() => {
        this.update();
  }, 500);
}

  update(){
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minutes.toString().padStart(2, "0");
        const timeFormmated =  `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAM ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormmated;
        this.element.querySelector(".clock-ampm").textContent = amPm;


  }


  getTimeParts(){
    const now = new Date();

    return{
        hour: now.getHours() % 12 || 12,
        minutes: now.getMinutes(),
        isAM: now.getHours() < 12
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);
clockObject.start();
