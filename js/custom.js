$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '2002318635',
        limit: 32,
        resolution: 'standard_resolution',
        accessToken: '2002318635.1677ed0.84c7b4eacfd64c158d452f5098b50b01',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();
});