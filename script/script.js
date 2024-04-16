let table = document.createElement('table');
table.style.border = '1px solid #000'; 

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    for (let j = 1; j <= 10; j++) {
        let cell = row.insertCell();
        cell.style.border = '1px solid #000'; 
        cell.style.padding = '5px'; 
        cell.innerText = i + " * " + j + " = " + (i * j); 
    }
}

document.body.appendChild(table);