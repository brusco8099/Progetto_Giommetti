function login(event) {
    event.preventDefault();
    let utente_copy = document.getElementById("utente").value;
    let password_copy = document.getElementById("password").value;

    let savedUser = localStorage.getItem("utente");
    let savedPass = localStorage.getItem("password");

    if (utente_copy === savedUser && password_copy === savedPass) {
        window.location.href = "index.html";
        let testo_utente = document.getElementById("nome");
        testo_utente.textContent = utente_copy;
    } else {
        window.alert("Login non riuscito");
    }
}


function signUp(event) {
    event.preventDefault(); 
    let utente = document.getElementById("utente").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("utente", utente);
    localStorage.setItem("password", password);
    
    let testo_utente = document.getElementById("nome");
    if (testo_utente) {
        testo_utente.textContent = utente;
    }

    window.location.href = "index.html";
}
