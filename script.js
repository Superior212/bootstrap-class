let allStudent =[];


function signup() {
    date = new Date
    newStudent = {
         firstname: firstName.value,
         lastname: lastName.value,
         email: userEmail.value,
         password: userPassword.value,
         time: date,
         matricNo: Math.round(Math.random()*100000000)
    }

    allStudent.push(newStudent)
    window.location.href ="signin.html"
    localStorage.setItem("students",JSON.stringify(allStudent))
    // console.log(allStudent);
}


function signin() {
    window.location.href ="dashboard.html"
}
