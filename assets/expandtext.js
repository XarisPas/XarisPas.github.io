  $(document).ready(function() {
    /* expand text */
  var expandButtons = $('.tab-content .expand a');
  if (expandButtons.length>0) {
    var expandButton = expandButtons.eq(0);
    var expandButtonText = expandButton.text()+'<span class="downIcon"></span>';
    var expandButtonDescription = expandButton.attr('data-description')+'<span class="upIcon"></span>';
    expandButton.attr('href', 'javascript:');
    $('.expand a').bind('click', function(e) {
      var continueArticle = $('.continueArticle');
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
  $(document).ready(function() {
    /* expand text */
  var expandButtonss = $('.tab-content .expands a');
  if (expandButtonss.length>0) {
    var expandButtons = expandButtonss.eq(0);
    var expandButtonTexts = expandButtons.text()+'<span class="downIcon"></span>';
    var expandButtonDescriptions = expandButtons.attr('data-description')+'<span class="upIcon"></span>';
    expandButtons.attr('href', 'javascript:');
    $('.expands a').bind('click', function(e) {
      var continueArticle = $('.continueArticle');
      if (continueArticle.css('display')=='none') {
        continueArticle.show();
        expandButtons.html(expandButtonDescriptions);
      } else {
        continueArticle.hide();
        expandButtons.html(expandButtonTexts);
      }
    });
  }
});
