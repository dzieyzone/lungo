$$.json(
  'data/chex.json',
  {},
  function (data){
    Lungo.Data.Cache.set("productsChex", data);
    //console.log(data);
  }
);

//var productChex = Lungo.Data.Cache.get("productsChex");
console.log(Lungo.Data.Cache.get("productsChex"));

Lungo.dom('.product').tap(function(event) {
});

//Lungo.dom('#video').on('load', function(event){
  
//});
