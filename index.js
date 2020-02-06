module.exports = Phrase;

// Reverse a string
function reverse(string) {
  return Array.from(string).reverse().join('');
}

// Add reverse function to the String protoype to add 'reverse()' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true for a palindrome, false otherwise
// function palindrome(string) {
//   let processedContent = string.toLowerCase();

//   return processedContent === reverse(processedContent);
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER
  this.louder = function louder(argument) {
    return this.content.toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(content);
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing (override method from Phrase)
  this.processedContent = function processedContent() {
    return this.processor(translation);
  }
}

// Inherit the methods from Phrase
TranslatedPhrase.prototype = new Phrase();