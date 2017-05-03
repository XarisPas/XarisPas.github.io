
  $(document).ready(function() {
    /* expand text */
  var expandButtons = $('.publicationArticles .expands a');
  if (expandButtons.length>0) {
    var expandButton = expandButtons.eq(0);
    var expandButtonText = expandButton.text()+'<span class="downIcon"></span>';
    var expandButtonDescription = expandButton.attr('data-description')+'<span class="upIcon"></span>';
    expandButton.attr('href', 'javascript:');
    $('.expands a').bind('click', function(e) {
      var continueArticle = $('.continueArticles');
      if (continueArticle.css('display')=='none') {
        continueArticle.show();
        expandButton.html(expandButtonDescription);
      } else {
        continueArticle.hide();
        expandButton.html(expandButtonText);
      }
    });
  }
});
