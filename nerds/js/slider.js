let swiper = new Swiper('.carousel', {
  pagination: {
    el: '.carousel__indicators',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});