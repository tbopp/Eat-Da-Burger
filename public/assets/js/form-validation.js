// // Wait for the DOM to be ready
// (() => {
//     $("#burger-form").submit(() => {
//         let isFormValid = true;
    
//         $("#add-burger-box").each(() => {
//             if ($.trim($(this).val()).length == 0){
//                 $(this).addClass("highlight");
//                 isFormValid = false;
//             }
//             else{
//                 $(this).removeClass("highlight");
//             }
//         });
    
//         if (!isFormValid) alert("Sorry, I didn't get that. Please enter a name.");
    
//         return isFormValid;
//     });
// });

