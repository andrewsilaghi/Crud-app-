$(document).ready(function() {
  'use strict';

  var choicesField = $(".choices").clone();
  var choiceForm = $(".choicesForm").clone();
  $(".inputs input[type=radio]").on("click", function() {
    if ($(this).val() == "yes-no") {
      $(".choices").addClass("visuallyhidden");
      $(".ynForm").removeClass("visuallyhidden");

    } else {
      $(".choices").removeClass("visuallyhidden")
      $(".ynForm").addClass("visuallyhidden");
    }
  });


  var inputs = 1;
  var counter = 3;
  $(".add-question-btn").click(function() {
    counter++;
    counter.toString();
    $('<div><label for="qwe">choice #' + counter + '</label><input type="text" class="input-name input-container" id="qwe" style="margin-left: 4px;"> <button class="remove-inp"   style="diplay:inline; background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button></div>').insertBefore($(".add-question-btn"));
  });
  $(".choices").on("click", ".remove-inp", function() {
    $(this).parent('div').remove();
    counter--;
  });

  var questionObjectsArray = [];
  $(".submit").click(function(e) {
    e.preventDefault();
    var questionObj = {};
    var questions = $(".poll-question-inp").val();
    questionObj["Questions"] = questions;
    if ($('input[name=option]:checked', '.form').val() == "yes-no") {
      // var correctAnswer = $(formy :input).val();
      // console.log(correctAnswer);
      var yn = "yes/ no"
      questionObj["answers"] = yn;
    } else {
      var choices = []
      $(".choices input").each(function() {
        choices.push($(this).val())
      });
      questionObj["Answers"] = choices;
    }
    questionObjectsArray.push(questionObj)
    console.log(questionObjectsArray);
    $(".polls-list").append('<div class="object">')
    var object = $(".object ").last();
    object.append('<div class="left-side">' + '<span style="font-weight:bold;">Questions</span>' + ':' + '&nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp ' + '<span><input class="question-text" readonly></span>' + '</div>');
    $(".question-text").val(questionObj.Questions);
    if ($('#m-choices').is(':checked')) {
      object.append('<div class="answers-text" style="display:inline-block;vertical-align:top;">' + '<span style="font-weight:bold;">' + 'Answers:' + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + '</span>' + '</div>')
      object.append('<div class="list" style="display:inline-block;" >')
      $(".list").append('<ul>')
      $.each(choices, function(index, value) {
        object.find('ul').append('<div><input class="answers-element input-answers" readonly value="' + questionObj["Answers"][index] + ' "></div>');
      });


      object.append('<button class="remove" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button>');
      object.append('<button class="edit" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/edit.png"></button>');
      $(".remove").on("click", function() {
        $(this).parents('.object').remove();

      });
      $(".edit").on("click", function() {
        $(".list").append('<button class="done-editing">Done Editing !</button>')
        $(".answers-element").attr("readonly", false);
        $(".question-text").attr("readonly", false);
        $(".done-editing").click(function() {
          $(".answers-element").attr("readonly", true);
          $(".question-title").attr("readonly", true);
          $(this).remove();
        });
      });
    } else {
      object.append('<div class="answers-text" style="display:inline-block;vertical-align:top;">' + '<span style="font-weight:bold;">' + 'Answers:' + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + questionObj.answers + '</span>' + '</div>')
      object.append('<button class="remove" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/cancel.png"></button>');
      object.append('<button class="edit" style="display: inline-block; vertical-align: top; margin-left: 37px;background-color:transparent;border-color:transparent"><img style="width:20px" src="assets/img/edit.png"></button>');
      $(".remove").on("click", function() {
        $(this).parents('.object').remove();
      });

      $(".edit").on("click", function() {
        $(".object").append('<button class="done-editing">Done Editing !</button>')
        $(".object").append('<button class="cancelEdit">Cancel</button>')
        $(".question-text").attr("readonly", false);
        $(".done-editing").click(function() {
          $(".answers-element").attr("readonly", true);
          $(".question-text").attr("readonly", true);
          $(this).remove();
        });
      });

    }
  });

});
