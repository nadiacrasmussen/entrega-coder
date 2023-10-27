const formulario = document.getElementById("login");
formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    let empresa = document.getElementById("empresa").value;
    let cuit = document.getElementById("cuit").value;
    let password = document.getElementById("pass").value;
    e.preventDefault();
    console.log(cuit, password);
    localStorage.setItem("empresa",empresa)
    localStorage.setItem("cuit",cuit)
    
}
