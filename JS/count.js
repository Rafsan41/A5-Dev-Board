

const completeBtn = document.querySelectorAll('.complete-btn');
const cardTitles = document.querySelectorAll('.card-title')
let taskOkCounts = document.getElementById('taskOkCount').innerText
let taskremaingCounts = document.getElementById('taskremaingCount').innerText
const activityLog = document.getElementById('activityLog')
let taskOkCountNumber = parseInt(taskOkCounts)
let taskremaingCountNumber = parseInt(taskremaingCounts)


for (let i = 0; i <= completeBtn.length; i++) {
    completeBtn[i].addEventListener("click", function () {
        completeBtn[i].setAttribute('disabled', 'true')
        alert("Yeh!!, You completed Task Sucessfully")
        let cardTitle = cardTitles[i].innerText;


        let minus = parseInt(taskremaingCountNumber--)
        let plus = parseInt(taskOkCountNumber++)


        document.getElementById('taskremaingCount').innerText = minus
        document.getElementById('taskOkCount').innerText = plus
        // taskOkCountNumber.innerHTML = plus
        // taskremaingCountNumber.innerHTML = minus
        console.log(taskOkCountNumber)


        let p = document.createElement("p");
        let date = new Date();
        let timeSet = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: "true" };

        p.innerHTML = `
        <p class="text-base font-semibold bg-slate-200 p-3 rounded-lg my-5">
              You have Complete The Task <span>${cardTitle}</span> at ${date.toLocaleTimeString('en-us', timeSet)}
            </p>
        `;
        if (taskremaingCountNumber === 0) {
            alert("Congraters!! You Have Successfully Complete All the Task")
        }
        activityLog.appendChild(p)

    }




    );
}
document.getElementById('clearActivityLog').addEventListener('click', function () {
    document.getElementById('activityLog').innerHTML = '';
})


