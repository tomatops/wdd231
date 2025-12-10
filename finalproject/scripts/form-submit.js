const formInfo = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
<h2>Thank you!</h2>
<h3 id="confirm-text">Your submission has been received successfully.</h3>
<p><strong>First Name:</strong> ${formInfo.get("fname")}</p>
<p><strong>Last Name:</strong> ${formInfo.get("lname")}</p>
<p><strong>Email:</strong> ${formInfo.get("email")}</p>
<p><strong>Mobile number:</strong> ${formInfo.get("phone")}</p>
<p><strong>Birthdate:</strong> ${formInfo.get("birthdate")}</p>`