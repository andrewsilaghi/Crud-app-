function template() {
  $('#templates').load('../template/btn-templates.html #choices-tpl', function() {
    var tpl = $('#choices-tpl').html();
    var view = {
      message: 'Hello World!'
    };
    var output = Mustache.render(tpl, view);
  });
  return output;
  
}
