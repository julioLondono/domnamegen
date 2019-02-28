// domainNameGen.js
var pronoun = ["the" , "our"];
var adj = ["great" , "big"];
var noun = ["jogger" , "racoon"];

for (var i = 0; i < pronoun.length; i++) {
    // console.log(pronoun[i]);
    
    for (var j = 0; j < adj.length; j++) {
        // console.log(adj[j]);
        
    for (var k = 0; k < noun.length; k++) {
            // console.log(noun[k]);
            console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        
        }
    }
}