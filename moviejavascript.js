$(document).ready(function () {
  $("#submit-button").on("click", function (event) {
    event.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let newMovie = $("<div>").addClass("movie");

    newMovie.html(title + ": " + rating);

    let removeButton = $("<button>").addClass("remove-button").text("Remove");
    newMovie.append(removeButton);

    $("#movie-containter").append(newMovie);
  });

  $("#movie-containter").on("click", ".remove-button", function (event) {
    $(this).parent().remove();
  });
});
