# [ap_shortcodes.js](https://github.com/sdsalyer/ap_shortcodes.js)
## Actual Play Shortcodes for shortcode.js
_By Spencer @ [WispsOfTime.com](http://wispsoftime.com)_

A drop-in JavaScript solution for formatting your RPG actual-play reports. Add 3 lines to your website's &lt;head%gt; and you're good to go.

* Wrap your narrative bits in **[story]** tags
* Set die rolls apart, inline or block, with the **[dice]** tag.
* Hide mechanics and more behind expanding **[spoiler]** tags.

A fork of [shortcode.js](https://github.com/nicinabox/shortcode.js), which does all the heavy lifting, ap_shortcodes.js is simply definitions and styles for useful shortcodes to meet the most common actual play report formatting needs.

See **example.html** for ... examples.

### Usage

1. Include references to shortcode.js, ap_shortcodes.js, and ap_shortcodes.css in your page's &lt;head&gt; tag.

    <script src="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/js/shortcode.js"></script>
    <script src="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/js/ap_shortcodes.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/css/ap_shortcodes.css">

2. (Optional) Alter **ap_shortcodes.js** to add/edit shortcodes. Alter **ap_shortcodes.css** to add/edit the associated styles.
3. Use the shortcodes in your actual play report, then ooh and ahh at the results!

### What is an Actual Play and Why Should I Care?

An "actual play" report, or AP, is a blog or forum post sharing the details of a pen and paper role-playing adventure for others to enjoy online. These posts typically involve the expected blog-style setup and commentary amidst a mixture of narration and game play elements. It's not always easy or straightforward for blog authors to distinctly style (or obfuscate, if you're trying to avoid spoilers) these separate elements to better distinguish them for readability, aesthetics, or even dramatic effect.

If you post your actual plays online and are permitted to add JavaScript to your site, ap_shortcodes.js can simplify this task for you. It supplies the styles to distinguish the separate portions of your actual plays, packaged in BBCode / WordPress-style shortcodes, convyed by JavaScript.

### What are Shortcodes and Why Should I Care?

The term "shortcode" is attributed to WordPress, but if you've ever posted on an internet forum or message board then you've probably seen or used BBCode -- those tags in square brackets that allow you to format your post, insert a link, or create an enormous chain of animated gif emoticons to troll your pals.

Same idea here, but we're focused on a drop-in solution for most any blog or website which is tailor-made to actual play posts.

### Why JavaScript?

ap_shortcodes.js uses common client-side JavaScript to read your post and replace the shortcode tags, rather than server-side scripts that you may not have the expertise or permissions to implement, depending on your blogging platform or web host.

JavaScript has its drawbacks -- it runs every time the page loads, and could potentially be slow to parse your entire post, not to mention your site users could simply have it turned off entirely (in which case, the tags would be visible in your post and the styling would not be applied)!

That being said, very few users browse the web without JavaScript enabled and most modern browsers are extremely capable and fast in interpreting and executing JavaScript. Consider these things
  
### Features

**Inherited shortcode.js Features:**

* Supports multiple tag instances
* Supports single and start-end tags
* Supports multi-line tags
* Supports asynchronous callbacks
* Supports DOM or jQuery selectors
* Includes jQuery plugin definition
* Ignores tags inside `pre` and `code`

#### Supported browsers

Shortcode.js should work in any browser that supports `Function.prototype.bind` (Sorry IE7 & 8). If you need to support <IE9, try the [polyfill published in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility).

#### Contributing

Create a topic branch and submit a pull request.
If there is an issue in shortcode.js, consider [contributing there](https://github.com/nicinabox/shortcode.js/blob/master/CONTRIBUTING.md)

#### License
Licensed under the [MIT License](https://opensource.org/licenses/MIT), inherited from [shortcode.js](https://github.com/nicinabox/shortcode.js)