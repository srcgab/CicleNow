// function abrirSecao(box) {
//     var boxCos = document.getElementById(box);
    
//     if (boxCos.style.display == "block") {
//         boxCos.style.display = "none";
//       } else {
//         boxCos.style.display = "block";
//       }
//   } 

  function abrirSecao(box) {
    let secao = document.getElementById(box);
    
    if (secao.style.display == "block") {
      secao.style.display = "none";
    } else {
      let secoes = document.getElementsByTagName("section");
    
      for (var i = 0; i < secoes.length; i++) {
        if (secoes[i].style.display == "block") {
          secoes[i].style.display = "none";
        }
      }
      
      secao.style.display = "block";
    }
  }
