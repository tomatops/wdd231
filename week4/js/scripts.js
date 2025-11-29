// const getString = window.location.search;
// console.log(getString);

const myinfo = new URLSearchParams(getString);
// console.log(myInfo);

// console.log(myInfo.get('first'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>`
