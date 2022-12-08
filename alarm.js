const currentTime=document.getElementById("currenttime")
content = document.querySelector(".content")
const selectmenu = document.querySelectorAll("select")
const alarmbtn= document.querySelector("button")

let alarmTime, isAlarmSet = false
let ringtone = new Audio("Alarm.mp3")

for(let i=1; i<13;i++){
    
    i = i<10 ?"0"+i :i;
    let option =  `<option value=${i}>${i}</option>`
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);

}
for(let i=1; i<61;i++){
    
    i = i<10 ?"0"+i :i;
    let option =  `<option value=${i}>${i}</option>`
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);

}
for(let i=0; i<2;i++){
    
    let ampm = i ==1?"AM":"PM"
    let option =  `<option value=${ampm}>${ampm}</option>`
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend",option);

}

setInterval(() =>{
    let date = new Date()
    h=date.getHours()
    m= date.getMinutes()
    s= date.getSeconds()
    ampm = "AM"
    if(h>=12){
        h=h-12
        ampm="PM"
    }

    h = h==0?h = 12:h
    
    h= h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s
    currentTime.innerText= `${h}:${m}:${s} ${ampm}`

    if(alarmTime == `${h}:${m} ${ampm}`){
        ringtone.play()
        //ringtone.loop=true;

    }

}),1000

function setAlarm(){
    if(isAlarmSet){
        alarmTime=""
        ringtone.pause()
        content.classList.remove("disable")
        alarmbtn.innerText="Set Alarm"
        return isAlarmSet=false
    }
    let time=`${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`
    console.log(time)
    if(time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")){
        return alert("Please select valid time to set alarm")
    }
    isAlarmSet = true
    alarmTime= time
    
    content.classList.add("disable")
    alarmbtn.innerText="Clear Alarm"
    
}
alarmbtn.addEventListener("click",setAlarm)



