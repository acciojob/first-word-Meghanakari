function firstWord(s) {
  // your code here
    let spaceIndex = s.indexOf(' ');
    if (spaceIndex === -1) {
        return s.trim();
    }
    return s.substring(0, spaceIndex).trim(); 
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
