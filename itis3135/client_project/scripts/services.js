document.getElementById('dog-walking-button').addEventListener('click', loadDogWalking);
document.getElementById('pet-sitting-button').addEventListener('click', loadPetSitting);
document.getElementById('check-in-button').addEventListener('click', loadCheckIn);


function loadDogWalking() {
    fetch('json/prices.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h3>Info</h3>';
            output += `
                <ul>
                    <li>Price: ${data[0].price}</li>
                    <li>Availability: ${data[0].availability}</li>
                </ul>
                `;
            document.getElementById('dog-walking').innerHTML = output;
        });
}

function loadPetSitting() {
    fetch('json/prices.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h3>Info</h3>';
            output += `
                <ul>
                    <li>Price: ${data[1].price}</li>
                    <li>Availability: ${data[1].availability}</li>
                </ul>
                `;
            document.getElementById('pet-sitting').innerHTML = output;
        });
}

function loadCheckIn() {
    fetch('json/prices.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h3>Info</h3>';
            output += `
                <ul>
                    <li>Price: ${data[2].price}</li>
                    <li>Availability: ${data[2].availability}</li>
                </ul>
                `;
            document.getElementById('check-in').innerHTML = output;
        });
}