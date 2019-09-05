const parser = require("./lib").default;

(async function(){
  const res = await parser.root("<!-- wp:html --><p>HTML TEXT</p><!-- /wp:html -->")
  console.log(res)
})()