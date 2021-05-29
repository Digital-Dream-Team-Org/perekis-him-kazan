(function ($) {
  // Document ready
  $(function () {
    const lazyObserver = lozad(); // lazy loads elements with default selector as '.lozad'
    lazyObserver.observe();
  });
})(jQuery);
