function show_popap(id_popap) {
  var id = "#" + id_popap;
  $(id).addClass('active');
}

$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
});