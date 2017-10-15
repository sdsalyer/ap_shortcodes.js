/**
 * Actual Play Shortcodes for shortcode.js
 *
 * Exemplified here on Blogger, but will work on 
 * any HTML page alongside shortcode.js
 * <https://github.com/nicinabox/shortcode.js>
 *
 * @author Spencer @ WispsOfTime.com
 * @date 2017-10-12
 */

// This event listener will run the shortcode parsing as soon as 
// all the HTML (DOM) has been read.
document.addEventListener("DOMContentLoaded", function(event) {

	// Here is where we create our shortcodes, 
	// We can pass in any element to parse it alone: 
	//     new Shortcode(document.getElementById("Blog1"), {
	// But, we'll use the body element by default
	new Shortcode(document.body, {
		
		// Our [story] shortcode
		story: function(done) {
			if (this.contents === undefined)
			{
				console.error("Tag error: " + this.name + " > " + this.tag);
				return;
			}

			var $story = this.contents;

			// We'll add some storybook flair to narrative elements
			var $style = "";
			var $title = "";
			if(typeof this.options !== "undefined")
			{
				if(typeof this.options.style !== "undefined")
				{
					if(this.options.style.toLowerCase() === "fancy")
					{
						$style = " fancy";
					}
				}

				if(typeof this.options.title !== "undefined")
				{
					var $tmp = this.options.title.trim();
					if($tmp.length > 0)
					{
						$title = $tmp;
						$title = "<header class=\"ap_story_title\">" + $title + "</header>";
					}
				}
			}

			$story = "<section class=\"ap_story_wrapper\">" + $title + "<div class=\"ap_story" + $style + "\">" + $story + "</div>";

			return $story;
		},

		// Our [dice] shortcode
		dice: function(done) {
			if (this.contents === undefined)
			{
				console.error("Tag error: " + this.name + " > " + this.tag);
				return;
			}

			var $dice = this.contents;
			
			// We'll handle the style attribute, accepting 
			// either "inline" or "block", defaulting to block.
			var $style = "block";
			if(typeof this.options !== "undefined")
			{
				if(typeof this.options.style !== "undefined")
				{
					if(this.options.style.toLowerCase() === "inline")
					{
						$style = "inline";
					}
				}
			}
			
			$dice = "<mark class=\"ap_dice ap_dice_" + $style + "\">" + $dice + "</mark>";

			return $dice;
		},

		// Our [spoiler] shortcode
		spoiler: function(done) {
			if (this.contents === undefined)
			{
				console.error("Tag error: " + this.name + " > " + this.tag);
				return;
			}

			var $spoiler = "";
			
			// This will display the given title or a default message
			var $title = "Spoiler: Click to reveal.";
			if(typeof this.options !== "undefined")
			{
				if(typeof this.options.title !== "undefined")
				{
					var $tmp = this.options.title.trim();
					if($tmp.length > 0)
					{
						$title = $tmp;
					}
				}
			}
			
			$spoiler += "<aside class=\"ap_spoiler_wrapper\" onclick=\"toggleSpoiler(this)\">";
			$spoiler += "<div class=\"ap_spoiler_title ap_spoiler_expand\">" + $title + "</div>";
			$spoiler += "<div class=\"ap_spoiler_contents\">" + this.contents + "</div>";
			$spoiler += "</aside>";

			return $spoiler;
		}
	});

});

// This function toggles the spoiler shortcodes open/closed
function toggleSpoiler($el) {
	var $action = ($el.childNodes[0].classList[1] === 'ap_spoiler_expand' ? 'expand' : 'collapse');
	$el.childNodes[1].style.display = ($action === "expand" ? 'initial' : 'none');
	$el.childNodes[0].classList.remove($action === "expand" ? 'ap_spoiler_expand' : 'ap_spoiler_collapse');
	$el.childNodes[0].classList.add($action === "expand" ? 'ap_spoiler_collapse' : 'ap_spoiler_expand');

}