USE insti;
SHOW TABLES;

-- 1. listado de horarios con el nombre del aula, dia de la semana, hora de inicio y fin, 
-- nombre y apellidos del profesor q la imparte, nombre de la asignatura y nombre del grupo
SELECT * FROM horario h, usuario p, asignatura a, grupo g WHERE h.profesor_id = p.id and h.asignatura_id = a.id and h.grupo_id = g.id;


-- 2. listado de horarios del lunes para el grupo con nombre 'grupo1'
SELECT * FROM horario WHERE dia_semana = 'l' AND grupo_id = 1;

-- 3. listado de horarios de jueves y viernes para 'jose mato'
SELECT h.* FROM horario h, usuario u WHERE h.profesor_id = u.id and (h.dia_semana = 'j' or h.dia_semana = 'v') and u.nombre = 'jose' and u.apellidos = 'mato';

-- 4. listado de asignaturas q imparte cada profesor con el nombre 
-- y apellidos del profesor y nombre de la asignatura
SELECT a.nombre, u.nombre, u.apellidos FROM asignaturas_profesores rel, asignatura a, usuario u WHERE u.id = rel.profesor_id and a.id = rel.asignatura_id;

-- 5. listado asignaturas del módulo 'desarrolo apps 1'
SELECT a.* FROM modulo m, asignatura a, asignaturas_modulos rel WHERE m.id = rel.modulo_id and a.id = rel.asignatura_id and m.nombre = 'desarrolo apps 1';

-- 6. listado de alumnos del grupo 'grupo1'
SELECT u.* FROM usuario u, modulo m, grupo g WHERE u.grupo_id = g.id and g.modulo_id = m.id;

-- 7. listado de todos los alumnos
SELECT * FROM usuario WHERE profesor=0;