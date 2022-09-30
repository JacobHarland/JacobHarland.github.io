const myActivity = () => {
    let number = prompt("The Jolly Hydra would like you to enter a number from 0 to 10...")
    if (number == null || number == "") {
        alert("User cancelled the prompt.");
    } else {
        if (validateEntry(number) === true) {
            formatted_number = Math.round(Math.abs(number))
            let output = getShape(formatted_number)
            alert(output)
        }
    }
}

const getShape = (formatted_number) => {
    switch (formatted_number) {
        case 0:
            polygon = "No sides"
            break;
        case 1:
            polygon = "henagon"
            break;
        case 2:
            polygon = "digon"
            break;
        case 3:
            polygon = "trigon"
            break;
        case 4:
            polygon = "tetragon"
            break;
        case 5:
            polygon = "pentagon"
            break;
        case 6:
            polygon = "hexagon"
            break;
        case 7:
            polygon = "heptagon"
            break;
        case 8:
            polygon = "octagon"
            break;
        case 9:
            polygon = "enneagon"
            break;
        case 10:
            polygon = "decagon"
            break;
    }
    return polygon;
}

const validateEntry = (number) => {
    if (isNaN(number)) {
        alert("Not a number")
        return false
    } else if (number > 10 || number < -10) {
        alert("Not within range of 0 to 10")
        return false
    } else {
        return true
    }
}