function showInfo() {
  var api_url = 'https://script.google.com/macros/s/AKfycbwSmhocawGOXs-e0cdiJ_HhkThItCl6U6qBCpBY8xRs8UUAZHwDWZ1BSFR6MCX-SVcWVw/exec';

  fetch(api_url)
    .then(function(fetch_data) {
      return fetch_data.json();
    })
    .then(function(json) {
      // URLのクエリ文字列を取得
      const queryString = window.location.search;
      // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
      const params = new URLSearchParams(queryString);
      // 特定のパラメータの値を取得
      const i = params.get('n');
      document.getElemenById("date").innerHTML = json[Number(i)].date
    })
}
