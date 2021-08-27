function reverseStr(str) {
  var listOfChars = str.split("");
  var reversedListOfChars = listOfChars.reverse();
  var reversedStr = reversedListOfChars.join("");

  return reversedStr;
}

function isPalindrome(ipString) {
  var reverse = reverseStr(ipString);

  if (reverse === ipString) {
    return true;
  } else {
    return false;
  }
}

function convertDateToString(date) {
  var dateStr = { day: "", month: "", year: "" };

  // Appending a 0 before a single digit day
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  // Appending a 0 before a single digit month
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

function getAllDateFormats(date) {
  var dateStr = convertDateToString(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
  listOfDateFormats = getAllDateFormats(date);

  var flag = false;
  for (var i = 0; i < listOfDateFormats.length; i++) {
    if (isPalindrome(listOfDateFormats[i])) {
      flag = true;
      break;
    }
  }

  return flag;
}

var date = {
  day: 20,
  month: 12,
  year: 2002,
};

console.log(checkPalindromeForAllDateFormats(date));
