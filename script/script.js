let textField = document.createElement('input');
textField.setAttribute('type', 'text');
document.body.appendChild(textField);

let sidebar = document.createElement('div');
sidebar.textContent = 'Sidebar content';
sidebar.style.display = 'none'; 
sidebar.style.width = '200px';
sidebar.style.backgroundColor = 'lightgray';
sidebar.style.position = 'fixed';
sidebar.style.top = '28px';
sidebar.style.right = '328px';
document.body.appendChild(sidebar);

textField.addEventListener('focus', function() {
    sidebar.style.display = 'block';
});

textField.addEventListener('blur', function() {
    sidebar.style.display = 'none';
   
});
