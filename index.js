module.exports = Phrase;

// Add reverse function to the String protoype to add 'reverse()' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content, without punctuation or spaces
  this.letters = function letters() {
    const letterRegex = /[a-z]/i;

    return Array.from(this.content).filter(char => char.match(letterRegex)).join("");
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}