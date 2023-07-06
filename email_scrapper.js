
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Extract Emails')
      .addItem('Extract Emails...', 'extractEmails')
      .addToUi();
  }
  
 
  function extractEmails() {
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var label = sheet.getRange(1, 2).getValue();
  
    // Set the date filter
    var fromDate = new Date('2022/01/01');
  
    // Get all email threads that match the label from the Sheet and sent after January 1, 2022
    var threads = GmailApp.search('label:' + label + ' after:' + Utilities.formatDate(fromDate, Session.getScriptTimeZone(), 'yyyy/MM/dd'));
  

    var messages = GmailApp.getMessagesForThreads(threads);
  
    var emailArray = [];
  
  
    messages.forEach(function (message) {
      message.forEach(function (d) {
        emailArray.push(d.getFrom(), d.getTo());
      });
    });
  
  
    var uniqueEmailArray = emailArray.filter(function (item, pos) {
      return emailArray.indexOf(item) == pos;
    });
  
    var cleanedEmailArray = uniqueEmailArray.map(function (el) {
      return ['', el];
    });
  
  
   
    var numRows = cleanedEmailArray.length;
    if (numRows > 0) {
      sheet.getRange(4, 1, numRows, 2).setValues(cleanedEmailArray).sort(2);
    }
  }
  
  
  