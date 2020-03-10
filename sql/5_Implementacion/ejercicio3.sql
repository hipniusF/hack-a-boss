CREATE DATABASE ejercicio3;
use ejercicio3;

CREATE TABLE profesor (
	 dni varchar(9) primary key,
    nombre varchar(255) not null,
    direccion varchar(255),
    tlf int not null
);

CREATE TABLE modulo (
	 id int primary key auto_increment,
    nombre varchar(255) not null,
    dni_profesor varchar(9), 
    foreign key (dni_profesor) references profesor(dni)
);

CREATE TABLE alumno (
	 n_expediente int primary key auto_increment,
    nombre varchar(255) not null,
    apellidos varchar(255) not null,
    fecha_nacimiento date not null
);

CREATE TABLE matriculados_modulo (
	 id_modulo int,
    n_expediente_alumno int,
    foreign key (id_modulo) references modulo(id),
    foreign key (n_expediente_alumno) references alumno(n_expediente)
);

ALTER TABLE modulo
ADD column n_expediente_delegado int not null;

ALTER TABLE modulo
ADD constraint FK_modulo_delegado
FOREIGN KEY (n_expediente_delegado) references alumno(n_expediente);
    