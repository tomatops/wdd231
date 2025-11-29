const formInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p><strong>First Name:</strong> ${formInfo.get('fname')}</p>
<p><strong>Last Name:</strong> ${formInfo.get('lname')}</p>
<p><strong>Email:</strong> ${formInfo.get('email')}</p>
<p><strong>Mobile number:</strong> ${formInfo.get('phone')}</p>
<p><strong>Organization Name:</strong> ${formInfo.get('org-name')}</p>`