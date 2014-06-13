$(document).ready(function() {
//
//GLOBAL VARIABLES TO LIMIT TIMES JQUERY TRAVERSES THE DOM
//
	var $words_form_id = $('#words_form');
	var $startgame_id = $('#startgame');
	var $instructions_id = $('#instructions');
	var $text_id = $('#text');
	var $quitgame_id = $('#quitgame')
	var $showinstructions_id = $('#showinstructions')
	var $text_id_div = $('#text div');

	function play_game() {
//
//PICK A RANDOM STORY FOR THE GAME AND FIND NUMBER OF BLANKS IN STORY	
//	
		// choose a random text for the game 
		var number_of_games = $text_id_div.length;
		var random_number = Math.floor((number_of_games * Math.random()) + 1);
		var active_game_id = '#text' + random_number;
		var $active_game_id = $(active_game_id);

		$words_form_id.empty();

		// find all of the blank spans in the active game
		var find_spans_query = active_game_id + " span"
		var number_of_blanks = $(find_spans_query).length;

//
//CREATE FORM
//
		for (i=0; i<number_of_blanks; i++) {
			
			//This section adds one entry into the form each time through the loop.
			//current_id is something like word2 and is put in id as span and name on the input field
			var current_id = "word" + i; 
			$words_form_id.append("<label><p><span id=" + current_id +"></span><input type='text' name=" + current_id + "required /></p></label>");


			//now we pull the title from the blank in the story and use that to make the label in the span
			// the word id's in the form and blank id's in the story match -- i.e. word2 goes with blank2
			current_id = "#" + current_id;
			var current_blank = active_game_id + " #blank" + i;
			var label_name = $(current_blank).attr('title');
			$(current_id).text(label_name);
		};//close for loop
		
		//add the submit button
		$words_form_id.append('<p><input type="submit" class="submit" value="SUBMIT"></p>');

//		
//WHEN FORM IS SUBMITTED, EACH WORD IS PUT IN ARRAY AND THEN INTO THE STORY
//
		//blank_id in this for loop is the same as current_blank above, but needs to be redefined in each for loop anyways
		$words_form_id.submit(function(e){
		    var formdata = $(this).serializeArray();
		    e.preventDefault();
		    for (var i=0; i<formdata.length; i++) {
		    	var word = formdata[i].value;
		    	var blank_id = active_game_id + ' #blank' + i;
		    	$(blank_id).html(word);
		    };	
//
//SHOW AND HIDE APPROPRIATE PARTS OF THE PAGE WHEN FORM SUBMITTED 
// 
			$words_form_id.hide();
			$text_id.show();
			$text_id_div.hide();
			$active_game_id.show();
			$quitgame_id.hide();
			$startgame_id.show();
		});
	};

//
//INSTRUCTIONS FOR THREE MAIN BUTTONS
//
	$startgame_id.click(function() {
		$instructions_id.hide();
		$text_id.hide();
		play_game();
		$words_form_id.show();
		$startgame_id.hide();
		$showinstructions_id.show();
		$quitgame_id.show();
	});

	$showinstructions_id.click(function() {
		$words_form_id.hide();
		$text_id.hide();
		$instructions_id.show();
		$showinstructions_id.hide();
		$startgame_id.show();
		$quitgame_id.hide();
	});

    $quitgame_id.click(function() {
		$words_form_id.hide();
		$text_id.hide();
		$instructions_id.show();
		$showinstructions_id.hide();
		$startgame_id.show();
		$quitgame_id.hide();
	});	

});