$( document ).ready(function() {

  var json = {"items": [
   {
     "emoji": ":can:",
     "icon": "❤️"
   },
   {
    "emoji": ":deneme:",
    "icon": "👅"
  },
  {
   "emoji": ":ebeme:",
   "icon": "👅"
 },
 {
  "emoji": ":febeme:",
  "icon": "👅"
},
{
 "emoji": ":gebere:",
 "icon": "👅"
},
{
 "emoji": ":gebere1:",
 "icon": "👅"
}
  ]};

  var items = json.items;
  var autocomplete_init = false;
  var emojiIndex = 0;
  //var guncelString = document.getElementsByClassName("input")[1].innerText;
//get cursor position
  function doGetCaretPosition (element1)
{
        var caretOffset = 0;
        var range = window.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element1);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
        return caretOffset;
}

//keyup function
$(document).keyup(function( event ) {
	  var index = doGetCaretPosition(document.getElementsByClassName("input")[1]);
  	var guncelString = document.getElementsByClassName("input")[1].innerText;
    var emoji_string = guncelString.substring(0, index - 1);
    var emoji_start_pos = emoji_string.lastIndexOf(":");
    var emoji_filter = guncelString.substring(emoji_start_pos,index);
	if(event.key == ':')
	{
		//filter (index,document.getElementsByClassName("input")[1].innerText.indexOf(':') );
		//window.alert(": basıldı" + index + $('div.input').text());
		//create_autocomplete();
    if((index - guncelString.indexOf(':') == 2) ){
    //  event.preventDefault();
      filter_emojis(':',event);
    }
	}

  if((guncelString.indexOf(':') > -1) ){
    //event.preventDefault();
    filter_emojis(emoji_filter,event);
  }



});

//creating autocomplete div
function create_autocomplete()
{
 if(!autocomplete_init){
	var parent_div = document.getElementsByClassName("pane-chat-tile-container")[0];
	var autocomplete_div = document.createElement("div");

//	autocomplete_div.innerHTML = "<h1>DENEME!</h1>";
	autocomplete_div.classList.add('autocomplete_main');

	parent_div.parentNode.insertBefore(autocomplete_div, parent_div.nextSibling);
	autocomplete_div.style.overflow = 'hidden';
	autocomplete_div.style.color = 'red';
  autocomplete_div.style.backgroundColor = '#efefef';
  autocomplete_div.style.padding = '10px';
  autocomplete_div.style.margin = '30px';
  autocomplete_div.style.left = doGetCaretPosition(document.getElementsByClassName("input")[1]) * 10 + 'px';
  //filter_emojis();
  //autocomplete_init = true;
  autocomplete_init = true;



  }
}

//filtering emojis
function filter_emojis(filtered_string, event)
{
  create_autocomplete();
  var emojis = document.getElementsByClassName("autocomplete_main")[0];
  emojis.innerHTML = '';
  for(var i = 0; i < items.length; i++)
  {
    if(items[i].emoji.indexOf(filtered_string) > -1){
      var div = document.createElement("div");
      div.classList.add("emoji-shortcut");
      var h5 = document.createElement("h5");
      //h5.classList.add("emoji-shortcut");
      h5.innerHTML = items[i].emoji;
      div.appendChild(h5);
      var p = document.createElement("p");
      //p.classList.add("emoji-shortcut");
      p.innerHTML = items[i].icon;
      div.appendChild(p);
      emojis.appendChild(div);
  }
  if(document.getElementsByClassName("emoji-shortcut")[0]!= undefined ){
    document.getElementsByClassName("emoji-shortcut")[0].style.backgroundColor = '#ccc';
  }
}

//if(event.keyCode ==  39 && document.getElementsByClassName("autocomplete_main")[0].innerText != ''){
  //event.preventDefault();



//}
}


  function nextItem(activeIndex){
    var activeShortucts =  document.getElementsByClassName("emoji-shortcut");
    var activeCount = activeShortucts.length;
    if(activeIndex + 1 > activeCount)
      higlightItem(0);
    else {
      higlightItem(activeIndex + 1);
    }
  }

  function previousItem(activeIndex){
    var activeShortucts =  document.getElementsByClassName("emoji-shortcut");
    var activeCount = activeShortucts.length;
    if(activeIndex - 1 < 0)
      higlightItem(activeCount - 1);
    else {
      higlightItem(activeIndex - 1);
    }
  }

  function highlightItem(emoIndex){
    var itemtobeHighlighted = document.getElementsByClassName("emoji-shortcut")[emoIndex];
    for(var i = 0; i < itemtobeHighlighted.length; i++){
      document.getElementsByClassName("emoji-shortcut")[i].style.backgroundColor = 'transparent';
    }
    itemtobeHighlighted.style.backgroundColor = '#ccc';
  }

});
