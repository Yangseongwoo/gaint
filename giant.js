var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var myEventSwiper = new Swiper(".myEventSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  wrapperClass: 'myEventSwiper-wrapper',
  slideClass: 'myEventSwiper-slide',
});


/* master hover 기능 */
const masterElement = document.querySelector('.master');
const seeMoreBtn = document.querySelector('.see-more-btn');

masterElement.addEventListener('mouseenter', () => {
    masterElement.classList.add('hovered');
});

masterElement.addEventListener('mouseleave', () => {
    masterElement.classList.remove('hovered');
});

seeMoreBtn.addEventListener('click', () => {
    // 버튼 클릭 시 추가 동작 수행
    console.log('See more button clicked!');
});


$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


  

  const video = document.getElementById('myVideo');

// 마우스를 올려놓았을 때 재생
video.addEventListener('mouseover', function() {
    video.play();
});

// 마우스를 떼면 정지
video.addEventListener('mouseout', function() {
    video.pause();
});



document.addEventListener('DOMContentLoaded', function() {
  updateSpecs('frame');
});

function updateSpecs(category) {
  // 모든 specs-details 요소를 숨깁니다.
  document.querySelectorAll('.specs-details').forEach((element) => {
      element.classList.remove('active');
  });

  // 선택된 카테고리만 보이게 합니다.
  document.getElementById(category).classList.add('active');
}


document.querySelectorAll('.nav2 a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // 모든 링크에서 active 클래스 제거
      document.querySelectorAll('.nav2 a').forEach(link => link.classList.remove('active'));

      // 클릭된 링크에 active 클래스 추가
      this.classList.add('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});







