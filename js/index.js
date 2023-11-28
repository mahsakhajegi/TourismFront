//#region Slider Comments
var commentsSlider = new Splide('.comments-slider', {
  perPage: 4,
  pagination: boolean = false,
  gap: '1rem',
  breakpoints: {
    576: {
      perPage: 2,
    },
    768: {
      perPage: 2,
    },
    992: {
      perPage: 3,
    },
  },
  padding: '1rem'
});

commentsSlider.mount();
//#endregion

//#region Slider Ads

var adSlider = new Splide('.ad-slider', {
  type: 'loop',
  autoplay: true,
  perPage: 5,
  pagination: false,
  gap: '1rem',
  arrows: false,
  padding: '1rem',
  breakpoints: {
    576: {
      perPage: 2,
    },
    992: {
      perPage: 3,
    },
  }
});

adSlider.mount();
//#endregion

// یک آرایه تعریف شده است برای ذخیره اطلاعات تورها 
var toursList = [];

//#region JSON

//Sending a GET request to a JSON file
// اطلاعات دریافت شده از درخواست به تابع `afterGetToursResponse` منتقل می‌شوند.
function showTourList() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const getToursURL = "http://127.0.0.1:5500/list-tour.json";

  fetch(getToursURL, requestOptions)
    .then(response => response.json())
    .then(result => afterGetToursResponse(result))
    .catch(error => console.log('error', error));
}

function afterGetToursResponse(tours) {
  toursList = tours;
  replaceTours(tours);
}

showTourList();

function replaceTours(tours) {
  toursList = tours;
  tours.forEach(function (tour) {
    var toursElem = document.getElementById("tours");
    toursElem.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card mb-4">
        <div>
          <div class="img-header d-flex justify-content-between p-3">
            <div><span class="badge text-bg-light">Populare Package</span></div>
            <div><i class="like-icon bi bi-heart-fill"></i></div>
          </div>
          <div>
            <img src="./images/${tour.image}" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">${tour.country}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${tour.continent}</h6>
            <div class="d-flex justify-content-between">
              <div>
                <span class="fw-bold">${tour.price.off}</span>
                <span class="text-decoration-line-through">${tour.price.amount}</span>
              </div>
                <button type="button" class="btn btn-outline-info btn-sm rounded-pill fw-bold" onclick="redirectToBuyTour(${tour.id})">BUY NOW</button>
              </div>
          </div>
        </div>
      </div>
    </div>`
  })
}
//#endregion


function redirectToBuyTour(id) {
  // Find tour from list.
  var tour = toursList.find(t => t.id === id);
  // Cache tour
  localStorage.setItem('tour', JSON.stringify(tour));
  // Redirect to buy page
  window.location.href = '/buy-ticket.html';
}