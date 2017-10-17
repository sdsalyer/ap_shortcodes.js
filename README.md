# [ap_shortcodes.js](https://github.com/sdsalyer/ap_shortcodes.js)
## Actual Play Shortcodes for shortcode.js
_By Spencer @ [WispsOfTime.com](http://wispsoftime.com)_

A drop-in JavaScript solution for formatting your RPG actual-play reports. Add 3 lines to your website's `<head>` and you're good to go.

* Wrap your narrative bits in `[story]` tags
* Set die rolls apart, inline or block, with the `[dice]` tag.
* Hide mechanics and more behind expanding `[spoiler]` tags.

A fork of [shortcode.js](https://github.com/nicinabox/shortcode.js), which does all the heavy lifting, **ap_shortcodes.js** is simply definitions and styles for useful shortcodes to meet the most common actual play report formatting needs.

See **example.html** for ... _examples_... or check out this [Blogger demo site](https://actualplayformat.blogspot.com/#example).

### Usage

1. Include references to **shortcode.js**, **ap_shortcodes.js**, and **ap_shortcodes.css** in your page's `<head>` tag. If you want to use the defaults, simply paste in the below from the RawGit CDN service. If you anticipate making changes, you may want to download the files and include them from your site, instead.

```html
    <script src="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/js/shortcode.js"></script>
    <script src="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/js/ap_shortcodes.js"></script>
    <link rel="stylesheet" href="https://cdn.rawgit.com/sdsalyer/ap_shortcodes.js/master/css/ap_shortcodes.css"></link>
```

2. (Optional) Alter **ap_shortcodes.js** to add/edit shortcodes. Alter **ap_shortcodes.css** to add/edit the associated styles -- alternatively, you could simply override them by defining your own styles in the `<head>` below the CSS `<link>` tag.
3. Use the shortcodes in your actual play report, then ooh and ahh at the results!

### Examples

```
[note]This won't do a thing because we didn't create a note shortcode[/note]

[story]This is my story,
this is my song[/story]

[story title="This is my story..." style="fancy"]
This is my [fancy!] song, written by a [fancy!] bard, which sings the song of six pence for the joy of all around.[/story]

[dice]These are my dice, these are my polyhedrals[/dice]

And these are [dice style="inline"]my inline mechanics[/dice], which are a wonderful treat.

[spoiler title="Don't click here, or you might learn a secret!"]
    The best-laid schemes o' mice an' men
    Gang aft agley
    
            -- To a Mouse, Robert Burns
[/spoiler]
```
  
### Features

* Drops in to _any_ site where you can add JavaScript and CSS. 
* Tailored to supplying shortcodes for role-playing game "actual play" reports.

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

Contribute your shortcodes and styles in the [Wiki](https://github.com/sdsalyer/ap_shortcodes.js/wiki), or if you run into bugs, create an [issue](https://github.com/sdsalyer/ap_shortcodes.js/issues) ticket. If you want to contribute to the code, create a topic/feature branch and submit a pull request to the `develop` branch (I tend to follow the <a href="http://nvie.com/posts/a-successful-git-branching-model/">nvie method here</a>), or just shoot me a patch file.

If there is an issue in shortcode.js, consider [contributing there](https://github.com/nicinabox/shortcode.js/blob/master/CONTRIBUTING.md).

#### License
Licensed under the [MIT License](https://opensource.org/licenses/MIT), inherited from [shortcode.js](https://github.com/nicinabox/shortcode.js).
