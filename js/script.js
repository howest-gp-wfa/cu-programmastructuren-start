"use strict";

window.addEventListener("load", initialize);

//Global variables
let divAssignment;
let divComparison;
let divArithmetic;
let divBooleans;
let divIfElse;
let divSwitchResult;
let divWhileResult;
let divDoWhileResult;
let divForResult;
let divForInResult;
let divBreakResult;
let divContinueResult;

let inpSwitch;
let inpWhile;
let inpDoWhile;
let inpFor;

function initialize() {

  //Get DOM elements & add eventlisteners if necessary
  const btnAssignmentOperators = document.querySelector("#assignment-operators");
  btnAssignmentOperators.addEventListener("click", displayAssignment);
  divAssignment = document.querySelector("#assignment-operators-result");
  
  const btnComparisonOperators = document.querySelector("#comparison-operators");
  btnComparisonOperators.addEventListener("click", displayComparison);
  divComparison = document.querySelector("#comparison-operators-result");

  const btnArithmeticOperators = document.querySelector("#arithmetic-operators");
  btnArithmeticOperators.addEventListener("click", displayArithmetic);
  divArithmetic = document.querySelector("#arithmetic-operators-result");

  const btnBooleanOperators = document.querySelector("#boolean-operators");
  btnBooleanOperators.addEventListener("click", displayBooleans);
  divBooleans = document.querySelector("#boolean-operators-result");

  const btnIfElseStatements = document.querySelector("#if-else-statements");
  btnIfElseStatements.addEventListener("click", displayIfElse);
  divIfElse = document.querySelector("#if-else-statements-result");

  const btnSwitch = document.querySelector("#switch-button");
  btnSwitch.addEventListener("click", displaySwitch);
  divSwitchResult = document.querySelector("#switch-result");
  inpSwitch = document.querySelector("#switch-input");

  const btnWhile = document.querySelector("#while-button");
  btnWhile.addEventListener("click", displayWhile);
  divWhileResult = document.querySelector("#while-result");
  inpWhile = document.querySelector("#while-input");

  const btnDoWhile = document.querySelector("#do-while-button");
  btnDoWhile.addEventListener("click", displayDoWhile);
  divDoWhileResult = document.querySelector("#do-while-result");
  inpDoWhile = document.querySelector("#do-while-input");

  const btnFor = document.querySelector("#for-button");
  btnFor.addEventListener("click", displayFor);
  divForResult = document.querySelector("#for-result");
  inpFor = document.querySelector("#for-input");

  const btnForIn = document.querySelector("#for-in-button");
  btnForIn.addEventListener("click", displayForIn);
  divForInResult = document.querySelector("#for-in-result");
  
  const btnBreak = document.querySelector("#break-button");
  btnBreak.addEventListener("click", displayBreak);
  divBreakResult = document.querySelector("#break-result");

  const bntContinue = document.querySelector("#continue-button");
  bntContinue.addEventListener("click", displayContinue);
  divContinueResult = document.querySelector("#continue-result");

}