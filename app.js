/* 
  SPRINT SEMANA NO.1
  ------------------------------------------
  * CREAR Y LISTAR TAREAS
  * REQUISITOS:
      - TÍTULO OBLIGATORIO
      - APARECE EN LISTA
      - CONTADOR VISIBLE
*/

(() => {
  const form = document.getElementById('taskForm');
  const input = document.getElementById('title');
  const list = document.getElementById('taskList');
  const counterEl = document.getElementById('counter');
  const errorMsg = document.getElementById('errorMsg');



  /** @type {{ id:number; title:string; createdAt:number; }[]} */
  const tasks = [];
  let nextId = 1;



    function updateCounter() {
        const n = tasks.length;
        counterEl.textContent = n === 1 ? '1 tarea' : `${n} tareas`;
        }

        

    function render() {
        list.innerHTML = '';
        
        for (const t of tasks) {
            const li = document.createElement('li');
            li.className = 'task-item';

            const titleEl = document.createElement('p');
            titleEl.className = 'task-title';
            titleEl.textContent = t.title;

            li.appendChild(titleEl);
            list.appendChild(li);

            }

            updateCounter();

        }



    function addTask(title) {
            tasks.push({ id: nextId++, title, createdAt: Date.now() });
            render();
        }

    function isValidTitle(text) {
            return text && text.trim().length > 0;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = input.value.trim();

            if (!isValidTitle(value)) {
                errorMsg.hidden = false;
                input.focus();
                return;
           
            }

            errorMsg.hidden = true;
            addTask(value);
            input.value = '';
            input.focus();

        });

         render();
})();