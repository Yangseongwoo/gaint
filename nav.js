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
  
  document.querySelectorAll('.nav2 li a').forEach(link => {
              link.addEventListener('mouseover', function() {
                  document.querySelectorAll('.nav2 li').forEach(item => {
                      if (item !== this.parentElement) {
                          item.classList.add('inactive');
                      }
                  });
              });
  
              link.addEventListener('mouseout', function() {
                  document.querySelectorAll('.nav2 li').forEach(item => {
                      item.classList.remove('inactive');
                  });
              });
          });


          