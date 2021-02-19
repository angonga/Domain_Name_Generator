let pronoun = ['the','our','their'];
let adj = ['great', 'big','small' ];
let noun = ['jogger','racoon','rat'];
let dom = ['.com','.net','.us','.io','.org'];

for(var p=0;p<pronoun.length;p++){
        for(var a=0;a<adj.length;a++){
                for(var n=0;n<noun.length;n++){
                        for(var d=0;d<dom.length;d++){
                            console.log(pronoun[p]+adj[a]+noun[n]+dom[d]);
                        }
                }
        }
}