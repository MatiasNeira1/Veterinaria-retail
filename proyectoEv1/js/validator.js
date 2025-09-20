function validator(campoid){
    let valorCampo = document.getElementById(campoId).value;

        
        if (valorCampo.includes('@')) {
            
            document.getElementById("mensajeError").textContent = `El campo ${campoId} es válido.`;
            document.getElementById("mensajeError").style.color = "green";
        } else {
            console.log("todo bien")
}
}