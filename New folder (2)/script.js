document.getElementById('todo').addEventListener('submit'),
// anonymous function
function (e){
    e.preventDefault();
    const taskText = document.getElementById('todo-input').value;
    // empty or not
    if(taskText==='') return ;
    const li=document.createElement('li');

    const span =document.createElement('span');

    span.className='task-text';
    span.textContent=taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    const completeBtn =document.createElement('button');
    completeBtn.className ='complete-btn';
    //naming button
    completeBtn.textContent='complete';
    span.classList.toggle('completed');
    li.classList.toggle('completed');

};