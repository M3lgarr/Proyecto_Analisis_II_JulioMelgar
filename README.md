# Mini To-Do con Filtros — Version Final
### Filtros, Búsqueda, Persistencia y Modo Oscuro/Claro

---

## Descripción general
Esta versión corresponde al **Sprint de la Semana 3** del proyecto *Mini To-Do con Filtros*.  
Se añadieron funcionalidades avanzadas de **filtros por estado y prioridad**, **búsqueda dinámica**, **persistencia local completa** y un nuevo **modo claro/oscuro** para mejorar la experiencia visual y la personalización del usuario.

---

## Nuevas funcionalidades implementadas
1. **Filtros por estado:** permite visualizar solo tareas *Pendientes*, *Hechas* o *Todas*.  
2. **Filtros por prioridad:** filtra las tareas por nivel de importancia (*Alta*, *Media*, *Baja*).  
3. **Búsqueda dinámica:** permite buscar tareas en tiempo real por coincidencia en el título.  
4. **Persistencia avanzada:** guarda automáticamente en `localStorage` las tareas, filtros aplicados y preferencia de tema.  
5. **Modo Claro / Oscuro (🌓):** alterna entre ambos temas, recordando la elección del usuario.  
6. **Estados vacíos inteligentes:** muestra mensajes amigables cuando no hay tareas o los filtros no devuelven resultados.  
7. **Contador mejorado:** muestra el progreso de tareas completadas (`hechas/total`) y la cantidad filtrada.  

---

## Diseño y tecnología
- **Lenguajes:** HTML5, CSS3, JavaScript (ES6+).  
- **Estilo visual:** CSS moderno con variables, sombras suaves, transiciones y soporte de modo oscuro.  
- **Distribución:** uso de *CSS Grid* y *Flexbox* para estructura adaptable.  
- **Persistencia:** uso de `localStorage` para guardar tareas, filtros y tema del usuario.  
- **Accesibilidad:** incluye navegación por teclado, colores con contraste adecuado y mensajes en vivo (`aria-live`).  

---

## Cómo ejecutar el proyecto
1. Abrir el archivo `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, etc.).  
2. Escribir el título de una tarea y seleccionar su prioridad.  
3. Presionar **Agregar** para crear una nueva tarea.  
4. Usar el **checkbox** para marcarla como hecha o pendiente.  
5. Editar o eliminar tareas con los íconos ✏️ y 🗑️.  
6. Aplicar filtros por estado o prioridad desde la barra superior.  
7. Buscar una tarea por nombre en el campo de búsqueda.  
8. Cambiar entre **modo claro** y **modo oscuro** con el botón 🌓.  
9. Todos los cambios se guardan automáticamente en el navegador.  

---

## Pruebas y validaciones
- Los filtros y búsqueda responden en tiempo real sin errores.  
- Se conserva la preferencia de tema y los filtros tras recargar la página.  
- No se permite agregar tareas vacías.  
- Los botones **Editar**, **Eliminar** y **Checkbox** funcionan correctamente.  
- Diseño **responsivo** hasta 560 px de ancho.  
- No se detectaron errores en consola.  

---

## Conclusión
El proyecto cumple con todos los requisitos del **Sprint Semana 3**:  
- Filtros funcionales por estado y prioridad.  
- Búsqueda dinámica y persistente.  
- Modo claro/oscuro totalmente integrado.  
- Interfaz moderna, limpia y adaptable.  
- Código modular y preparado para futuras mejoras (ordenamiento, estadísticas o conexión a base de datos en próximos sprints).  

---

## Autor
**Julio David Melgar Barillas** — *5190-22-6658*  
Universidad Mariano Gálvez de Guatemala  
Curso: *Análisis de Sistemas II*  
Proyecto: *Mini To-Do con Filtros — Semana 3*  
**Fecha:** Octubre 2025  
