
  function abrirSecao(box) {
    let secao = document.getElementById(box);
    
    if (secao.style.display == "flex"  || secao.style.display == "block") {
      secao.style.display = "none";
    } else {
      let secoes = document.getElementsByTagName("section");
    
      for (var i = 0; i < secoes.length; i++) {
        if (secoes[i].style.display == "flex"  || secoes[i].style.display == "block") {
          secoes[i].style.display = "none";
        }
      }
  

    if (window.innerWidth >= 750) {
      secao.style.display = "flex";
    } else {
      secao.style.display = "block";
    }
      
    }
  }
