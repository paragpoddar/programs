// https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  let consonants = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants.trim());
}

vowelsAndConsonants("javascriptloops");