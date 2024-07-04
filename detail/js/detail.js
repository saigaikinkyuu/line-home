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
      // 時間表記の変換
      var timeValue = json[Number(i)].time;
      var date = new Date(timeValue);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var timeValue = json[i].time;
      var date = new Date(timeValue);
      var month = (date.getMonth() + 1).toString().padStart(2, '0');
      var day = date.getDate().toString().padStart(2, '0');
      var hours = date.getHours().toString().padStart(2, '0');
      var minutes = date.getMinutes().toString().padStart(2, '0');
      var formattedTime = month + '月' + day + '日 ' + hours + ':' + minutes;
      document.getElementById("date").innerHTML = formattedTime
      document.getElementById("title").innerHTML = json[Number(i)].letter1 + " " + json[Number(i)].letter2
      document.getElementById("body").innerHTML = json[Number(i)].body
    })
}
showInfo()
