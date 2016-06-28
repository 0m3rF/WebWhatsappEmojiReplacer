var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");
var { ActionButton } = require("sdk/ui/button/action");



var button = ActionButton({
	id: "open-options",
	label: "Open Options",

	icon: {
      "16": "./sand.png",
      "32": "./water.png"
    },
	
	onClick: function (state)
	{
		tabs.open("options.html");
	}

});

pageMod.PageMod({
  include: "*.whatsapp.com",
  contentStyleFile: [data.url("style_eklenti.css")],
  contentScriptFile: [
  					  data.url("jquery-1.12.3.min.js"),
  					  data.url("jquery-ui.min.js"),
                      data.url("emoji.js")]
});