'use strict';
{

  window.addEventListener('load', function() {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function() {
      if ($menu.classList.contains ('is-show')) {
        $menu.classList.remove('is-show');
      } else {
        $menu.classList.add('is-show');
      }
    });
  });




  // slider

  //画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
  var responsiveImage = [//PC用の画像
    { src: './img/index/tachiaraiDSC02717.jpg'},
    { src: './img/index/susipaku211-app90994.jpg'},
    { src: './img/index/MAR88_meneko20140113.jpg'}
  ];
} else {
  var responsiveImage = [//タブレットサイズ（768px）以下用の画像
    { src: './img/index/tachiaraiDSC02717.jpg' },
    { src: './img/index/susipaku211-sp.jpg' },
    { src: './img/index/MAR88_sp.jpg' }
  ];
}

//Vegas全体の設定

$('#slider').vegas({
overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
delay: 10000,//スライド間の遅延をミリ秒単位で。
animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
slides: responsiveImage,//画像設定を読む
//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});








}