$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();
    var address = $("input#address").val();
    // var result = (name1, name2, address);
    

    $(".firstName").text(name1);
    $(".lastName").text(name2);
    $(".address").text(address);

    // $("#output").show();

    $("#output").text(result);
  });
});