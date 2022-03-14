/* window.onload = () => {
  const heart_like = document.getElementsByClassName("fas fa-heart");
  let number_like = document.getElementsByClassName("total_like");
  console.log(number_like);
  console.log(heart_like);
  console.log(heart_like.length);

  function getNumberLike() {
    for (i = 0; i < number_like.length; i++) {
      let like_Of_Media = number_like[i].firstChild.nodeValue;
      console.log(like_Of_Media);
    }
  }

  for (i = 0; i < heart_like.length; i++) {
    heart_like[i].addEventListener("click", function (e) {
      getNumberLike();
    });
  }
};
 */
