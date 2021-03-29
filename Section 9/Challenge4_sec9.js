

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, r] of rows.entries()){
        const [x, y] = r.toLowerCase().trim().split('_');
        const output = `${x}${y.replace(y[0], y[0].toUpperCase())}`;
        console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
    }

});






