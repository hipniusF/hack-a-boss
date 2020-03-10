CREATE DATABASE ejercicio2;
use ejercicio2;

CREATE TABLE destino (
	 id int primary key,
    nombre varchar(255) not null,
    direccion varchar(255) not null
);

CREATE TABLE camionero (
	 dni varchar(9) primary key,
    nombre varchar(255) not null,
    direccion varchar(255) not null,
    poblacion varchar(255) not null,
    salario decimal (10, 2) not null,
    tlf int not null
);

CREATE TABLE paquete (
	 id int primary key auto_increment,
    destinatario varchar(255) not null,
    descripcion varchar(255) not null,
    id_destino int not null,
    dni_camionero varchar(9) not null,
    FOREIGN KEY (id_destino) references destino(id),
    FOREIGN KEY (dni_camionero) references camionero(dni)
);

CREATE TABLE camion (
	 matricula varchar(6) primary key,
    modelo varchar(255) not null,
    tipo varchar(255) not null,
    potencia varchar(255) not null
);

CREATE TABLE camion_camionero (
	 dni_camionero varchar(9),
    matricula_camion varchar(6),
    FOREIGN KEY (dni_camionero) references camionero(dni),
    FOREIGN KEY (matricula_camion) references camion(matricula)
);
    