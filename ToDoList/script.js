let btn = document.getElementById('btn');
let right = document.querySelector('.right');

btn.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    
    
    if (name && description && date) {
        submitTask(name, description, date);
    } else {
        alert('Please fill out all fields');
    }
    
    
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
});

function submitTask(name, description, date) {
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    taskContainer.innerHTML = `
        <div class="main">
            <div class="taskname">Task Name: ${name}</div>
            <div class="taskdescription">Description: ${description}</div>
            <div class="taskdate">Date: ${date}</div>
        </div>
        <div class="deledit">
            <div class="edit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="30" width="30">
                    <path d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                    <line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                </svg>
            </div>
            <div class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30" width="30">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z"></path>
                </svg>
            </div>
        </div>   
    `;
    
    
    right.appendChild(taskContainer);

    
    taskContainer.querySelector('.delete').addEventListener('click', () => {
        taskContainer.remove();
    });

   
    taskContainer.querySelector('.edit').addEventListener('click', () => {
        document.getElementById('name').value = name;
        document.getElementById('description').value = description;
        document.getElementById('date').value = date;
        
       
        taskContainer.remove();
    });
}
