/*Programação das estrelas ficarem clicaveis
document.addEventListener("click", function (e) {
  var stars = e.target.parentElement.getElementsByClassName("star-icon");
  stars = Array.from(stars);

  var classStar = e.target.classList;

  if (!classStar.contains("ativo") && classStar.contains("star-icon")) {
    stars.forEach(function (star) {
      star.classList.remove("ativo");
    });

    classStar.add("ativo");
  }
});*/

const saveBtn = document.getElementById("saveBtn");

const commentInput = document.getElementById("comment");

const reviewCards = document.getElementById("reviewCards");




saveBtn.addEventListener("click", () => {

  const rating1 = document.querySelector(

    'input[name="rating1"]:checked'

  )?.value;

  const rating2 = document.querySelector(

    'input[name="rating2"]:checked'

  )?.value;

  const rating3 = document.querySelector(

    'input[name="rating3"]:checked'

  )?.value;

  const comment = commentInput.value;




  if (comment && rating1 && rating2 && rating3) {

    const review = {

      rating1,

      rating2,

      rating3,

      comment,

    };




    // Save the review in local storage

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.unshift(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));




    // Update the review cards on the page

    updateReviewCards(reviews);




    // Clear the input fields



    document

      .querySelectorAll('input[name="rating1"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating2"]')

      .forEach((radio) => (radio.checked = false));

    document

      .querySelectorAll('input[name="rating3"]')

      .forEach((radio) => (radio.checked = false));



  }

});




function updateReviewCards(reviews) {

  reviewCards.innerHTML = "";

  for (const review of reviews) {

    const card = document.createElement("div");

    card.classList.add("card", "mb-3");




    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body");




    const comment = document.createElement("p");

    comment.classList.add("card-text");

    comment.textContent = review.comment;




    const ratings = document.createElement("p");

    ratings.classList.add("card-text");

    ratings.innerHTML = `Data: ${agendamento.data} Hora: ${agendamento.hora}  Profissional: ${agendamento.nome}
<br>
    Atenção do Profissional: ${review.rating1}/5, Pontualidade: ${review.rating2}/5, Satisfação com a sessão: ${review.rating3}/5`;

    cardBody.appendChild(ratings);
    cardBody.appendChild(comment);
    card.appendChild(cardBody);

    reviewCards.appendChild(card);

  }

}



// Load existing reviews from local storage

window.addEventListener('load', function () {

  if (localStorage.getItem('reviews')) {

    const reviews = JSON.parse(localStorage.getItem('reviews'));

    const reviewCards = document.getElementById('reviewCards');

    reviews.forEach(function (review) {

      const card = document.createElement('div');

      card.classList.add('review-card');

     

      card.innerHTML =

      `Data: ${agendamento.data} Hora: ${agendamento.hora}  Profissional: ${agendamento.nome}
<br>
      Atenção do Profissional: ${review.rating1}/5, Pontualidade: ${review.rating2}/5, Satisfação com a sessão: ${review.rating3}/5;

        <p>Comentários: ${review.comment}</p>

      `;

      reviewCards.appendChild(card);

    });

  }

});


/*
document.getElementById('saveBtn').addEventListener('click', function () {
  const ratings = [];
  const ratingInputs = document.querySelectorAll('input[type="radio"]:checked');
  ratingInputs.forEach(function (input) {
    ratings.push(input.value);
  });

  const comment = document.getElementById('comment').value;


  const review = {
    ratings: ratings,
    comment: comment
  };

  let reviews = [];
  if (localStorage.getItem('reviews')) {
    reviews = JSON.parse(localStorage.getItem('reviews'));
  }
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));


  ratingInputs.forEach(function (input) {
    input.checked = false;
  });
  document.getElementById('comment').value = '';


  const reviewCards = document.getElementById('reviewCards');
  const card = document.createElement('div');
  card.classList.add('review-card');

  card.innerHTML = `
      <p>Atenção do Profissional: ${ratings[0]}</p>
    <p>Pontualidade: ${ratings[1]}</p>
    <p>Satisfação com a sessão: ${ratings[2]}</p>
    <p>Comentários: ${comment}</p>
  `;
  reviewCards.appendChild(card);


  document.getElementById('modal').style.display = 'none';
});


window.addEventListener('load', function () {
  if (localStorage.getItem('reviews')) {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    const reviewCards = document.getElementById('reviewCards');
    reviews.forEach(function (review) {
      const card = document.createElement('div');
      card.classList.add('review-card');
      
      card.innerHTML = `
        <p>Data: ${agendamento.data} Hora: ${agendamento.hora}  Profissional: ${agendamento.nome}<p>
        <p>Atenção do Profissional: ${review.ratings[0]}</p>
        <p>Pontualidade: ${review.ratings[1]}</p>
        <p>Satisfação com a sessão: ${review.ratings[2]}</p>
        <p>Comentários: ${review.comment}</p>
      `;
      reviewCards.appendChild(card);
    });
  }
});*/