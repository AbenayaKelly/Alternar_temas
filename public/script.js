 // Quando o documento for completamente carregado, o código dentro da função será executado.
document.addEventListener("DOMContentLoaded",()=>{
 const themeToggleBtn = document.getElementById("theme-toggle");
  // Seleciona o botão de alternância de tema com o ID 'theme-toggle'.

  const currentTheme = localStorage.getItem("theme");
  // Verifica se tem algum tema salvo no LocalStorage
  if(currentTheme){
    document.body.classList.add(currentTheme);
    // Se tiver algum tema, ele sera mostrado primeiro na página
  }
  themeToggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
     // Alterna a classe 'dark-theme'. Se estiver aplicada, ela será removida, e se não estiver, será adicionada.
    document.body.classList.toggle("light-theme")
    
    let theme = "dark-theme";
    // Define o tema escuro inicialamente
    if(document.body.classList.contains("light-theme")){
        theme= "light-theme";
        // Se a classe "light-theme" estiver presente na pagina, o tema sera claro

    }
    localStorage.setItem("theme", theme);
     // Armazena o tema atual no LocalStorage para que ele seja mantido ao recarregar a página.
})
})