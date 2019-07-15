// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
/*The reason to do this is that we can only add a listener using jquery on elements that exist.When this code is run the first time we don't have all the li's.
We only have three so if we add a quick listener to li's it will only add to those three.
So what we do instead is add a listener to the entire UL parent.
So anytime we click on that you will this listener will fire.Except we add this second argument.
And what this code does is it says when an li is clicked inside of a ul, will run this code.
So we added a listener to an element that exists when the page loads.But we're really only listening to the li's that are clicked inside of that.*/

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//stops event from bubbling up to its parent elements.
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");//Let's start by clearing out the input.
//All we need to do is run dollar sign this vow and give it an empty string where it acts as a setter rather than just a getter.
//And that should now give us an empty input when I type a new to do every go on to do is added and this is cleared.
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});