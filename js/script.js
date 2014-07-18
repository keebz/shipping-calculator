var shipment = {
  packageValue: function(){
    this.packageCost = (shipment.weightOfPackage * 2) + (shipment.distanceOfPackage * 0.05);
  }
}

$(function(){
  var counter = 0;
  var totalCost = 0;
  $("form").submit(function(event){
    event.preventDefault();
    shipment.weightOfPackage = $("input#packageWeight").val();
    shipment.distanceOfPackage = $("input#packageDistance").val();

    if (shipment.weightOfPackage !== "" && shipment.distanceOfPackage !== "" ){
    counter++;
    }

    $(".counter").text(counter);
    shipment.packageValue();
    totalCost += shipment.packageCost;
    $(".total").text("$" + totalCost.toFixed(2));
  })
});
