$(function(){

	$('.new-todo').keydown(function(e){
		if(e.which == 13){

			var task = $(".new-todo").val();
			
			if(!task) return false;

			buildRun(task).appendTo("#todo-list");

			$('.new-todo').val("").focus();

			$("h2 span").html($('#todo-list li').length);
		}

	});

});

function buildRun(msg){

	$("#wrap h2").css({'display':'block'});

	var task = $("<span>").html(msg);

	var checkbox = $("<input type='checkbox'>").click(function(){
		
		var $currentListItem = $(this).closest('li').find('span');
		
		if($(this).is(":checked")){
			$(this).parent().prependTo("#done");
		
		}else{
			$(this).parent().appendTo("#tasks");
		}

		$("h2 span").html($("#tasks li").length);

	});

	var del = $("<a href='#' class='del'>&times</a>").click(function(){
		$currentListItem = $(this).closest('li');
		$currentListItem.remove();
		$("h2 span").html($('#todo-list li').length);
	});

	return $("<li>").append(checkbox).append(task).append(del);
}