// let button = document.getElementById('btn');

// button.addEventListener('dblclick', ()=>{
//     document.querySelector('.box').innerHTML = '<b>You are clicked</b>';
// });


// button.addEventListener('contextmenu', ()=>{
//     alert('Dont right click');
// });

// document.addEventListener('keydown', (e)=>{
//     console.log(e.key);
// });

document.querySelector('.in').addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        document.querySelector('p').innerHTML = 'Enter pressed';
    }
})