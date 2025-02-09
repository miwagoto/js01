const apiKey = 'DEMO_KEY';

$(function () {
  $('#update').click(function (event) {
    let param = {
      date: $('#image-date').val(),
      api_key: apiKey
    };

    console.log(param);

    // AjaxによりWeb APIを呼び出す処理
    $.ajax({
      type: 'GET',                                    // GETで送信
      data: param,                                    // リクエストパラメーター
      url: 'https://api.nasa.gov/planetary/apod',     // URL
      dataType: 'json',                              // データ型 JSON
    })
    .done(function (res) {
      // 成功した場合
      console.log(res);        // レスポンスフィールドの内容をログに表示

      // 画像、タイトル、説明を設定
      $('#apod-image').attr('src', res.url);
      $('#apod-title').html(res.title);
      $('#apod-desc').html(res.explanation);

      // 著作権情報と日付を追加表示
      let copyrightText = res.copyright ? `Copyright: ${res.copyright}` : 'Copyright: Not available';
      let dateText = `Date: ${res.date}`;
      $('#apod').append(`<div id="apod-copyright">${copyrightText}</div>`);
      $('#apod').append(`<div id="apod-date">${dateText}</div>`);
    })
    .fail(function (res) {
      // 失敗した場合
      $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');
    });
  });
});