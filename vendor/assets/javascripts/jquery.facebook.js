$.facebookInit = function (options) {
  var defaults = {
    status: true,
    cookie: true,
    xfbml: true
  };

  var meta = $('meta[property="fb:app_id"]');
  if (meta.length) {
    defaults.appId = meta.attr('content');
  }

  window.fbAsyncInit = function() {
    FB.init($.extend(defaults, options));
    $(document).trigger('facebook:init');
  };

  if (!$("div#fb-root").length) {
    $('body').append('<div id="fb-root"></div>');
  }

  var e = document.createElement('script');
  e.async = true;
  e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
  document.getElementById('fb-root').appendChild(e);
}
