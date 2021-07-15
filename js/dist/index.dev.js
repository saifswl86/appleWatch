"use strict";

var counter = 0;
var singleItem_price = 399;
$(document).ready(function () {
  $("#add_btn").click(function () {
    counter++;
    $("#item-counter").text(counter);
    $("#selected_items").text(counter);
    $("#single_product_price").text("$ " + singleItem_price);
    $("#total_price").text("$ " + counter * singleItem_price);
    $("#grand_total").text("$ " + counter * singleItem_price);
  });
  $(".cart").click(function () {
    $(".cart-body").css({
      width: "50%",
      visibility: "visible"
    });
  });
  $("#close").click(function () {
    $(".cart-body").css({
      width: "0%",
      visibility: "hidden"
    });
  });
});