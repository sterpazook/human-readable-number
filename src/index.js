module.exports = function toReadable (number) {
    let words = "";
    let str = String(number);
    let unit = +str.slice(-2);
    
    if (number == 0) {
        words = 'zero';
    }
    
    if ( unit < 20 ) {
    switch (unit) {
        case 1: 
          words = 'one' ;
      break;
        case 2: 
          words = 'two' ;
      break;
        case 3: 
          words = 'three' ;
      break;
      case 4: 
          words = 'four' ;
      break;
      case 5: 
          words = 'five' ;
      break;
          case 6: 
          words = 'six' ;
      break;
          case 7: 
          words = 'seven' ;
      break;
      case 8: 
          words = 'eight' ;
      break;
      case 9: 
          words = 'nine' ;
      break;
      case 10: 
          words = 'ten' ;
      break;
        case 11: 
          words = 'eleven' ;
      break;
        case 12: 
          words = 'twelve' ;
      break;
        case 13: 
          words = 'thirteen' ;
      break;
      case 14: 
          words = 'fourteen' ;
      break;
      case 15: 
          words = 'fifteen' ;
      break;
          case 16: 
          words = 'sixteen'  ;
      break;
          case 17: 
          words = 'seventeen' ;
      break;
      case 18: 
          words = 'eighteen' ;
      break;
      case 19: 
          words = 'nineteen' ;
      break;
      default:
      break;
    }
    } else {
        unit = +str.slice(-1);
      switch (unit) {
        case 1: 
          words = 'one' + words ;
      break;
        case 2: 
          words = 'two' + words ;
      break;
        case 3: 
          words = 'three' + words ;
      break;
      case 4: 
          words = 'four' + words ;
      break;
      case 5: 
          words = 'five' + words ;
      break;
          case 6: 
          words = 'six' + words ;
      break;
          case 7: 
          words = 'seven' + words ;
      break;
      case 8: 
          words = 'eight' + words ;
      break;
      case 9: 
          words = 'nine' + words ;
      break;
      default:
      break;
    }  
    }
    
    unit = +str.slice(-2,-1);
      switch (unit) {
        case 2: 
          words = 'twenty ' + words ;
      break;
        case 3: 
          words = 'thirty ' + words ;
      break;
        case 4: 
          words = 'forty ' + words ;
      break;
      case 5: 
          words = 'fifty ' + words ;
      break;
      case 6: 
          words = 'sixty ' + words ;
      break;
          case 7: 
          words = 'seventy ' + words ;
      break;
          case 8: 
          words = 'eighty ' + words ;
      break;
      case 9: 
          words = 'ninety ' + words ;
      break;
      default:
      break;
    }
    
    unit = +str.slice(-3,-2);
      switch (unit) {
      case 1: 
          words = 'one hundred ' + words ;
      break;
        case 2: 
          words = 'two hundred ' + words ;
      break;
        case 3: 
          words = 'three hundred ' + words ;
      break;
        case 4: 
          words = 'four hundred ' + words ;
      break;
      case 5: 
          words = 'five hundred ' + words ;
      break;
      case 6: 
          words = 'six hundred ' + words ;
      break;
          case 7: 
          words = 'seven hundred ' + words ;
      break;
          case 8: 
          words = 'eight hundred ' + words ;
      break;
      case 9: 
          words = 'nine hundred ' + words ;
      break;
      default:
      break;
    }
    
    if (words[words.length-1] == ' ') {
    words = words.slice(0, -1);
    }

    return words;
}
