// トップ画像のフェードイン機能
// ---------------------------------------------------
$(document).on('turbolinks:load', function(){
   $('.home-image').fadeIn(2300);
});
// ---------------------------------------------------

// フェードイン機能
// ---------------------------------------------------

$(document).on('turbolinks:load', window).scroll(function(){
   $('.home-main-1, .image-1, .text-1, .image-2, .text-2, .image-3, .text-3, .voice-text, .news-text, .home-main-2-title p, .home-main-3-title p, .home-main-4-title p, .home-main-5-list').each(function(){
      let dummy = $(this).offset().top,
      scroll = $(window).scrollTop(),
      // スクロールの量
      windowHeight = $(window).height();
      if (scroll > dummy - windowHeight + 70){
      // スクロールした量 > 要素からtopまでの高さ - ブラウザの高さ + 100
         $(this).addClass('scrollin');
         // scrollinクラスを追加する
      }
   });
});


// $(window).scroll(function(){
//    $('.home-main-1, .image-1, .text-1, .image-2, .text-2, .image-3, .text-3, .voice-text, .news-text, .home-main-5-list').each(function(){
//       let dummy = $(this).offset().top,
//       scroll = $(window).scrollTop(),
//       // スクロールの量
//       windowHeight = $(window).height();
//       if (scroll > dummy - windowHeight + 70){
//       // スクロールした量 > 要素からtopまでの高さ - ブラウザの高さ + 100
//          $(this).addClass('scrollin');
//          // scrollinクラスを追加する
//       }
//    });
// });
// ---------------------------------------------------

// ホバーをした際の文言変更
// ---------------------------------------------------
// update by matsushita 2020/1/23 about turbolinks:load
// $(document).on('turbolinks:load', window).scroll(function(){
$(window).on('turbolinks:load', function(){
   $('.btn-1 a').hover(function(){
      $(this).html('Click').css('padding', '10px 50px');
   }, function(){
      $(this).html('新規登録する').css('padding', '10px 20px');
   });
});

// update by matsushita 2020/1/23 about turbolinks:load
// $(document).on('turbolinks:load', window).scroll(function(){
$(window).on('turbolinks:load', function(){
   $('.btn-2 a').hover(function(){
      $(this).html('Click').css('padding', '10px 73px');
   }, function(){
      $(this).html('お問い合わせをする').css('padding', '10px 20px');
   });
});
// ---------------------------------------------------