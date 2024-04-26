const lista = document.querySelector(".lista");
const modalCart = document.querySelector(".modalCart");
const texto = document.querySelector("#texto")
const butModalAdd = document.querySelector("#but-modal")
const voltar = document.querySelector(".btn-voltar")
const btn = document.querySelector(".btn-adicionar")
const p = document.querySelector(".pModal")
let meuli="li"
const listaTarefa = []



function AbrirModal() {
  modalCart.style.display = "flex"
}


function fecharModal() {
  modalCart.style.display = "none"
  p.style.display = "none"
  texto.value = ""
}


function AdicionarTarefa() {

  if (texto.value === "" || texto.value === null) {
    p.style.color="red"
    p.style.display="block"

  } else {

    
    listaTarefa.push(
       lista.innerHTML+=  
      `  <li class="${meuli}">
            
                   <span class="divTexto">${texto.value}</span>
                      
                       
                       <div class="divBtn">
                          <svg class="butRemover" onclick="remover()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                   </svg>
                   
                     <svg class="butMarcar" onclick="Marcar()"   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                     </svg
                       </div>
                       </li>
                       `
      );
   
  


    texto.value = ""
    
    p.style.display = "none"
    modalCart.style.display = "none"
  

    console.log(listaTarefa)
    
    

  }

}



function remover() {

  
}


function Marcar() {




}






btn.addEventListener("click", AbrirModal)

butModalAdd.addEventListener("click", AdicionarTarefa)

voltar.addEventListener("click", fecharModal)