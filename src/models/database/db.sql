CREATE DATABASE lista_tareas;


CREATE TABLE tareas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Tarea VARCHAR(100) NOT NULL,
    Fecha_tarea VARCHAR(100)
);