$(document).ready(function () {
  $(".apptInput form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var date = $("#date").val();
    var startTime = $("#start-time").val();
    var endTime = $("#end-time").val();

    $("#confName").text(name);
    $("#confDate").text(date);
    $("#confStart").text(startTime);
    $("#confEnd").text(endTime);

    $(".confirmation").show();
  });
});