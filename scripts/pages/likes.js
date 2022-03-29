/* window.addEventListener("load", function (e) {
  const heart_like = document.getElementsByClassName("fas fa-heart");
  let number_like = document.getElementsByClassName("total_like");
  /* console.log(number_like);
  console.log(heart_like); 

  //boucle pour parcourir le tableau des icons heart
  for (i = 0; i < heart_like.length; i++) {
    //comapraison des deux tableaux
    if (JSON.stringify(heart_like) === JSON.stringify(number_like)) {
      //boucle pour parcourir le tableau des nombres de likes
      for (i = 0; i < number_like.length; i++) {
        //utilisation de parseInt pour renvoyer le nombre de likes
        let like_for_media = parseInt(number_like[i].innerHTML);
        //ajour du eventlistener sur heart et incrémentation du nombre de like
        heart_like[i].addEventListener("click", function (e) {
          if (like_for_media[i] === heart_like[i]) {
            let increment = like_for_media++;
            console.log(increment);
          }
        });
      }
    }
  }
});*/
