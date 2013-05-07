  Lungo.init({
    name: 'Frankenman'
  });

	$$.ajax({
    type: 'POST', // defaults to 'GET'
    url: 'data/data.json',
    dataType: 'json', //'json', 'xml', 'html', or 'text'
    async: true,
    success: function(response) {
			for(var section in response) {
				console.log(section, response[section]);
			}
		},
    error: function(xhr, type) {
		}
  });
	
	$$('aside article li').on('tap', function(event){
    $$('aside article li').removeClass('active');
    $$(this).addClass('active');
  });
	
