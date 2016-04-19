var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");


pageMod.PageMod({
  include: "*.whatsapp.com",
  contentStyleFile: [data.url("style_eklenti.css")],
  contentScriptFile: [
  					  data.url("jquery-1.12.3.min.js"),
  					  data.url("jquery-ui.min.js"),
                      data.url("emoji.js")]
});