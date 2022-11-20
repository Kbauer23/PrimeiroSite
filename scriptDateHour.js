
$('input').click(function () {
  let dates
  $.ajax({
    type: "GET",
    url: " https://worldclockapi.com/api/json/est/now",
    data: " ",
    success: function (data) {


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
