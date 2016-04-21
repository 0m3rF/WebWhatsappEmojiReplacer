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
   "icon": "😀"
 },
 {
  "emoji": ":febeme:",
  "icon": "☺️"
},
{
 "emoji": ":gegfe:",
 "icon": "😱"
},{
 "emoji": ":gebere:",
 "icon": "😸"
},{
 "emoji": ":hesdebere:",
 "icon": "🙌"
},{
 "emoji": ":jjfbere:",
 "icon": "🙁"
},{
 "emoji": ":kebere:",
 "icon": "😣"
},{
 "emoji": ":lebere:",
 "icon": "👅"
}
  ]};

  var items = json.items;
  var autocomplete_init = false;
  var emojiIndex = 0;

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
  /*  if((index - guncelString.indexOf(':') == 2) ){
      filter_emojis(':',event);
    }*/
	}

  if(guncelString.indexOf(':') > -1 ){
    filter_emojis(emoji_filter,event);
  }
      if(document.getElementsByClassName("emoji-shortcut")[0] != undefined ){
    document.getElementsByClassName("input")[1].addEventListener("keydown", function(e) {
    if([37, 38, 39, 40, 13].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        if(e.keyCode == 13 && !counter){
            var emojiUTF = document.getElementsByClassName("autocomplete_main")[0].getElementsByClassName("emoji")[emojiIndex].innerHTML;
            guncelString = guncelString.replace(emoji_filter, emojiUTF);
            document.getElementsByClassName("input")[1].innerText = guncelString;
            window.alert("önce" + emojiIndex);
            emojiIndex = 0;
            document.getElementsByClassName("autocomplete_main")[0].innerHTML = "";
            document.execCommand('insertHtml', null, "&nbsp;");
            e.keyCode = 0;
        }
    }
}, false);
    switch(event.keyCode){
      case 38:
        event.preventDefault();
        nextItem(emojiIndex);
        break;
      case 39:
        event.preventDefault();
        nextItem(emojiIndex);
        break;
      case 40:
        event.preventDefault();
        previousItem(emojiIndex);
        break;
      case 37:
        event.preventDefault();
        previousItem(emojiIndex);
        break;

    }

  }

});

//creating autocomplete div
function create_autocomplete()
{
 if(!autocomplete_init){
	var parent_div = document.getElementsByClassName("pane-chat-tile-container")[0];
	var autocomplete_div = document.createElement("div");

	autocomplete_div.classList.add('autocomplete_main');

	parent_div.parentNode.insertBefore(autocomplete_div, parent_div.nextSibling);
	autocomplete_div.style.overflow = 'hidden';
	autocomplete_div.style.color = 'red';
  autocomplete_div.style.backgroundColor = '#f3f0ef';
  autocomplete_div.style.padding = '10px';
  autocomplete_div.style.width = '100%';
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
      h5.innerHTML = items[i].emoji;
      div.appendChild(h5);
      var p = document.createElement("p");
      p.innerHTML = items[i].icon;
      p.classList.add("emoji");
      div.appendChild(p);
      emojis.appendChild(div);
      div.style.float = "left";
      div.style.padding = "5px";
}
}
}


  function nextItem(activeIndex){
    var activeShortucts =  document.getElementsByClassName("emoji-shortcut");
    var activeCount = activeShortucts.length;
    if(activeIndex + 1 >= activeCount){
      highlightItem(0);
      emojiIndex = 0;}
    else {
      highlightItem(activeIndex + 1);
      emojiIndex++;
    }
  }

  function previousItem(activeIndex){
    var activeShortucts =  document.getElementsByClassName("emoji-shortcut");
    var activeCount = activeShortucts.length;
    if(activeIndex == 0){
      highlightItem(activeCount - 1);
      emojiIndex = activeCount - 1;}
    else {
      highlightItem(activeIndex - 1);
      emojiIndex--;
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
