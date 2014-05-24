$(document).ready(function() {

	function select_random_game() {
		$(".active_game").removeClass("active_game");
		var number_of_games = $('.text div').length;
		var random_number = Math.floor((number_of_games * Math.random()) + 1);
		var active_game = '#text' + random_number;
		$(active_game).addClass("active_game")
		console.log("The active game is " + active_game);
	}	

	function create_form() {
		$('#words_form').empty();
		var number_of_blanks = $('.active_game span').length;
		console.log("There are " + number_of_blanks + " blanks.");
		var current_id;
		var current_blank;
		for (i=0; i<number_of_blanks; i++) {
			current_id = "word";
			current_blank = ".active_game #blank";

			// $('#words_form').append("<p><label><span></span><input type='text' required /></label></p>");
			$('#words_form').append("<label><p><span></span><input type='text' required /></p></label>");
				
			current_id += i;
			console.log("The current id for label span is " + current_id);				
			// $("#words_form p:last-child label span").attr('id', current_id);
			// $("#words_form p:last-child label input").attr('name', current_id);

			$("#words_form label:last-child span").attr('id', current_id);
			$("#words_form label:last-child input").attr('name', current_id);


			current_id = "#" + current_id;
			current_blank += i;
			console.log("The current blank we are accessing is " + current_blank);
			var label_name = $(current_blank).attr('title');
			console.log('The label is' + label_name)
			$(current_id).text(label_name);
		}//close for loop
		$("#words_form").append('<p><input type="submit" class="submit" value="SUBMIT"></p>');
	}



	$('#startgame').click(function() {
		$('.instructions').hide();
		$(".text").hide();
		select_random_game();
		create_form();
		$("#words_form, #even, #odd").show();
		$('#startgame').hide();
		$('#showinstructions').show();
		$('#quitgame').show();
	})


	$('#words_form').submit(function(e){
	    var formdata = $(this).serializeArray();
	    console.log(formdata);
	    e.preventDefault();
	    for (var i=0; i<formdata.length; i++) {
	    	var word = formdata[i].value;
	    	var blank_id = '.active_game #blank' + i;
	    	$(blank_id).html(word);
	    }	
		$("#words_form").hide();
		$(".text").show();
		$(".text div").hide();
		$(".active_game").show();

		$('#quitgame').hide();
		$('#startgame').show();

	})

	$('#showinstructions').click(function() {
		$("#words_form").hide();
		$(".text").hide();
		$('.instructions').show();
		$('#showinstructions').hide();
		$('#startgame').show();
		$('#quitgame').hide();
	})

    $('#quitgame').click(function() {
		$("#words_form").hide();
		$(".text").hide();
		$('.instructions').show();
		$('#showinstructions').hide();
		$('#startgame').show();
		$('#quitgame').hide();
	})	

});