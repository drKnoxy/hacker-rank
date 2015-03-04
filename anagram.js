// Given a string, find if any anagrams of each word exist in the rest of the string
// anagrams('foo ofo bar baz ra rab brat oof zba');
// {"foo":["foo","ofo","oof"],"abr":["bar","rab"],"abz":["baz","zba"],"ar":["ra"],"abrt":["brat"]};

function anagrams(theString) {

	var words = theString.split(' ');
	var anagrams = {};

	function normalizeWord(word) {
		return word.toLowerCase().split('').sort().join('');
	}

	function addWord(wordKey, word, wordList) {
		if (!wordList[wordKey]) {
			wordList[wordKey] = [];
		}

		wordList[wordKey].push(word);
	}

	words.forEach(function(word){

		// Store the normalized word as the key
		var wordKey = normalizeWord(word);

		addWord(wordKey, word, anagrams);		
	});

	return anagrams;
}

function assert(comparison, output) {
	var statusText = comparison ? 'PASS: ' : 'FAIL: ';
	console.log(statusText + output);
}

console.table( anagrams('foo ofo bar baz ra rab brat oof zba') );
