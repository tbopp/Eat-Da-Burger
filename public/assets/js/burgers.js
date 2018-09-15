// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured").on("click", function (event) {
        
        let id = $(this).data("id");
        console.log("Burger ID:", id)
        
        let newDevoured = $(this).data("newdevoured");
        console.log("Devoured state:", newDevoured);

        let newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function () {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log("Processing", newBurger);
        
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger: " + newBurger + ". Hot 'n fresh out the kitchen!");
            
            // Reload the page to get the updated list
            location.reload();
        });
    });
});