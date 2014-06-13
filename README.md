#Wordly!
Found live at: [http://www.catherinegoneill.com/wordly/index.html](http://www.catherinegoneill.com/wordly/index.html])

###GENERAL INFO
This is a simple game inspired by MadLibs.  It's a single-page application.  The stories are contained within the HTML.  The stories are chosen randomly each time the player starts a new game.  The form is then created via jQuery for each game.  Prior to the creation of the form, it is a completely empty div in the html.  After the player completes the form, the submissions are temporarily saved in an array and then inputted into the story.

###BACKGROUND
I was previously a teacher and made this for my students while I was learning JavaScript.

###JQUERY
To limit the number of times jQuery traversed the DOM, I tried to use variables for the jQuery objects as much as possible.

###CSS
The site has some simple responsiveness.  I used Google Fonts Signika Negative and Reenie Beanie.  I used a background texture called crossword.png on the main content div from [Subtle Patterns](http://subtlepatterns.com/?s=crossword.png) via [Transparent Textures](http://www.transparenttextures.com/).

###FORMAT OF STORIES
Currently there are only two stories.  They each are contained within a div with the id's text1 and text2.  Each additional story should be given id's following that pattern, i.e. text3, text4.  Because of the structure of choosing random games, there should not be a text0.  To add additional stories, the title of the story should be in an h3.  The text of a story should be a p.  Each blank should be a span containing no text with the following html format:
`<span class="blank" id="blank0" title="adjective"></span>`.  The title attribute is used to create the label in the form.  The id's are index-values.  The first should be blank0, blank1 for the second, etc.  If a new story is inserted into the HTML in the correct format with the correct div id, the JavaScript file will need no additional changes.
```html
<div id="text1">
	<h3>The Cutest Puppy</h3>
	<p>Today, I walked by the pet store.  I saw a very 
		<span class="blank" id="blank0" title="adjective"></span> puppy.  The puppy was chewing on a(n) 
		<span class="blank" id="blank1" title="singular noun"></span>.  When he saw me, he wagged his tail 
		<span class="blank" id="blank2" title="adverb"></span>. 
</div>
```
