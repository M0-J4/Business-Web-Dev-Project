const privKey = process.env.PRIVATE_KEY;
const pubKey = process.env.PUBLIC_KEY;
if (typeof pubKey === 'undefined' || pubKey === '' || typeof privKey === 'undefined' || privKey === '')
{
    throw new Error("You do not have a public/private key defined in your environment variables.");
}

console.log('credentials loaded');

function auth()
{
    const ts = new Date().getTime();
    const hash = crypto.createHash('md5').update(ts + privKey + pubKey).digest('hex');

    return {ts, hash};
}