use hb_employees;

-- 47. Lista los detalles de los empleados con los detalles de sus respectivos departamentos
SELECT * FROM employee;
SELECT * FROM department WHERE id IN (SELECT department_id FROM employee);

-- 48. Lista los detalles de los empleados con un salario más alto que BLAKE
SELECT * FROM employee WHERE salary > (SELECT salary FROM employee WHERE name = 'BLAKE');

-- 49. Lista los empleados que tienen el mismo job que ALLEN
SELECT * FROM employee WHERE job in (SELECT job FROM employee WHERE name = 'ALLEN');

-- 49b. Igual q la anterior, pero ya sabemos el job de ALLEN, queremos omitirlo
SELECT * FROM employee WHERE job in (SELECT job FROM employee WHERE Name = 'ALLEN') AND name != 'ALLEN';

-- 50. Lista de empleados que llevan más tiempo en la empresa que KING
SELECT * FROM employee WHERE TO_DAYS(hire_date) < TO_DAYS((SELECT hire_date FROM employee WHERE name = 'KING'));

-- 51. Lista de empleados del departamento 20 que tienen los mismos trabajos que los empleados del departamento 10.
-- podemos comprobar los jobs del departamento 10, y luego volver a tirar la query anterior para comprobar
SELECT * FROM employee WHERE department_id = 20 AND job in (SELECT job FROM employee WHERE department_id = 10);

-- 53. Nombre y salario de FORD y SMITH y todos aquellos que tengan el salario igual a 1 de ellos.
SELECT * FROM employee WHERE salary in (SELECT salary FROM employee WHERE name in ('FORD', 'SMITH'));

-- 53.b Nombre y salario de emplados que tienen el mismo salario que FORD o SMITH ordenador por salario más alto. FORD O SMITH no deben salir en el resultado.
SELECT * FROM employee WHERE NOT name in ('FORD', 'SMITH') AND salary in (SELECT salary FROM employee WHERE name in ('FORD', 'SMITH')) ORDER BY salary;

-- 54. Lista de empleados cuyo trabajo es el mismo que el de MILLER o cuyo salario es mayor que el de ALLEN
SELECT * FROM employee WHERE job in (SELECT job FROM employee WHERE name = 'MILLER') OR salary > (SELECT salary FROM employee WHERE name = 'ALLEN');

-- 55. Lista de empleados cuyo salario es mayor que el sueldo total de todos los empleados SALESMAN
SELECT * FROM employee WHERE salary > (SELECT SUM(salary) FROM employee WHERE job = 'SALESMAN');

-- 58. Lista de empleados cuyos trabajos son los mismos que los de SMITH o ALLEN (y q no muestre a estos últimos).
SELECT * FROM employee WHERE job in (SELECT job FROM employee WHERE name in ('SMITH', 'ALLEN')) AND NOT name in ('SMITH', 'ALLEN') ;

-- 59. Lista nombre y salarios de empleados cuyo salario es el mismo que cualquier SALESMAN con 5 años de antiguedad o más insertar la siguiente fila antes de hacer la query.
INSERT INTO employee VALUES ('7777','pepe','CLERK', null,'1981-02-22','1500.00','500.00','30');

SELECT * FROM employee WHERE salary in (
	 SELECT salary FROM employee WHERE job = 'SALESMAN' AND DATEDIFF(CURRENT_DATE, hire_date) > 5
);

-- 60. Lista de tipos de empleados (jobs) que existen en el departamento 10 pero no en el 20.
SELECT job FROM employee WHERE department_id = 10 AND not job in (
	 SELECT job FROM employee WHERE department_id = 20
);

-- 62. Encuentra el salario más alto de todos los empleados
SELECT MAX(salary) FROM employee;

-- 63. Muestra la información del empleados con el salario más alto
SELECT * FROM employee WHERE salary = (
	 SELECT MAX(salary) FROM employee
);

-- 64. Find the highest paid employee of sales department.
SELECT * FROM employee WHERE salary = (
	 SELECT MAX(salary) FROM employee WHERE department_id = (
	 SELECT id FROM department WHERE name = 'SALES'
));

-- 66. Lista de empleados con más antigüedad que el último empleado contratado cuyo manager es KING.
SELECT * FROM employee WHERE hire_date < (
	 SELECT hire_date FROM employee WHERE hire_date = (
		  SELECT MAX(hire_date) FROM employee WHERE manager_id = (
				SELECT id FROM employee WHERE name = 'KING'
		  )
	 )
);

-- 66b. comprobar los empleados del equipo de KING, ordenados de menos a más antigüedad, y volver a tirar la query anterior
SELECT * FROM employee WHERE manager_id = (
	 SELECT id FROM employee WHERE name = 'KING'
) ORDER BY hire_date;

-- 68. Lista de empleados contratados en el 81 (bonus: por lo menos 3 formas diferentes de conseguir el mismo resultado)
SELECT * FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981;

-- 68b Lista de empleados contratados en Diciembre de 1981 (bonus: por lo menos 3 formas diferentes de conseguir el mismo resultado)
SELECT * FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981 AND EXTRACT(MONTH FROM hire_date) = 11;

-- 69. Lista de SALESMAN contratados en el 81.
SELECT * FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981 AND job = 'SALESMAN';

-- 70. Lista de empleados contratados en el 81 con el mismo job que el primer contratado en ese mismo año.
SELECT * FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981 AND job = (
	 SELECT job FROM employee WHERE hire_date = (
		  SELECT MIN(hire_Date) FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981
    )
);

 -- 70b muestra la lista de empleados contratados en el 81 ordenador de mayor a menor antigüedad para comprobar su job y vuelve a tirar la query anterior
SELECT * FROM employee WHERE EXTRACT(YEAR FROM hire_date) = 1981 ORDER BY hire_date;

-- 71. muestra el nombre, slario mensual y salario anual de todos los empleados
SELECT name, salary, (salary * 12) as anual FROM employee;

-- 71b. Muestra el gasto mensual total en salarios de managers
SELECT SUM(salary) FROM employee WHERE job = 'MANAGER';

-- 71c Muestra el gasto anual total en salarios de managers
SELECT (SUM(salary)*12) FROM employee WHERE job = 'MANAGER';

-- 72. Muestra el gasto anual total en salarios de los empleados con más de 3 años de antigüedad
SELECT (SUM(salary)*12) FROM employee WHERE  DATEDIFF(CURRENT_DATE, hire_date) > 3;
