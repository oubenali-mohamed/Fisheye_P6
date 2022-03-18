window.addEventListener("load", function (e) {
  const heart_like = document.getElementsByClassName("fas fa-heart");
  let number_like = document.getElementsByClassName("total_like");
  console.log(number_like);
  console.log(heart_like);
  console.log(heart_like.length);

  for (i = 0; i < heart_like.length; i++) {
    console.log(heart_like[i]);
    let like_of_media = parseInt(number_like[i].innerHTML);
    console.log(typeof like_of_media);
    if ((heart_like[i] = number_like[i])) {
      heart_like[i].addEventListener("click", function (e) {
        like_of_media++;
        console.log(like_of_media);
      });
    }
  }
});
