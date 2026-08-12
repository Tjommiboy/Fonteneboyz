import {check} from "/check.js"

let date = document.getElementById("Dato")
let time = document.getElementById("Tid")
let saveBtn = document.getElementById("save-btn")

async function skjema(time, date) {
    let passed = await check(time, date);
    if (passed != time || date) {
        console.log("Tid eller Dato passet ikke")
    }
}