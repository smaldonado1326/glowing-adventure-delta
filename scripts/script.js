$(document).ready(function() {
  function convertToNato() {
    var inputText = $('#textInput').val().toUpperCase(); 
    var natoAlphabet = {
      'A': 'Alpha',
      'B': 'Bravo',
      'C': 'Charlie',
      'D': 'Delta',
      'E': 'Echo',
      'F': 'Foxtrot',
      'G': 'Golf',
      'H': 'Hotel',
      'I': 'India',
      'J': 'Juliett',
      'K': 'Kilo',
      'L': 'Lima',
      'M': 'Mike',
      'N': 'November',
      'O': 'Oscar',
      'P': 'Papa',
      'Q': 'Quebec',
      'R': 'Romeo',
      'S': 'Sierra',
      'T': 'Tango',
      'U': 'Uniform',
      'V': 'Victor',
      'W': 'Whiskey',
      'X': 'X-ray',
      'Y': 'Yankee',
      'Z': 'Zulu'
    };

    var output = "";
    for (var i = 0; i < inputText.length; i++) {
      var letter = inputText[i];
      var phonetic = natoAlphabet[letter];
      if (phonetic) {
        output += letter + ": " + phonetic + "<br>";
      } else {
        output += letter + " <br>";
      }
    }

 
    $('#output').html(output);
    
  
    var nameLength = inputText.length;
    var spiritAnimal = getSpiritAnimal(nameLength);
    $('#spiritAnimal').text(spiritAnimal);
  }

 
  function getSpiritAnimal(length) {
    var spiritAnimals = [
      "Cow",
      "Unicorn",
      "Eagle",
      "Platypus",
      "Tiger",
      "Lion",
      "Jackalope",
      ""
    ];

  
    if (length <= 0) {
      return "Please enter your name";
    } else if (length > 8) {
      return spiritAnimals[7]; 
    } else {
      return spiritAnimals[length - 1];
    }
  }

  $('#convertBtn').click(convertToNato);
});
