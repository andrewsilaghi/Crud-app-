$(document).ready(function() {
  'use strict';

  // $('.inputs').on("change", "#yn-form", function() {
  //   if ('#yn-form:checked') {
  //     $(".choices").addClass("visuallyhidden");
  //     console.log("Add class");
  //   } else {
  //     $(".choices").removeClass("visuallyhidden");
  //     console.log("RM class");
  //   }
  var choicesField = $(".choices").clone();
  $(".inputs input[type=radio]").on("click", function() {
    if ($(this).val() == "yes-no") {
      $(".choices").remove();
      $(".ynForm").removeClass("visuallyhidden");

    } else {
      $(".choicesForm").append(choicesField);
      $(".ynForm").addClass("visuallyhidden");
    }
  });


  var inputs = 1;
  var counter = 3;
  $(".add-question-btn").click(function() {
    counter++;
    counter.toString();
    $('<div><label for="qwe">choice #' + counter + '</label><input type="text" class="input-name ceva" id="qwe" style="margin-left: 4px;"> <button class="remove-inp"   style="diplay:inline; background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button></div>').insertBefore($(".add-question-btn"));
  });
  $(".choices").on("click", ".remove-inp", function() {
    $(this).parent('div').remove();
    counter--;
  });


  $(".submit").click(function() {

    var questionObj = {};
    (function() {
      var questions = $(".poll-question-inp").val();
      questionObj["Questions"] = questions;
    })()
    if ($('input[name=option]:checked', '.form').val() == "yes-no") {
      // var correctAnswer = $(formy :input).val();
      // console.log(correctAnswer);
      var yn = "yes/ no"
    questionObj["answers"] = yn;
    console.log(questionObj);

    } else {
      var choices = []
      $(".choices input").each(function() {
        choices.push($(this).val())
      });
    questionObj["Answers"] = choices;
    }
    console.log(questionObj);
    $(".polls-list").append('<div class="object">')
     var object = $(".object ").last();
    $.each(questionObj, function(key, value) {

      if (typeof value == "string") {
      
        object.append('<div class="left-side">' + '<span style="font-weight:bold;">' + key + '</span>'+ ':' + '&nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp ' + '<span>' + value  + '</span>' + '</div>');

        object.append( '<div class="clasa" style="display:inline-block;vertical-align:top;">'+'<span style="font-weight:bold;">' + 'Answers:' +'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' +'</span>'+'</div>' )
        object.append('<div class="list" style="display:inline-block;" >')
          $(".list").append('<ul>')
        $.each(choices , function(index, value) {
            object.find('ul').append( '<li>' + value + '</li>' );
          });
        object.append('<button class="remove" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button>');
        $(".remove").on("click",  function() {
          $(this).parents('.object').remove();
        });
}
else{

      object.find('ul').append( '<li>' + value + '</li>' );

  object.append('<button class="remove" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button>');
}

    });



  });






});
