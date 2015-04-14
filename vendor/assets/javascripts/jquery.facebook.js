window.facebookLoaded = false;

$.facebookInit = function (opts) {
  var options = { status: true,
                  cookie: true,
                  xfbml: true,
                  version: 'v2.3' },
      meta = $('meta[property="fb:app_id"]');

  if (meta.length) {
    options.appId = meta.attr('content');
  }

  options = $.extend(options, opts);

  window.fbAsyncInit = function () {
    FB.init(options);
    window.facebookLoaded = true;
    $(document).trigger('facebook:init');
  };

  if (!$("div#fb-root").length) {
    $('body').append('<div id="fb-root"></div>');
  }

  var path = options.version == '1.0' ? '//connect.facebook.net/en_US/all.js'
                                      : '//connect.facebook.net/en_US/sdk.js';

  var e = document.createElement('script');
  e.async = true;
  e.src = document.location.protocol + path;
  document.getElementById('fb-root').appendChild(e);
}

$.facebookLoaded = function (callback) {
  if (window.facebookLoaded) {
    callback();
  } else {
    $(document).on('facebook:init', callback);
  }
}
