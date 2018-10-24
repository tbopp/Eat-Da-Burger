// jQuery functions for capturing button click events, including devouring available burgers and adding a new burgers to the list. PUT and POST requests, then reload the page to see the new list.

// Making sure the DOM is completely loaded and ready to be used before running the script.
$(() => {

    // Click event for devouring a burger using a PUT request to update devoured state, moving burger to devoured list.
    $(".devour-btn").on("click", function (event) {
        let id = $(this).data("id");
        let newDevouredState = {
            devoured: true
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            location.reload();
        });

        console.log("Burger ID: ", id)
        console.log("Devoured?: ", newDevouredState)
        console.log("Well that was fast. Could you even taste it?!");
    });

    // Click event for re-ordering of a devoured burger using a PUT request to update devoured state, moving burger to Hot'n Fresh list. 
    $(".order-btn").on("click", function (event) {
        let id = $(this).data("id");
        let newDevouredState = {
            devoured: false,
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            location.reload();
        });

        console.log("Burger ID: ", id)
        console.log("Devoured?: ", newDevouredState)
        console.log("Hot'n Fresh!!");
    });

    // Click event for adding a new burger to the database using a POST request to create a new burger object (name and devoured state).
    $("#submit-burger").on("click", event => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#add-burger-box").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
        console.log(`New burger: ${newBurger} is hot'n fresh out the kitchen!`);
    });
});