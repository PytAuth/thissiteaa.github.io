paer = document.querySelector("#passworder")
loer = document.querySelector("#loginer")
bavt = document.querySelector("#avt")
iLogin = document.querySelector("#logins");
iPassword = document.querySelector("#passwords");
bSubmit = document.querySelector("#submit");
isLogin = false
bSubmit.addEventListener('click', () => {

    if (iLogin.value == "Student" && iPassword.value == "123"){
        
        window.location.href = "index.html";
        isLogin = true;
    } else {
        loer.textContent = "Ошибка, неверный логин или пароль"
    }
    if (iLogin.value == "Sasha" && iPassword.value == "12345"){
        
        window.location.href = "index.html";
        isLogin = true;
    } else {
        loer.textContent = "Ошибка, неверный логин или пароль"
    } 
    
})