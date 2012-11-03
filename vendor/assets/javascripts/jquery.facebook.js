$.facebookInit = function (options) {
  var defaults = { status: true,
                   cookie: true,
                   xfbml: true },
      meta = $('meta[property="fb:app_id"]');

  if (meta.length) {
    defaults.appId = meta.attr('content');
  }

  window.fbAsyncInit = function () {
    FB.init($.extend(defaults, options));
    $(document).trigger('facebook:init');
  };

  if (!$('div#fb-root').length) {
    $('body').append('<div id="fb-root"></div>');
  }

  $.ajax({
    url: document.location.protocol + '//connect.facebook.net/en_US/all.js',
    dataType: 'script',
    cache: true
  });
};
