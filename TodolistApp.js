// UI Variables
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');
const taskInput= document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
	// add task
	form.addEventListener('submit', addTask);
	//remove task event
	taskList.addEventListener('click', removeTask);
	// clear task event
	clearBtn.addEventListener('click', clearTasks);
	// filter tasks 
	filter.addEventListener('keyup', filterTasks);

}

// add Task

function addTask(e){
if(taskInput.value === '')
{
	alert('Add a task:I have added a text here brother!!!');
}
else
{

// Create li element

const li= document.createElement('li');
// add class
li.className='collection-item';

// create node and append to li
li.appendChild(document.createTextNode(taskInput.value));


const link = document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// append to li child
li.appendChild(link);

//append li to ul
taskList.appendChild(li);

//clear input
taskInput.value = '';

e.preventDefault();
}

}

function removeTask(e){
	if(e.target.parentElement.classList.contains
		('delete-item')){
		if(confirm('Are You Sure?'))
		{
	 	e.target.parentElement.parentElement.remove();
		}
	}
}

// clear 
function clearTasks(){
/*taskList.innerHTML= '';*/

// faster

while(taskList.firstChild){
	taskList.removeChild(taskList.firstChild);
}


}
// filter tasks 
function filterTasks(e){
const text=e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(function(task){
	const item= task.firstChild.textContent;
	if(item.toLowerCase().indexOf(text)!=-1){
		task.style.display='block';
	}else{
		task.style.display='none';
	}
});
}
