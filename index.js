const parser = require("./lib").default;

(async function(){
  let res = await parser.root("<!-- wp:html --><p>giusodjpoasdsadasådadssada</p><!-- /wp:html -->")
})()