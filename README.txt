
Mini To-Do con Filtros — Sprint 1

Objetivo
    Construir una version minima la cual sea usable que permita crear y listar tareas, cumpliendo con los requisitos
    Título obligatorio
    Mostrar tareas en lista
    Contador visible

Tecnologías---------------------------------------------------------
    HTML5, CSS3 y JavaScript puro
    Almacenamiento temporal en memoria (sin localStorage aún)
    Editor usado: Visual Studio Code con extensión Live Server

Cómo ejecutar--------------------------------------------------------
    Abrir index.html con doble clic o desde VS Code → “Go Live”.
    Escribir el nombre de una tarea y pulsar Agregar o Enter.
    Verás la tarea en la lista y el contador actualizado.

Decisiones técnicas---------------------------------------------------
    Se usó una función autoinvocada (IIFE) para aislar las variables.
    Las tareas se almacenan en un arreglo local tasks[].
    Se validan entradas vacías antes de agregar.
    El contador se actualiza dinámicamente.

Resultados del Sprint 1----------------------------------------------
    Se cumple el requisito de creación y listado.
    No hay errores en consola.
    Diseño base y estructura lista para los siguientes Sprints.