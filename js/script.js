$(document).ready(function () {
  $(document).on("submit", "form", function () {
    let price = $("input[name='license']:checked").val();
    let amount = $("select[name='number']").val();
    let total = price * amount;
    $(".total").html(
      "<span class='upper'>total:</span> " +
        total +
        "$<sup><span class='us'>US<span></sup>"
    );
    let output;
    if (price == 13) {
      output = "#1";
    } else if (price == 22) {
      output = "#2";
    } else {
      output = "#3";
    }
    $("#plan").html("Selected plan: " + output);
    return false;
  });
});
