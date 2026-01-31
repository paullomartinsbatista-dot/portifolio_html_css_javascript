const botao = document.getElementById("ThemeToggle")
    console.log(botao)
botao.addEventListener('click', function() {
  console.log("botao clicado");
    document.body.classList.toggle('dark-mode')

});
const nameinput = document.getElementById("nameinput")
console.log("nameinput");

const dispĺayname = document.getElementById("displayname")
console.log("displayname")

nameinput.addEventListener('input', function(e){
    dispĺayname.textContent =e.target.value
});

