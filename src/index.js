/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function doGet() {
  return HtmlService.createTemplateFromFile('page').evaluate();
}

/**
 * Grabs all items previously submitted to form
 * @returns {String[]} list of all logged purchases
 */
function getList() {
  const sheet = SpreadsheetApp.openById('1af_iLmabrijcMkZhppR8vG_REVOad0HYDUEY4fS5n5c').getSheetByName('main');
  const range = sheet.getRange(`A1:A${sheet.getLastRow}`).getValues()[0];
  console.log(range);
  return range;
}

// function include(filename) {
//   return HtmlService.createHtmlOutputFromFile(filename).getContent();
// }
