
$('input').click(function () {
  let dates
  $.ajax({
    type: "GET",
    url: " http://worldclockapi.com/api/json/est/now",
    data: " ",
    success: function (data) {
      // let obj = {
      //   $id: "1",
      //   currentDateTime: "2022-11-19T00:31Z",
      //   currentFileTime: 133132914800377020,
      //   dayOfTheWeek: "Saturday",
      //   isDayLightSavingsTime: false,
      //   ordinalDate: "2022-323",
      // }

      dates = new Date(data.currentDateTime)
      console.log(dates)
      $("span").html((dates))
    },
    beforeSend: function () {
      $("div[name=info]").addClass("badge text-bg-info p-3")
      $("#bt").prop('value', 'Atualizar');
    }
  })

})


// function createRequest() {
//   try {
//     ;
//   } catch (trymicrosoft) {
//     try {
//       request = new ActiveXObject("Msxml2.XMLHTTP");
//     } catch (othermicrosoft) {
//       try {
//         request = new ActiveXObject("Microsoft.XMLHTTP");
//       } catch (failed) {
//         request = null;
//       }
//     }
//   }
//   if (request == null)
//     alert("Error creating request object!");

// }
// function getInformacaoQualquer() {
//   request = new XMLHttpRequest()
//   var url = "http://worldclockapi.com/api/json/utc/now"
//   request.open("GET", url, true);
//   request.onreadystatechange = atualizaPagina;
//   request.send(null);
//   let hourDate = document.querySelector('input[name=dh]')
// }

// function atualizaPagina() {

//   if (request.readyState == 4) {
//     if (request.status = 200) {
//       var respostaDoServidor = ((request.responseText));
//       hourDate = (JSON.respostaDoServidor)
//       console.log(respostaDoServidor)
//     }

//   }
// }




// function hd() {
//   let hourDate = document.querySelector('input[name=dh]')
//   let dh = new XMLHttpRequest()
//   let url = "http://worldclockapi.com/"
//   dh.open('GET', url, true)
//   console.log(1)
//   dh.onreadystatechange = function () {
//     if (dh.readyState == 4) {
//       if (dh.status = 200) {
//         hourDate.value = (parse(dh.responseText))
//         console.log(1)
//       }
//     }
//     dh.send()
//   }
// }
// hd()

