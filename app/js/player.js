Lungo.dom('.player').tap(function(event) {
  var yid = $$(this).data('yid');
  var htitle = Lungo.dom(this).html();
  Lungo.dom('#video header h1').html(htitle);
  player.loadVideoById(yid);
  player.playVideo();
});

//Lungo.dom('#video').on('load', function(event){
  
//});

Lungo.dom('#video').on('unload', function(event){
  player.stopVideo();
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'U88nQ16Bm1M',
    html5: 1,
  });
}