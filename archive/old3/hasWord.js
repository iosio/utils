/**
 * determines if a string has a word in it
 * @param {string} string - the string to search in
 * @param {string} word - word to look for
 * @returns {boolean} - returns true if word exists else false
 */
export const hasWord = (string, word)=>{
    let reg = new RegExp(word, 'gi');
    return !!string.match(reg);
};

/**
 * determines if a string has any words in it
 * @param {string} string - the string to search in
 * @param {Array} words - array of words to look for
 * @returns {boolean} - returns true if any of the words exist
 */
export const hasWords = (string, words)=>{
    let results = words.filter((word)=>{
        return hasWord(string, word);
    });
    return !!results.length;
};