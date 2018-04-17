var counter = (function() {

                this.text = prompt("Podaj wyraz, w którym chcesz obliczyć liczbę poszczególnych liter");

                function showResult() {
                    console.log(countLetters(this.text));
                }

                function countLetters() {
                    let map = new Map();

                    for(var i = 0; i < this.text.length; i++) {
                        var currentChar = this.text.charAt(i);
                        if(map.has(currentChar))
                            map.set(currentChar, map.get(currentChar) + 1);
                        else
                            map.set(currentChar, 1);
                    }
                    return map;
                }

                return {
                    countForMe: showResult
                }
})();

counter.countForMe();
