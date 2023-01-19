let allStudents;

function getDetail() {
    allStudents =JSON.parse(localStorage.getItem("students"))
    console.log(allStudents);
    ShowStudent()
}


function ShowStudent() {
    for (let i = 0; i < allStudents.length; i++) {
        display.innerHTML+= `${allStudents[i].firstname} ${allStudents[i].lastname} ${allStudents[i].email} ${allStudents[i].password} ${allStudents[i].time} ${allStudents[i].matricNo}`
        console.log(allStudents[i]);
    }
}
