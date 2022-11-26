$(window).on('load', function () {
  getName();
  getAnoF();
  getBonus();
  getGenero();
  getIdade();
  getModel();
  getValorCar();
  getMarca();
  refazerForm();
  gohome();

})
function getName() {
  const nameP = localStorage.getItem("name")
  const nameT = document.querySelector('span[name=nameR]')
  nameT.innerHTML = nameP
  return nameP
}
function getGenero() {
  const generoLF = localStorage.getItem("generoF")
  const generoLM = localStorage.getItem("generoM")
  if (generoLM == null) {
    const genero = document.querySelector('span[name=genero]')
    genero.innerHTML = generoLF
    return generoLF
  } else {
    const genero = document.querySelector('span[name=genero]')
    genero.innerHTML = generoLM
    return generoLM
  }
}
function getIdade() {
  const idadec = localStorage.getItem("idade")
  const idadet = document.querySelector('span[name=idade]')
  idadet.innerHTML = idadec
  return idadec

}
function getMarca() {
  const marca = localStorage.getItem("marca")
  const marcaT = document.querySelector('span[name=marcaR]')
  marcaT.innerHTML = marca
  return marca
}
function getModel() {
  const modelo = localStorage.getItem("modelo")
  const modelot = document.querySelector('span[name=modeloR]')
  modelot.innerHTML = modelo
  return modelo
}
function getAnoF() {
  const anoF = localStorage.getItem("anoF")
  const anoFt = document.querySelector('span[name=anoFR]')
  anoFt.innerHTML = anoF
  return anoF
}
function getValorCar() {
  const valor = localStorage.getItem("valorC")
  const valort = document.querySelector('span[name=valorR]')
  valort.innerHTML = valor
  return valor
}
function getBonus() {
  const bonus = localStorage.getItem("bonus")
  const bonust = document.querySelector('span[name=bonusR]')
  bonust.innerHTML = bonus
  return bonus
}

function refazerForm() {
  $("#refaz").on('click', function () {
    localStorage.clear()
    window.location = './indexEx4.html'
  })
}
function gohome() {
  $("#home").on('click', function () {
    localStorage.clear()
    window.location = './index.html'
  })
}

$(function resvalidade() {
  const res = document.querySelector('span[name=resR] ')

  let valor = getValorCar()
  let anoF = getAnoF()
  let genero = getGenero()
  let idade = getIdade()
  let bonus = getBonus()

  valor = parseFloat(valor.substring(2).replace(".", "").replace(",", "."))
  bonus = parseFloat(bonus.substring(0).replace(".", "").replace(",", "."))
  bonus = (bonus / 100)
  if (anoF >= 2010) {
    valor = valor * 0.0125
    if (genero == 'Feminino') {
      valor = valor - (valor * 0.1)
      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
    else {
      valor = valor + (valor * 0.05)
      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
  } else if (anoF <= 2009 || anoF >= 2000) {
    valor = valor * 0.0175
    if (genero == 'Feminino') {
      valor = valor - (valor * 0.1)

      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }

    else {
      valor = valor + (valor * 0.05)
      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
  } else if (anoF <= 1999 || anoF >= 1980) {
    valor = valor * 0.02
    if (genero == 'Feminino') {
      valor = valor - (valor * 0.1)

      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
    else {
      valor = valor + (valor * 0.05)
      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
  } else {
    valor = valor * 0.0250
    if (genero == 'Feminino') {
      valor = valor - (valor * 0.1)

      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }

    else {
      valor = valor + (valor * 0.05)
      if (idade <= 30 || idade >= 60) {
        valor = valor + (valor * 0.2)
        res.innerHTML = valor - (valor * bonus).toFixed(2)
      }
      res.innerHTML = valor - (valor * bonus).toFixed(2)
    }
  }
})