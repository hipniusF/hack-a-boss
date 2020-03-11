CREATE DATABASE ejercicio6;
use ejercicio6;

CREATE TABLE presidente (
	 dni varchar(9) primary key,
    nombre varchar(255) not null,
    apellidos varchar(255) not null,
    fecha_nacimiento date not null,
    fecha_eleccion date not null
);


CREATE TABLE equipo (
	 id int primary key auto_increment,
    nombre varchar(255) not null,
    aforo_estadio int not null,
    estadio varchar(255) not null,
    año_fundacion date not null,
    dni_presidente varchar(9),
    FOREIGN KEY (dni_presidente) references presidente(dni)
);

CREATE TABLE jugador (
	 id int primary key auto_increment,
	 nombre varchar(255) not null,
    posicion varchar(15) not null,
    fecha_nacimiento date not null,
    id_equipo int not null,
    FOREIGN KEY (id_equipo) references equipo(id)
);

CREATE TABLE partido (
	 id int primary key auto_increment,
    fecha date not null,
    goles_equipo_casa int not null,
    goles_equipo_fuera int not null,
    id_equipo_casa int not null,
    id_equipo_fuera int not null,
    FOREIGN KEY (id_equipo_casa) references equipo(id),
    FOREIGN KEY (id_equipo_fuera) references equipo(id)
);

CREATE TABLE gol (
	 minuto int not null,
    descripcion varchar(255),
    id_jugador int not null,
    id_partido int not null,
    FOREIGN KEY (id_jugador) references jugador(id),
    FOREIGN KEY (id_partido) references partido(id)
);