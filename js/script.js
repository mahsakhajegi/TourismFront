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
