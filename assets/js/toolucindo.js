/*Script Tooltip*/
	$(document).ready(function() {
		$("a.item-molde").click(function(){
			$(this).next("div.description-tooltip").fadeIn();
			$("div.bg-molde").fadeIn();
			$(this).parent("div.molde-element").addClass( "myClass-top" );
		});
	// Close -->
		$("a.close, div.bg-molde").click(function(){
			$("div.description-tooltip").fadeOut();
			$("div.bg-molde").fadeOut();
			$("div.molde-element").removeClass( "myClass-top" );
		});
		// Help -->
		if((".help").length > 0){ 
			first_element = $(".help[data-position=1]");
			first_element.children("a.item-molde").trigger("click");
		}
		// Btn ok -->
		$(".botao-ok").click(function(){
			curr_pos = $(this).parents(".help").attr("data-position");
			next_pos = parseInt(curr_pos) + 1;
			next_element = $(".help[data-position=" + next_pos + "]");
			$("a.close, div.bg-molde").trigger("click");
			next_element.children("a.item-molde").trigger("click");
		});
	});
