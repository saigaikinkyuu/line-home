$(function () {
  // liの数を取得
  const listItems = $("#product-table li").length;
  $("#product-table").each(function () {
    // 最初に表示させるliの数
    let num = 1,
      // 閉じた時に表示させるliの数
      closeNum = num;
    // 最初はもっと見るボタン表示、閉じるボタン非表示
    $(this).find(".js-btn-more").show();
    $(this).find(".js-btn-close").hide();
    // 5行目まで表示
    $(this)
      .find("li:not(:lt(" + num + "))")
      .hide();
    // もっと見るボタンがクリックされた時
    $(".js-btn-more").click(function () {
      // numに+5ずつしていく = 5行ずつ追加する
      num += 5;
      $(this)
        .parent()
        .find("li:lt(" + num + ")")
        .slideDown();
      // liの数よりnumが多い時、
      if (listItems <= num) {
        // もっと見るボタン非表示
        $(".js-btn-more").hide();
        // 閉じるボタン表示
        $(".js-btn-close").show();
        // 閉じるボタンがクリックされたら、
        $(".js-btn-close").click(function () {
          $(this)
            .parent()
            .find("li:gt(" + closeNum + ")")
            // 6行目以降は非表示
            .slideUp();
          // 閉じるボタンを非表示
          $(this).hide();
          // もっと見るボタン表示に
          $(".js-btn-more").show();
        });
      }
    });
  });
});
