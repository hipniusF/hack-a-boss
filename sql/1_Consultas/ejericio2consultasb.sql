use hb_employees;

-- 1. Selecciona todos los datos de los empleados y los departamentos relacionados  (explícito e implícito)
SELECT * FROM employee e INNER JOIN department d ON e.department_id = d.id;
SELECT * FROM employee e, department d WHERE e.department_id = d.id;

-- 2. Obten el nombre del empleado y el nombre del departamento en el que trabaja
SELECT e.name, d.name FROM employee e, department d WHERE e.department_id = d.id;

-- 3. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000  (explícito e implícito)
SELECT e.name, e.salary, d.name FROM employee e, department d WHERE e.department_id = d.id AND e.salary > 2000;
SELECT e.name, e.salary, d.name FROM employee e INNER JOIN department d ON e.department_id = d.id WHERE e.salary > 2000;

-- 3b. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000 y que trabajan en el departamento que está en DALLAS
SELECT * FROM employee e, department d 
WHERE e.department_id = d.id 
AND e.salary > 2000 
AND d.location = 'DALLAS';

-- 4. Obten los empleados que cobran más que sus jefes
SELECT * FROM employee e, employee boss WHERE e.manager_id = boss.id AND e.salary > boss.salary;

-- 5. Obten los empleados que cobran más que sus jefes (incluyendo comisiones). Son los mismos
SELECT 
	 e.name,
	 (e.salary + coalesce(e.commission, 0)) as eTotal, 
	 (boss.salary + coalesce(boss.commission, 0)) as bossTotal 
FROM employee e, employee boss
WHERE e.manager_id = boss.id
AND e.salary + coalesce(e.commission, 0) > (boss.salary + coalesce(boss.commission, 0));

-- 6. Obtén el número de empleados que hay en la empresa sin tener en cuenta los que están en DALLAS
SELECT COUNT(e.name) FROM employee e, department d WHERE e.department_id = d.id AND d.location != 'DALLAS';


