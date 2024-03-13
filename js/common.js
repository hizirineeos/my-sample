jQuery(function() {
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowSm >= windowWidth) {
    var headerHeight = 90;
  } else {
    var headerHeight = 120;
  }
  var documentUrl = location.origin + location.pathname + location.search;
  jQuery(document).on('click', 'a[href*="#"]', function(event) {
    var anchor = event.currentTarget;
    var anchorUrl = anchor.protocol + '//' + anchor.host + anchor.pathname + anchor.search;
    if (documentUrl !== anchorUrl) {
      return true;
    }

    var speed = 500;
    var position = $(anchor.hash).offset().top - headerHeight;
    jQuery('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    event.preventDefault();
    return false;
  });
});

// ハンバーガーメニュー実装
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('menubtn');
  const navmenu = document.getElementById('navmenu');
  // ハンバーガーメニューをクリックしてリンクのリストを展開する
  function openMenu() {
    if (navmenu.classList.contains('checked')) {
      navmenu.classList.remove('checked');
    } else {
      navmenu.classList.add('checked');
    }
  }

  function closeMenu() {
    navmenu.classList.remove('checked');
  }

  checkbox.addEventListener('click', openMenu);
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#navmenu') && !event.target.closest('#menubtn')) {
      closeMenu();
    }
  });
});

// 画面幅が一定以上の場合にハンバーガーメニューを非表示にする
function toggleMenuDisplay() {
  var navmenu = document.getElementById('navmenu');
  if (window.innerWidth > 767) {
    navmenu.classList.remove('checked');
  }
}

// ページ読み込み時とウィンドウサイズ変更時にメニューの表示を制御する
window.addEventListener('load', toggleMenuDisplay);
window.addEventListener('resize', toggleMenuDisplay);