window.addEventListener('keydown', validar)
function validar() {
  let regexL = new RegExp('^[0-9]+$')
  $(function inputName() {
    let name = $("#name").val()

    if (name.length < 3 || name == null || regexL.test(name) == true) {
      $("#name").removeClass("is-valid")
      $("#name").addClass("is-invalid")
    }
    else {
      $("#name").addClass("is-valid")
      $("#name").removeClass("is-invalid")
    }
    localStorage.setItem('name', $("#name").val())

  })

  $(function genero() {
    let genero
    var radios = document.getElementsByName("genero")
    window.addEventListener('click', function () {
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          genero = radios[i].value
          console.log(genero)
          if (genero == 'Feminino') {
            console.log(1)
            localStorage.removeItem('generoM')
            localStorage.setItem('generoF', $("#generoF").val())
          } else {
            console.log(2)
            localStorage.removeItem('generoF')
            localStorage.setItem('generoM', $("#generoM").val())
          }
        }
      }
    })




  })

  let nasc = $("#nasc").val()
  nasc.replace("/", "-")
  let nasc_array = nasc.split("-")
  if (nasc_array[0].length != 4) {
    nasc = nasc_array[2] + "-" + nasc_array[1] + "-" + nasc_array[0];
  };
  let nascDate = new Date(nasc)
  let hoje = new Date()
  let idadeI = hoje.getFullYear() - nascDate.getFullYear()
  let m = hoje.getMonth() - nascDate.getMonth()
  localStorage.setItem('idade', idadeI.valueOf())



  $(function nasIdadeValidation() {
    if (nascDate.getFullYear() <= 2001 && nascDate.getFullYear() >= 1901 && nascDate.getFullYear() != null) {
      $("#nasc").addClass("is-valid")
      $("#nasc").removeClass("is-invalid")
    }
    else {
      $("#nasc").removeClass("is-valid")
      $("#nasc").addClass("is-invalid")
    }
  })

  $(function marca() {
    let marca = $("#marca").val()
    if (marca.length < 3 || marca == null || regexL.test(marca) == true) {
      $("#marca").removeClass("is-valid")
      $("#marca").addClass("is-invalid")
    }
    else {
      $("#marca").addClass("is-valid")
      $("#marca").removeClass("is-invalid")
    }
    localStorage.setItem('marca', $("#marca").val())
  })

  $(function modelo() {
    let model = $("#model").val()
    if (model.length < 3 || model == null || regexL.test(model) == true) {
      $("#model").removeClass("is-valid")
      $("#model").addClass("is-invalid")
    }
    else {
      $("#model").addClass("is-valid")
      $("#model").removeClass("is-invalid")
    }
    localStorage.setItem('modelo', $("#model").val())
  })


  $(function fabricationYear() {
    let anoF = $("#anoF")
    anoF.mask("9999", { reverse: true })
    if (anoF.val() <= hoje.getFullYear() && anoF != null && anoF.val() >= 1950) {
      $("#anoF").removeClass("is-invalid")
      $("#anoF").addClass("is-valid")
    } else {
      $("#anoF").addClass("is-invalid")
      $("#anoF").removeClass("is-valid")
    }
    localStorage.setItem('anoF', anoF.val())
  });

  $(document).ready(function () {
    let valor = $("#valueCar").val()
    if (valor != null) {
      $("#valueCar").addClass("is-valid")
    }

    $("#valueCar").maskMoney({
      prefix: 'R$', decimal: ",", thousands: "."
    })


    localStorage.setItem('valorC', String(valor))



  });

  $(document).ready(function () {
    let bcar = $("#carBonus")
    bcar.mask("99,99%", { reverse: true })
    if (bcar.val() <= "25,00%" && bcar.val() != null && bcar.val() > "00,00%") {
      $("#carBonus").removeClass("is-invalid")
      $("#carBonus").addClass("is-valid")
    }
    else {
      $("#carBonus").addClass("is-invalid")
      $("#carBonus").removeClass("is-valid")
    }
    localStorage.setItem('bonus', bcar.val())

  });
}



function mudarP() {
  window.location = "./resEx4.html"
}