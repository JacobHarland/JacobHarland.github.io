let testperson = [];
let testsalary = [];

const addSalary = () => {
    //Write the addSalary() It should add a person and salary to the arrays.
    // To test whether this works, you can click the Display Salary button and see if the new values have been added to the table. 
    selectElement = document.querySelector('#names')
    output = selectElement.value
    let splitOutput = output.split(" ")
    testperson.push(splitOutput[0])
    testsalary.push(parseInt(splitOutput[1]))
}

const displayResults = () => {
    //It should derive the average salary and the highest from the array
    // then display the results in the div element with “results” as its id.
    // To display the results, you need to add nodes to the DOM with the heading as an h2 element and the average and highest as <p> elements.
    // The easiest way to do that is to use the innerHTML property as shown in figure 6-13 in your Murach’s book.
    console.log(testsalary)
    const highestSalary = Math.max(...testsalary);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const sum = testsalary.reduce((a, b) => a + b);
    const averageSalary = sum / testsalary.length;
    console.log(sum)
    console.log(averageSalary)
    document.getElementById('largest').innerHTML = `The highest salary is ${highestSalary}`
    document.getElementById('average').innerHTML = `The average salary is ${averageSalary}`
}

const displaySalary = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
    // Write the displaySalary()
    // It should get the names and values from the arrays
    // display them as rows in the HTML table element with “results_table” as its id
    // this should look something like your original table (of the two- in the tables exercise - the simpler one).

    // create a <table> and <tbody> element
    const table = document.createElement('table')
    const tableBody = document.createElement('tbody')

    // creating all cells
    for (let i = 0; i < testperson.length; i++) {
        const row = document.createElement('tr')

        for (let j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            if (j === 0) {
                const cell = document.createElement('td')
                const cellText = document.createTextNode(testperson[i])
                cell.appendChild(cellText)
                row.appendChild(cell)
                continue
            } else {
                const cell = document.createElement('td')
                const cellText = document.createTextNode(testsalary[i])
                cell.appendChild(cellText)
                row.appendChild(cell)
                continue
            }
        }

        //add the row to end of the table body
        tableBody.appendChild(row)
    }

    // put the <tbody> in the <table>
    table.appendChild(tableBody)
    // appends <table> into <body>
    document.getElementById('results_table').appendChild(table)
}

const addSalaryButton = document.getElementById('add-salary')
const displayResultsButton = document.getElementById('display-results')
const displaySalaryButton = document.getElementById('display-salary')

displayResultsButton.addEventListener('click', button => {
    displayResults()
})

displaySalaryButton.addEventListener('click', button => {
    displaySalary()
})

addSalaryButton.addEventListener('click', button => {
    addSalary()
})