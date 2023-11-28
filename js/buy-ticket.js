// console.log(localStorage.getItem('tour'))


//#region Onchange Codes
let continentData = { Asia: ['Dubai', 'Iran', 'Thailand'], Europs: ['Spain', 'Italy', 'Paris'] };

let continentSelectBox = document.getElementById("validationCustom05");
let countrySelectBox = document.getElementById("validationCustom06");

continentSelectBox.addEventListener('change', function () {

    let mainContinentName = continentSelectBox.value;
    let mainContinentalCountries = continentData[mainContinentName];

    countrySelectBox.innerHTML = "";

    if (mainContinentalCountries === undefined ||
        mainContinentalCountries === null ||
        mainContinentalCountries.length === 0) {
        countrySelectBox.setAttribute('disabled', 'disabled')
    }
    else {
        countrySelectBox.removeAttribute('disabled')
        mainContinentalCountries.forEach(function (country) {
            countrySelectBox.innerHTML += `<option>${country}</option>`;
        })
    }
});
//#endregion

//#region Function Get Tour From Catch:
function getTourInfoFromCatch() {
    let tourCacheString = localStorage.getItem('tour');
    return JSON.parse(tourCacheString);
}
//#endregion

//#region insert select tour to page "Buy Ticket" :
function replaceTour() {
    let imgBuyTicket = document.getElementById("img-buy-ticket");
    let lblContinent = document.getElementById("lbl-continent");
    let lblCountry = document.getElementById("lbl-country");
    let lblPrice = document.getElementById("lbl-price");

    let tour = getTourInfoFromCatch();
    imgBuyTicket.setAttribute('src', './images/' + tour.image)
    lblContinent.innerHTML = tour.continent;
    lblCountry.innerHTML = tour.country;
    lblPrice.innerHTML = tour.price.off;
}

replaceTour();

// #endregion



//#region ***Bootstrap*** Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
// #endregion

// var getAverageColor = (function(window, document, undefined){
// 	return function(imageURL, options){
// 		options = {
// 			// image split into blocks of x pixels wide, 1 high
// 			blocksize: options.blocksize || 5,
// 			fallbackColor: options.fallbackColor || '#000'
// 		};

// 		var img = document.createElement('img'),
// 			canvas = document.createElement('canvas'),
// 			context = canvas.getContext && canvas.getContext('2d'),
// 			i = -4,
// 			count = 0,
// 			rgb = {
// 				r: 0,
// 				g: 0,
// 				b: 0
// 			},
// 			data, width, height, length;

// 		if(!context){
// 			return options.fallback_color;
// 		}

// 		height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
// 		width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

// 		// create a dom element for the image
// 		img.src = imageURL;
// 		img.id = 'averageColorImg';
// 		img.style.display = 'none';

// 		// draw image in canvas to make calculation easier
// 		context.drawImage(img, 0, 0);

// 		try {
// 			data = context.getImageData(0, 0, width, height);
// 		}
// 		catch(e){
// 			// security error, img on different domain
// 			return options.fallback_color;
// 		}

// 		length = data.data.length;

// 		// get rgb values for each pixel at the end of the block
// 		while((i += blocksize * 4) < length){
// 			++count;
// 			rgb.r += data.data[i];
// 			rgb.g += data.data[i+1];
// 			rgb.b += data.data[i+2];
// 		}

// 		// ~~used to floor values
// 		rgb.r = ~~(rgb.r/count);
// 		rgb.g = ~~(rgb.g/count);
// 		rgb.b = ~~(rgb.b/count);

// 		return 'rgb('+rgb.r+', '+rgb.g+', '+rgb.b+')';
// 	};
// })(this, this.document);
