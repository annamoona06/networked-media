// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require('dotenv').config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
    const status = await masto.v1.statuses.create({
        status: text,
        // TODO: change visability to public when project ready to run
        visibility: 'public',
    });
}

//index 
let index = 0;

async function runBot() {
    try{
    // TODO: ADD API REQUEST
    // change localhost to your partner's droplet IP (their server must be running)
    // if needed, change the port (6003) to match your partner's app.listen in *their* server.js
    const url = 'http://161.35.53.32:6003/get-data';

    let response = await fetch(url);
    let json = await response.json();

    if (json.length === 0) return; // nothing to post yet


    // TODO: SELECT ITEM FROM JSON AND MANIPULATE IT FOR YOUR BOT
    let item = json[index % json.length];
    console.log('item:', item);

    let post = meowSentence(item.message);

    // contorl length of texts
    if (post.length > 500) {
        post = post.slice(0, 497) + '...';
    }
    
    // make our status
    await makeStatus(post);

    index++;
    console.log('next index:', index);

    } catch (err) {
        console.error('Bot error:', err);
    }

    // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL
}

//testing: starts immediately
runBot();

setInterval(runBot, 720000);

function meowSentence(text) {
    return text
        .split(' ')
        .filter(w => w !== '')
        .map(meowWord)
        .join(' ');
}

function meowWord(word) {
    const hasUpper = /[A-Z]/.test(word);
    const allUpper = hasUpper && word === word.toUpperCase();
    const len = word.length;

    if (allUpper) {
        return 'Anna( ´・ω・)ﾉ≽^•⩊•^≼M E O W !!!';
    } else if (len > 10) {
        return hasUpper ? 'Lisa( ´・ω・)ﾉ(=ↀωↀ=)MEowMeOWMeoWMEOW' : 'Wing( ´・ω・)ﾉ(=^-ω-^=) meowmeowmeowmeowmeow';
    } else if (len > 5) {
        return hasUpper ? 'Lam( ´・ω・)ﾉ(=♡ω♡=) MEOW! MEOW!! MEOW!!!!!!!' : 'Jennifer( ´・ω・)ﾉ(=ＴェＴ=) meow meow meow!';
    } else if (len >= 3) {
        return hasUpper ? 'Anita( ´・ω・)ﾉヾ(=`ω´=)ノ” Meow..MEOW!' : 'Sam( ´・ω・)ﾉ(=｀ω´=) meow meow!';
    } else {
        return hasUpper ? 'Salma( ´・ω・)ﾉ(=˃ᆺ˂=) MEOW!' : 'Kiki( ´・ω・)ﾉ(=^‥^=) meow!';
    }
}