var head = document.getElementsByTagName("head")[0];

if (!document.getElementById('FontAwesome')) {
	var link = document.createElement("link");
	Object.entries({
		"rel": 		"stylesheet",
		"id": 		"FontAwesome",
		"href": 		"https://pro.fontawesome.com/releases/v5.12.0/css/all.css",
		"integrity":	"sha384-ekOryaXPbeCpWQNxMwSWVvQ0+1VrStoPJq54shlYhR8HzQgig1v5fas6YgOqLoKz",
		"crossorigin":	"anonymous"
	}).forEach( function([key,val]) { link.setAttribute(key, val) })
	head.appendChild(link);
}


if (!document.getElementById('CustomStyles')) {
    var style = document.createElement("style");
    Object.entries({
	    "type": 		"text/css",
	    "id": 		"CustomStyles"
    }).forEach( function([key,val]) { style.setAttribute(key, val) })
    style.appendChild(document.createTextNode(`
div#containerdiv.edge-to-edge {
border-left:none;
border-right:none;
margin:0;
padding-left:1.5rem;
padding-top:2.5rem;
}

div#containerdiv.inset {
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.5+0,0+100 */
background: -moz-linear-gradient(top,  rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
box-shadow:0rem 0rem 1rem rgba(0,0,0,.5) inset;	
}

div#containerdiv.striped {
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAABdJREFUGBljYCAA7t69+x+vklEF8OABAP41IEetkuhTAAAAAElFTkSuQmCC) repeat;	
}

ul#content_listContainer.contentList.cards {
display:flex;
padding:0.5rem;
flex-wrap:wrap;
}

ul#content_listContainer.contentList.cards li.liItem.read {
flex: 0 0 25rem;
margin: 1rem;
padding:2rem;
border: none;
border-radius: 0.35rem;
box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.05);
background:white !important;	
}

ul#content_listContainer.contentList.cards li.liItem.read div.attic {
margin:-2rem -2rem 2rem;
padding:0.75rem;
background:#eee;
border-top-left-radius:0.35rem;
border-top-right-radius:0.35rem;
}


ul#content_listContainer.contentList.cards li.liItem.read:hover {
background:white !important;	
}


ul#content_listContainer.contentList.cards li.liItem.read img.item_icon {
display:none;
}

ul#content_listContainer.contentList.cards li.liItem.read div.header {
background-size:cover !important;
background-repeat:no-repeat;
margin:-2rem -2rem 2rem;
border-top-left-radius:0.35rem;
border-top-right-radius:0.35rem;
height:14rem;

}

div.attic + div.header {
border-radius:0 !important;
}

ul#content_listContainer.contentList.cards li.liItem.read div.item {
padding-left:0;
}

ul#content_listContainer.contentList.cards li.liItem.read div.item div.card-label {
color:#777;
}

ul#content_listContainer.contentList.cards li.liItem.read div.item h3 {
font-size:1.75rem;
}

ul#content_listContainer.contentList.cards li.liItem.read div.item h3 a,ul#content_listContainer.contentList.cards li.liItem.read div.item h3 a span {
text-decoration:none !important;
}

ul#content_listContainer.contentList.cards li.liItem.read:hover div.item h3 a, ul#content_listContainer.contentList.cards li.liItem.read:hover div.item h3 a span {
text-decoration:underline !important;
}

ul#content_listContainer.contentList.cards li.liItem.read div.details {
padding-left:0;
}
    `))
    head.appendChild(style);
}
let editingStatusElement = document.getElementById('statusText')
if ((editingStatusElement == null) || (editingStatusElement.innerText == "OFF")) {
    let wrapperClass = ""
    Array.from(document.getElementsByClassName('liItem read')).forEach(function(x) {
	    if (x.querySelector('h3 span[style]').innerText == "Card Script") {
		    x.setAttribute('style', 'display:none;')
		    return
	    }
	    let vtbe = x.querySelector('.vtbegenerated')
	    try {
			if (wrapperClassElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Wrapper Class:/) })) {
			    let wrapperClassMatches = wrapperClassElement.innerText.match(/:\s+(.+)/)
			    wrapperClass = wrapperClassMatches[1]
			    wrapperClassElement.remove()
		    }


			if (labelElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Label:/) })) {
				let labelMatches = labelElement.innerText.match(/:\s+(.+)/)
				let label = document.createElement("div")
				label.addClassName('card-label')
				label.appendChild(document.createTextNode(labelMatches[1]))
				x.querySelector('div.item').insertBefore(label, x.querySelector('h3'))
				labelElement.remove()
			}
			
			if (imageElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Image:/) })) {
				let imageMatches = imageElement.innerText.match(/:\s+(.+)/)
				let image = document.createElement("div")
				Object.entries({
					"style": 		`background:url(${imageMatches[1]});`,
					"class": 		"header"
				}).forEach( function([key,val]) { image.setAttribute(key, val) })
				
				x.prepend(image)
				imageElement.remove()
			}

			if (atticElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Attic:.+YES$/) })) {
				let atticStyle, atticText
				
				if (atticStyleElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Attic Style:/) })) {
					let atticStyleMatches = atticStyleElement.innerText.match(/:\s+(.+)/)
					atticStyle = atticStyleMatches[1]
					atticStyleElement.remove()
				}
				if (atticTextElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Attic Text:/) })) {
					let atticTextMatches = atticTextElement.innerText.match(/:\s+(.+)/)
					atticText = atticTextMatches[1]
					atticTextElement.remove()
				}


				let atticMatches = atticElement.innerText.match(/:\s+(.?)/)
				let attic = document.createElement("div")
				Object.entries({
					"style": 		atticStyle ? atticStyle : "",
					"class": 		"attic"
				}).forEach( function([key,val]) { attic.setAttribute(key, val) })
				if (atticText) {
					attic.appendChild(document.createTextNode(atticText))
				}
				
				x.prepend(attic)					
				atticElement.remove()

				if (atticIconElement = vtbe.childElements().find(function(y) { return y.innerText.match(/^Card Attic Icon:/) })) {
					let atticIconMatches = atticIconElement.innerText.match(/:\s+(.+)/)
					let atticIcon = document.createElement("i")
					Object.entries({
						"class": 		atticIconMatches[1],
						"style":		"margin-right:0.5rem;"
					}).forEach( function([key,val]) { atticIcon.setAttribute(key, val) })
					
					attic.prepend(atticIcon)
					atticIconElement.remove()
				}
			}				
			
	    } catch (e) {
			console.log(`error: ${e}`)    
	    }
    })
    
    
    document.getElementById('containerdiv').addClassName(`edge-to-edge ${wrapperClass}`)
    document.getElementById('content_listContainer').addClassName('cards')
    
}
