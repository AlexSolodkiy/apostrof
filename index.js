// var countDownDate = new Date("July 15, 2023 05:00:00").getTime();

// // Обновляйте обратный отсчет каждые 1 секунду
// var x = setInterval(function() {

//   // Получить сегодняшнюю дату и время
//   var now = new Date().getTime();
    
//   // Найдите расстояние между моментом сейчас и датой обратного отсчета
//   var distance = countDownDate - now;
    
//   // Расчеты времени для дней, часов, минут и секунд
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Выведите результат в виде элемента с id="demo"
//   document.getElementById("time").innerHTML =  hours + ": "
//   + minutes + ": " + seconds ;
    
//   // Если обратный отсчет закончился, напишите какой-нибудь текст
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML = "EXPIRED";
//   }
// }, 1000);

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();


  if (scroll >= 2100) {

      $(".ent-cir-pos").addClass("ent-cir");
      $(".ent-cir-pos1").addClass("ent-cir1");
  }
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(function() {
          setTimeout(function() {
              $(".n-blc-num1").removeClass("n-blc_active");
          }, 1000);
            setTimeout(function() {
              $(".n-blc-num2").removeClass("n-blc_active");
          }, 1500);
            setTimeout(function() {
              $(".n-blc-num3").removeClass("n-blc_active");
          }, 2000);
            setTimeout(function() {
              $(".n-blc-num4").removeClass("n-blc_active");
          }, 2500);
            setTimeout(function() {
              $(".n-blc-num5").removeClass("n-blc_active");
          }, 3000);
            setTimeout(function() {
              $(".n-blc-num6").removeClass("n-blc_active");
          }, 3500);
         
        });
      
      
  }
});

$(function() {
  setTimeout(function() {
      $(".sales-img5").removeClass("sales-img5_active");
  }, 500);
  setTimeout(function() {
      $(".sales-img1").removeClass("sales-img1_active");
  }, 1000);
  setTimeout(function() {
      $(".sales-img2").removeClass("sales-img2_active");
  }, 1000);
  setTimeout(function() {
      $(".sales-img3").removeClass("sales-img3_active");
  }, 800);
 
});