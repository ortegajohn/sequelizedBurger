


$(document).on("click",".devoure", function(event) {
    var id = $(this).data("id");
    console.log('devoure2:', id)

    var newDevoureState = {
        devoured: true
      };
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevoureState
      }).then(
        function() {
          console.log("changed devoured to", newDevoureState);
          // Reload the page to get the updated list
          location.reload();
        }
      );

});

$(document).on("click",".submit", function(event) {
    event.preventDefault();
    let null_check = $("#burg").val().trim();
    if(null_check != ""){

    

    var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
      };

      console.log(newBurger)

      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      }else{
        console.log("Nothing Entered")
      }
});

