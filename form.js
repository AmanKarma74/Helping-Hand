    document.addEventListener('DOMContentLoaded', function () {
            // Retrieve form data array from sessionStorage
            const formDataArray = JSON.parse(sessionStorage.getItem('donationFormDataArray')) || [];

            if (formDataArray.length > 0) {
                // Display each donation on the donations page
                const donationTemplate = document.getElementById('donationTemplate');
                const maindiv = document.getElementById('maindiv');

                formDataArray.forEach(formData => {
                    const newDonation = document.importNode(donationTemplate.content, true);

                    newDonation.querySelector('#donar_uname').textContent = formData.name + ", " + formData.city;
                    newDonation.querySelector('#things_to_donate').textContent = formData.donationType;
                    newDonation.querySelector('#donation_description').textContent = formData.description;
                    newDonation.querySelector('#donar_address').textContent = formData.address;
                    newDonation.querySelector('#donar_phone').textContent = formData.number;

                    // Append each donation to the body

                    maindiv.appendChild(newDonation);
                    setTimeout(function () {
                        donationsContainer.removeChild(newDonation);
                    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
                });

                // Clear the stored form data array from sessionStorage
                // sessionStorage.removeItem('donationFormDataArray');
            } else {
                // If there's no form data, display a message or handle accordingly
                console.log('No donation data available.');
            }
        });