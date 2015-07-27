(function($) {
  $.fn.selectorPlg = function() {
    this.each(function() {
      var select = $(this);
      select.wrap("<div class='dropdown' >");
      $(this).addClass("visuallyhidden");
      var selectedIndicator = '<a href="#">Choose ... </a>';
      var ul = $("<ul>");
      $(this).find("option").each(function() {
        var li = $("<li>");
        var a = $('<a>');
        a.text( $(this).text() );
        var myText= $(this).text();
        li.append(a);
        ul.append(li);
        var select = $(this).parent()
        var valuare = $(this).val();
        li.click(function(){
          select.val(valuare);
          select.next('a').text(myText);
        });
        select.find("a").append($(this).text());
      });

      select.parent().append(selectedIndicator).append(ul);

        select.siblings('ul').find('li').eq(select.find('option:selected').index()).trigger('click');



    });

  }

})(jQuery);
