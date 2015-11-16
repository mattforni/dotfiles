const DEFAULT_DURATION = 1000;

function dismissToast(duration) {
  if (typeof duration !== 'number') { duration = DEFAULT_DURATION; }
  var toast = $('div#toast');
  if (toast.length > 0 && toast.css('display') !== 'none') {
    toast.fadeOut(duration);
  }
};

$(function ready() {
  // On click dismiss the toast
  $('div#dismiss-toast').click(function() { dismissToast(); });

  // Dismiss the toast after 10 seconds
  setTimeout(dismissToast, 10000);
});

