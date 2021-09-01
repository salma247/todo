let addbtn = document.getElementById('addbtn');
let allTasks = document.getElementById('listItems');
let taskInput = document.getElementById('taskInput');
let noTasks = document.querySelector('.noTasks');

//ADD TASKS

let addTasks = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "" || taskData.length < 2) {
        alert("Please Enter Valid Data");
    } else {
        noTasks.classList.add('none');
        allTasks.innerHTML += `<div class="alert task" role="alert" style="border-color: #0C6170; background-color: #DBF5F0; text-transform: none;">${taskData}
        <i class="fas fa-trash float-right delete" style = "color : red; font-size : 24px"></i>
        </div>`;
        taskInput.value = '';
    }

}
addbtn.addEventListener('click', addTasks);

//MARK DONE
allTasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('done');
    }
    
});
//ADD TASK WHEN I PRESS ENTER
taskInput.addEventListener('keyup', function onEvent(e) {
    if (e.key === "Enter") {
        addTasks();
    }
});



//Remove Tasks

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
       
    }
    if(allTasks.children.length == 0){
        noTasks.classList.remove('none');
    }
});


//dark mode
let icon = document.querySelector('.fa-lightbulb');
let label = document.querySelector('label');

icon.addEventListener('click', (e)=>{
    let body = document.querySelector('body');
    if(e.target.classList.contains('fas')){
        e.target.classList.remove('fas');
        e.target.classList.add('far');
        body.classList.add('dark');
        noTasks.style.color = '#0C6170';
        label.style.color = '#0C6170';
        allTasks.style.color = '#0C6170';

    }else{
        e.target.classList.remove('far');
        body.classList.remove('dark');
        e.target.classList.add('fas');
        
    }
});

