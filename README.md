# BlackboardCardView

## How to use this

1. Choose a content area where you'd like to use Card View.
2. Create an item in that content area. Give it the name "Card Script". Using this name will allow the script to hide that item.
3. Use the HTML mode editor to set the item's content to the following code snippet.

~~~html
<script src="https://cdn.jsdelivr.net/gh/mmcr/BlackboardCardView/bbcardview.js" type="text/javascript"></script>
~~~

## Available Options

To change how cards are displayed, put the following options into the description field of the content item in question. Each option should be placed on its own line, ideally wrapped in a &lt;p&gt; tag by the Blackboard WYSIWYG editor. These "configuration" lines will be invisible when Blackboard edit mode is turned off.


<pre>Card Wrapper Class: <i>[ inset | striped ]</i></pre>
> Provides styling for the block element that contains the content item cards. While this needs to be placed in the description of a particular content item, it applies to all cards.


<pre>Card Label: <i>textual content for label</i></pre>
> The text provided here will be placed in small gray text above the actual name of the content item.

<pre>Card Image: <i>URL for the image</i></pre>
> The image at this URL will appear at the top of the content item card, above the content item's name and label.

<pre>Card Attic: <i>[ YES ]</i></pre>
> The attic is a header that appears at the very top of the card. Optionally, it can be drawn overtop the card itself. While other options control how the attic looks as well as its content, this option needs to be specified to enable the attic.

<pre>Card Attic Text: <i>text to appear in the attic</i></pre>
> This places the specified text in the card's attic.

<pre>Card Attic Icon: <i>Font Awesome class names for the desired icon</i></pre>
> Card View enabled the Font Awesome icon library. To include an icon in the attic, provide its Font Awesome class names. E.g. `fal fa-folder-open`. Note that any icons included will have a 1/2 rem right margin to space it from attic text.

<pre>Card Attic Class: <i>[ overlay-dark ]</i></pre>
> The options specified here controls how the card's attic is displayed. The "overlay-dark" option places the attic on top of the card image, with a translucent black background. Text color is automatically set to white.

<pre>Card Attic Style: <i>valid CSS style code</i></pre>
> Anything specified here is applied directly to the attic element, allowing control of its display through raw CSS.