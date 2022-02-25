"use strict";

window.addEventListener("load", initialize);

//Global variables GROUP
let divAssignment,divComparison,divArithmetic,divBooleans,divIfElse,divSwitchResult,divWhileResult,divDoWhileResult;
let divForResult,divForInResult,divBreakResult,divContinueResult;

let inpSwitch,inpWhile,inpDoWhile,inpFor;

function initialize() {

  // Declare vars in head of scope !!
  // Const
  const btnAssignmentOperators = document.querySelector("#assignment-operators");
  const btnComparisonOperators = document.querySelector("#comparison-operators");
  const btnArithmeticOperators = document.querySelector("#arithmetic-operators");
  const btnBooleanOperators = document.querySelector("#boolean-operators");
  const btnIfElseStatements = document.querySelector("#if-else-statements");
  const btnSwitch = document.querySelector("#switch-button");
  const btnWhile = document.querySelector("#while-button");
  const btnDoWhile = document.querySelector("#do-while-button");
  const btnFor = document.querySelector("#for-button");
  const btnForIn = document.querySelector("#for-in-button");
  const btnBreak = document.querySelector("#break-button");
  const bntContinue = document.querySelector("#continue-button");

  // Initialize Globals
  divAssignment = document.querySelector("#assignment-operators-result");
  divComparison = document.querySelector("#comparison-operators-result");
  divArithmetic = document.querySelector("#arithmetic-operators-result");
  divBooleans = document.querySelector("#boolean-operators-result");
  divIfElse = document.querySelector("#if-else-statements-result");
  divSwitchResult = document.querySelector("#switch-result");
  divWhileResult = document.querySelector("#while-result");
  divDoWhileResult = document.querySelector("#do-while-result");
  divForResult = document.querySelector("#for-result");
  divForInResult = document.querySelector("#for-in-result");
  divBreakResult = document.querySelector("#break-result");
  divContinueResult = document.querySelector("#continue-result");

  inpSwitch = document.querySelector("#switch-input");
  inpWhile = document.querySelector("#while-input");
  inpDoWhile = document.querySelector("#do-while-input");
  inpFor = document.querySelector("#for-input");


  // Add Eventlisteners (Callback functions)
  btnAssignmentOperators.addEventListener("click", displayAssignment);
  btnComparisonOperators.addEventListener("click", displayComparison);
  btnArithmeticOperators.addEventListener("click", displayArithmetic);
  btnBooleanOperators.addEventListener("click", displayBooleans);
  btnIfElseStatements.addEventListener("click", displayIfElse);
  btnSwitch.addEventListener("click", displaySwitch);
  btnWhile.addEventListener("click", displayWhile);
  btnDoWhile.addEventListener("click", displayDoWhile);
  btnFor.addEventListener("click", displayFor);
  btnForIn.addEventListener("click", displayForIn);
  btnBreak.addEventListener("click", displayBreak);
  bntContinue.addEventListener("click", displayContinue);

}

// Add functions (Hint : Commit when functionality works !)

function divAssignment(){
  // Add functionality
}


