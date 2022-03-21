window.addEventListener("load", function (e) {
  const heart_like = document.getElementsByClassName("fas fa-heart");
  let number_like = document.getElementsByClassName("total_like");
  console.log(number_like);
  console.log(heart_like);

  for (i = 0; i < heart_like.length; i++) {
    if (JSON.stringify(heart_like) === JSON.stringify(number_like)) {
      for (i = 0; i < number_like.length; i++) {
        let like_for_media = parseInt(number_like[i].innerHTML);
        console.log(like_for_media);
        heart_like[i].addEventListener("click", function (e) {
          if (like_for_media[i] == heart_like[i]) {
            let increment = like_for_media++;
            console.log(increment);
          }
        });
      }
    }
  }
});
