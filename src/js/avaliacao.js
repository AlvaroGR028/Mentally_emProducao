// Programação das estrelas ficarem clicaveis
document.addEventListener('click',function(e){
  var stars = e.target.parentElement.getElementsByClassName('star-icon');
  stars = Array.from(stars);

  var classStar = e.target.classList;
  
  if(!classStar.contains('ativo') && classStar.contains('star-icon')){
    stars.forEach(function(star){
      star.classList.remove('ativo');  
                      });
    
                     classStar.add('ativo'); 
                }
          });

 


