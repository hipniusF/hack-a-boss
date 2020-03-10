CREATE DATABASE ejercicio1;
use ejercicio1;

CREATE TABLE cliente(
    id int primary key auto_increment,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    fecha_nacimiento date
);

CREATE TABLE producto (
     id int primary key auto_increment,
     nombre varchar(255) not null,
     precio decimal(10 ,2) not null
);

CREATE TABLE proveedor (
    nif int primary key,
    nombre varchar(255) not null,
    direccion varchar(255) not null
);

CREATE TABLE compra ( 
    id_cliente int, 
    id_producto int, 
    fecha_compra datetime not null, 
    foreign key (id_cliente) references cliente(id), 
    foreign key (id_producto) references producto(id)
);

ALTER TABLE producto
ADD column nif_proveedor varchar(9) not null;

ALTER TABLE producto
ADD constraint FK_proveedor_producto
foreign key (nif_proveedor) references proveedor(nif); 
