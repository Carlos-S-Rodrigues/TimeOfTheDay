function loading() {
  var msg = window.document.getElementById('message')
  var img = window.document.getElementById('image')
  var date = new Date()
  var hour = date.getHours()
  var min = date.getMinutes()
  msg.innerHTML = `${hour} hours and ${min} minutes`
  if (hour >= 0 && hour < 12) {
    img.src = 'img/img01.png'
    document.body.style.background = '#abe329'
  } else if (hour >= 12 && hour <= 18) {
    img.src = 'img/img02.png'
    document.body.style.background = '#e38329'
  } else {
    img.src = 'img/img03.png'
    document.body.style.background = '#460d75'
  }
}
