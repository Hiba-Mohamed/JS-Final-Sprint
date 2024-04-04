console.log("Hello World! This is index.js file")
fetch('./hospital.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayData(data)
        })
    .catch(error => {
        // Handle any errors that occur while fetching the file
        console.error(error);
    });

    function getArraySum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    function getTotalNumberofEmployees(data){
        let employeesArray = []
        const unitsArray = data.units
        console.log(unitsArray)
        unitsArray.forEach(unit =>{ 
            totalTmployeeInAUnit = unit.numberOfEmployees.doctors + unit.numberOfEmployees.nurses + unit.numberOfEmployees.alliedHealth + unit.numberOfEmployees.supportStaff 
            employeesArray.push(totalTmployeeInAUnit)
            console.log(unit.numberOfEmployees)
        })
        console.log(employeesArray)
        const totalEmployeeNumber = getArraySum(employeesArray) 
        console.log(totalEmployeeNumber)
        return totalEmployeeNumber
    }

    function getTotallNumberOfUnits(data){ 
        const unitsArray = data.units
        const numberOfUnits = unitsArray.length
        return numberOfUnits}

    function getTotallNumberOfBeds(data){
        let numberOfBedsArray = []
        const hospitalUnits = data.units
        console.log(hospitalUnits)
        hospitalUnits.forEach(unit => {
            unitBeds = unit.numberOfBeds
            numberOfBedsArray.push(unitBeds)
        });
        console.log(numberOfBedsArray)
         const totalBedsNumber = getArraySum(numberOfBedsArray) 
         console.log(totalBedsNumber)
         return totalBedsNumber
    }

    function displayData(data){
        const hospitalInfoDiv = document.getElementById("hospital-info");
        const unitsArray = data.units
        hospitalInfoDiv.innerHTML = 
        `<center>
        <h1>${data.name}</h1>
        <h2>Total number of beds is ${getTotallNumberOfBeds(data)}</h2>
        <h2>Total number of employees is ${getTotalNumberofEmployees(data)}</h2>
        <h2>Total number of units is ${getTotallNumberOfUnits(data)} </h2>
        <br/>
  `

    unitsArray.forEach(unit => {
        hospitalInfoDiv.innerHTML += `
        <center>
            <tr>
                <td> ${unit.name}: </td>
                <td>${unit.manager}, </td>
                <td>Doctors: ${unit.numberOfEmployees.doctors}, </td>
                <td>Nurses: ${unit.numberOfEmployees.nurses}, </td>
                <td>Allied Health: ${unit.numberOfEmployees.alliedHealth}, </td>
                <td>Support Staff: ${unit.numberOfEmployees.supportStaff}, </td>
                <td> Beds: ${unit.numberOfBeds}</td>
            </tr>
            <br/>
        `;
    });

    // Close the table and center tags
    hospitalInfoDiv.innerHTML += `
        </table>
    `;
}
        
    