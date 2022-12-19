function cronometro() {
  let cro = document.getElementById('horas')
  var agora = new Date()
  var seg = agora.getSeconds()
  var seg = 60 - seg
  var min = agora.getMinutes()
  min = 60 - min
  var hora = agora.getHours()
  hora = 24 - hora
  var dia = agora.getDate()
  dia = 42 - dia
  cro.innerHTML = `${dia} e ${hora} e ${min} e ${seg}`
}

intervalTimer = setInterval(cronometro, 1000)
window.onload = intervalTimer
