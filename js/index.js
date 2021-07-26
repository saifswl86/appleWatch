let counter = 0;
let singleItem_price = 399;
$(document).ready(() => {
  $("#add_btn").click(() => {
    counter++;
    $("#item-counter").text(counter);
    $("#selected_items").text(counter);
    $("#single_product_price").text("$ " + singleItem_price);
    $("#total_price").text("$ " + counter * singleItem_price);
    $("#grand_total").text("$ " + counter * singleItem_price);
  });

  $(".cart").click(() => {
    $(".cart-body").css({
      width: "70%",
      visibility: "visible",
    });
  });

  $("#close").click(() => {
    $(".cart-body").css({
      width: "0%",
      visibility: "hidden",
    });
  });
});
