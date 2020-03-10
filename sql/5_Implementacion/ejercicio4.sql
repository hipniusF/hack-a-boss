CREATE DATABASE ejercicio4;
use ejercicio4;


CREATE TABLE cliente (
	 id int primary key auto_increment,
    nif int not null,
    nombre varchar(255) not null,
    direccion varchar(255) not null,
    ciudad varchar(255) not null,
    tlf int not null
);

CREATE TABLE coche (
	 matricula varchar(6) primary key,
    marca varchar(255) not null,
    modelo varchar(255) not null,
    color varchar (255) not null,
    precio decimal(10, 2) not null,
    id_cliente int,
    FOREIGN KEY (id_cliente) references cliente(id)
);

CREATE TABLE revision (
	 id int primary key auto_increment,
    cambioDeFiltro boolean not null default false,
    cambioDeFrenos boolean not null default false,
    cambioDeAceite boolean not null default false,
    matricula_coche varchar(6) not null,
    FOREIGN KEY (matricula_coche) references coche(matricula)
    );