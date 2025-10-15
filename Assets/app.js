/* 
  SPRINT SEMANA NO.1: Crear y listar
  SPRINT SEMANA NO.2: Eliminar, Editar, Estado y Prioridad
  VERSIÓN MEJORADA - Combina lo mejor de ambos enfoques
*/

(() => {
    const form = document.getElementById('taskForm');
    const input = document.getElementById('title');
    const prioritySel = document.getElementById('priority');
    const list = document.getElementById('taskList');
    const counterEl = document.getElementById('counter');
    const errorMsg = document.getElementById('errorMsg');

    /** @typedef {"alta"|"media"|"baja"} Priority */
    
    /** 
     * @type {{
     *   id: string;
     *   title: string;
     *   completed: boolean;
     *   priority: Priority;
     *   createdAt: number;
     *   updatedAt: number;
     *   editing?: boolean;
     * }[]} 
     */
    let tasks = loadTasks();
    let nextId = tasks.length > 0 ? Math.max(...tasks.map(t => parseInt(t.id))) + 1 : 1;

    // --- PERSISTENCIA MEJORADA ---
    function loadTasks() {
        try {
            const saved = localStorage.getItem('todo-tasks');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    }

    function saveTasks() {
        localStorage.setItem('todo-tasks', JSON.stringify(tasks));
    }

    // --- RENDERIZADO OPTIMIZADO ---
    function updateCounter() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        counterEl.textContent = total === 0 ? '0 tareas' : 
                               `${completed}/${total} tareas`;
    }

    function priClass(p) { return `badge-pri ${p}`; }
    function priLabel(p) { return p === 'alta' ? 'Alta' : p === 'baja' ? 'Baja' : 'Media'; }

    function render() {
        if (tasks.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <p>No hay tareas pendientes</p>
                    <p class="empty-hint">Agrega una tarea para comenzar</p>
                </div>
            `;
            updateCounter();
            return;
        }

        list.innerHTML = '';
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.dataset.id = task.id;

            const left = document.createElement('div');
            left.className = 'task-left';

            // Checkbox mejorado
            const chk = document.createElement('div');
            chk.className = `task-toggle ${task.completed ? 'checked' : ''}`;
            chk.title = task.completed ? 'Marcar como pendiente' : 'Marcar como completada';
            chk.addEventListener('click', () => toggleDone(task.id));
            left.appendChild(chk);

            // Contenido principal
            if (task.editing) {
                const editInput = document.createElement('input');
                editInput.className = 'edit-input';
                editInput.type = 'text';
                editInput.value = task.title;  
                editInput.maxLength = 120;
                editInput.addEventListener('keydown', (ev) => {
                    if (ev.key === 'Enter') saveEdit(task.id, editInput.value.trim()); 
                    if (ev.key === 'Escape') cancelEdit(task.id);
                });
                left.appendChild(editInput);
                setTimeout(() => editInput.focus(), 0);
            } else {
                const titleEl = document.createElement('span');
                titleEl.className = 'task-title' + (task.completed ? ' done' : '');
                titleEl.textContent = task.title;
                left.appendChild(titleEl);
            }

            const right = document.createElement('div');
            right.className = 'task-right';

            if (task.editing) {
                // Modo edición
                const sel = document.createElement('select');
                sel.innerHTML = `
                    <option value="alta" ${task.priority === 'alta' ? 'selected' : ''}>Alta</option>
                    <option value="media" ${task.priority === 'media' ? 'selected' : ''}>Media</option>
                    <option value="baja" ${task.priority === 'baja' ? 'selected' : ''}>Baja</option>`;
                sel.addEventListener('change', () => { 
                    task.priority = sel.value; 
                });
                right.appendChild(sel);

                const saveBtn = document.createElement('button');
                saveBtn.className = 'icon-btn';
                saveBtn.innerHTML = '💾';
                saveBtn.title = 'Guardar';
                saveBtn.addEventListener('click', () => {
                    const newTitle = left.querySelector('.edit-input').value.trim();
                    saveEdit(task.id, newTitle);
                });
                right.appendChild(saveBtn);

                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'icon-btn';
                cancelBtn.innerHTML = '❌';
                cancelBtn.title = 'Cancelar';
                cancelBtn.addEventListener('click', () => cancelEdit(task.id));
                right.appendChild(cancelBtn);

            } else {
                // Modo visualización
                const pri = document.createElement('span');
                pri.className = priClass(task.priority);
                pri.textContent = priLabel(task.priority);
                right.appendChild(pri);

                const editBtn = document.createElement('button');
                editBtn.className = 'icon-btn edit';
                editBtn.innerHTML = '✏️';
                editBtn.title = 'Editar tarea';
                editBtn.addEventListener('click', () => startEdit(task.id));
                right.appendChild(editBtn);

                const delBtn = document.createElement('button');
                delBtn.className = 'icon-btn delete';
                delBtn.innerHTML = '🗑️';
                delBtn.title = 'Eliminar tarea';
                delBtn.addEventListener('click', () => removeTask(task.id));
                right.appendChild(delBtn);
            }

            li.appendChild(left);
            li.appendChild(right);
            list.appendChild(li);
        });

        updateCounter();
    }

    // --- OPERACIONES CRUD ---
    function addTask(title) {
        const newTask = { 
            id: (nextId++).toString(),
            title, 
            completed: false,
            priority: prioritySel.value || 'media',
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        
        tasks.push(newTask);
        saveTasks();
        render();
        input.focus();
    }

    function removeTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        render();
    }

    function toggleDone(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.updatedAt = Date.now();
            saveTasks();
            render();
        }
    }

    function startEdit(id) {
        tasks.forEach(t => t.editing = false);
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.editing = true;
            render();
        }
    }

    function saveEdit(id, newTitle) {
        if (!newTitle) return;
        
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.title = newTitle;
            task.editing = false;
            task.updatedAt = Date.now();
            saveTasks();
            render();
        }
    }

    function cancelEdit(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.editing = false;
            render();
        }
    }

    // --- VALIDACIÓN ---
    function isValidTitle(text) {
        return text && text.trim().length > 0;
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.hidden = false;
    }

    function hideError() {
        errorMsg.hidden = true;
    }

    // --- EVENT LISTENERS ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = input.value.trim();

        if (!isValidTitle(value)) {
            showError('El título es obligatorio.');
            input.focus();
            return;
        }

        hideError();
        addTask(value);
        input.value = '';
        prioritySel.value = 'media';
    });

    input.addEventListener('input', hideError);

    // Inicialización
    render();
})();