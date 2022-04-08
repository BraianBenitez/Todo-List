/**
 * Función anidada al botón que, si no hay ningún texto ingresado al momento de 
 * tocarlo, despliega una advertencia.
 * 
 * Si hay texto, crea elementos en el div de tareas con un botón en cada una 
 * que nos da la posibilidad de borrarlas individualmente en caso de apretarlos
 */

document.querySelector('#push').onclick = function() {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert('Please enter a task');
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class='task'>
            <span id='taskname'>
                ${document.querySelector('#new-task input').value}
            </span>
            <button class='delete'>
                <i class='far fa-trash-alt'></i>
            </button>
        </div>
        `;

        let currentTasks = document.querySelectorAll('.delete');
        
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}