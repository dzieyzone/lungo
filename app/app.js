	$$.ajax({
    type: 'POST', // defaults to 'GET'
    url: 'data/data.json',
    dataType: 'json', //'json', 'xml', 'html', or 'text'
    async: true,
    success: function(response) {
      for(var section in response) {
        renderThis(section, response);
      }
    },
    error: function(xhr, type) {
    }
  });

  //$$('aside article li').on('tap', function(event){
  //  $$('aside article li').removeClass('active');
  //  $$(this).addClass('active');
  //});
  //
  //Lungo.dom('.home-aside').tap(function(event) {
  //  Lungo.View.Aside.toggle("#navigation");
  //});

var renderThis = function(struct, data){
  //console.log(struct, data);  
};