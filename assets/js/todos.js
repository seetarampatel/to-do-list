// Check off any todo by clicking it with 'on' event listener
$("ul").on("click", "li", function() {
	$(this).toggleClass("selected");
});

// Clicked on x to delete todo
// Here "span" parameter triggers when any span of ul is clicked
$("ul").on("click", "span", function(event) {
	// The parent() method will select the parent element
	$(this).parent().fadeOut(function() {
		// Here this will refer to the $(this).parent(), because we define it in the function
		$(this).remove();
	});
	// This below method will stop the all event listeners bubbling up to the parent element
	event.stopPropagation();
});

// This will take the input from user and add it to the toDoList ad new todo at the end of existing todo
$("input[type = 'text']").keypress(function(event) {
	// grabbing the new todo text from input
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// This will display and hide the input screen
$(".fa-plus").on("click", function() {
	$("input[type = 'text']").fadeToggle();
});