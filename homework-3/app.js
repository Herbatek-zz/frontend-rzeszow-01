var counter = (function() {

                var text;

                function getUserInput() {
                    text = prompt("Wpisz wyraz aby, obliczyć ilość poszczególnych liter");
                }

                function showResult() {
                    console.log(countLetters(text));
                }

                function countLetters() {
                    let map = new Map();

                    for(var i = 0; i < text.length; i++) {
                        var currentChar = text.charAt(i);
                        if(map.has(currentChar))
                            map.set(currentChar, map.get(currentChar) + 1);
                        else
                            map.set(currentChar, 1);
                    }
                    return map;
                }

                return {
                    getInput: getUserInput,
                    showResult: showResult
                }
})();

counter.getInput();
counter.showResult();
