let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

const currentYear = document.querySelector(".newYear")

let containerPassword = document.querySelector("#container-password")

let charset =
  "abcdefghijklmnopqrstuvwxyz0123456789!@#-$%§£¢*&()_+}}{][?/><ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let pass = ""

  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }
  containerPassword.classList.remove("hide")
  password.innerHTML = pass
  novaSenha = pass
}

async function copyPassword() {
  try {
    await navigator.clipboard.writeText(novaSenha)
    alert("Senha copiada com sucesso!")
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}

function currentFullYear() {
  const newYear = new Date().getFullYear()
  currentYear.textContent = newYear
}
currentFullYear()
