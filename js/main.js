$(document).ready(function() {

	var $words_form_id = $('#words_form');
	var $startgame_id = $('#startgame');
	var $instructions_id = $('#instructions');
	var $text_id = $('#text');
	var $quitgame_id = $('#quitgame')
	var $showinstructions_id = $('#showinstructions')

	function select_random_game() {
		$(".active_game").removeClass("active_game");
		var number_of_games = $('.text div').length;
		var random_number = Math.floor((number_of_games * Math.random()) + 1);
		var active_game = '#text' + random_number;
		$(active_game).addClass("active_game")
		// console.log("The active game is " + active_game);
	}	

	function create_form() {
		$words_form_id.empty();
		var number_of_blanks = $('.active_game span').length;
		// console.log("There are " + number_of_blanks + " blanks.");
		var current_id;
		var current_blank;
		for (i=0; i<number_of_blanks; i++) {
			current_id = "word";
			current_blank = ".active_game #blank";

			$words_form_id.append("<label><p><span></span><input type='text' required /></p></label>");
				
			current_id += i;
			console.log("The current id for label span is " + current_id);				
			$("#words_form label:last-child span").attr('id', current_id);
			$("#words_form label:last-child input").attr('name', current_id);


			current_id = "#" + current_id;
			current_blank += i;
			console.log("The current blank we are accessing is " + current_blank);
			var label_name = $(current_blank).attr('title');
			console.log('The label is' + label_name)
			$(current_id).text(label_name);
		}//close for loop
		$words_form_id.append('<p><input type="submit" class="submit" value="SUBMIT"></p>');
	}



	$startgame_id.click(function() {
		$instructions_id.hide();
		$text_id.hide();
		select_random_game();
		create_form();
		$words_form_id.show();
		$startgame_id.hide();
		$showinstructions_id.show();
		$quitgame_id.show();
	})


	$words_form_id.submit(function(e){
	    var formdata = $(this).serializeArray();
	    console.log(formdata);
	    e.preventDefault();
	    for (var i=0; i<formdata.length; i++) {
	    	var word = formdata[i].value;
	    	var blank_id = '.active_game #blank' + i;
	    	$(blank_id).html(word);
	    }	
		$words_form_id.hide();
		$text_id.show();
		$(".text div").hide();
		$(".active_game").show();

		$quitgame_id.hide();
		$startgame_id.show();

	})

	$showinstructions_id.click(function() {
		$words_form_id.hide();
		$text_id.hide();
		$instructions_id.show();
		$showinstructions_id.hide();
		$startgame_id.show();
		$quitgame_id.hide();
	})

    $quitgame_id.click(function() {
		$words_form_id.hide();
		$text_id.hide();
		$instructions_id.show();
		$showinstructions_id.hide();
		$startgame_id.show();
		$quitgame_id.hide();
	})	

});