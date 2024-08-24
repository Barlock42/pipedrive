document.getElementById('createJobBtn').addEventListener('click', function() {
    alert('Create Job button clicked!');
    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const jobType = document.getElementById('jobType').value;
    const jobSource = document.getElementById('jobSource').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const area = document.getElementById('area').value;
    const startDate = document.getElementById('startDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const testSelect = document.getElementById('testSelect').value;

    // Pipedrive API endpoint for creating a deal or job (adjust based on your needs)
    const apiEndpoint = 'https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN';

    // Prepare the data to be sent to Pipedrive
    const data = {
        title: `${jobType} for ${firstName} ${lastName}`,
        person_id: null,
        org_id: null,
        value: null,
        currency: "USD",
        add_time: `${startDate} ${startTime}`,
    };

    // Send data to Pipedrive using Fetch API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Job created successfully!');
            // Optionally redirect or reset form
        } else {
            alert('Error creating job: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error creating job.');
    });
});
