$(document).ready(function(){
  $("#search-cidades").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tabela-cidades tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});