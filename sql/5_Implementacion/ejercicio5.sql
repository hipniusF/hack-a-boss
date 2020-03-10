CREATE DATABASE ejercicio5;
use ejercicio5;

CREATE TABLE usuario (
	 id int primary key auto_increment,
    nombre varchar(255) not null,
    apellidos varchar(255) not null,
    tlf int not null
);

CREATE TABLE medico (
	 id_usuario int not null,
    FOREIGN KEY (id_usuario) references usuario(id),
	 especialidad varchar(255) not null
);

CREATE TABLE paciente (
	 id_usuario int not null,
    FOREIGN KEY (id_usuario) references usuario(id),
    direccion varchar(255) not null,
    poblacion varchar (255) not null,
    provincia varchar(255) not null,
    CP int,
    id_medico int not null,
    FOREIGN KEY (id_medico) references medico(id_usuario)
);

CREATE TABLE ingreso (
	 id int primary key auto_increment,
    n_habitacion int not null,
    n_cama int not null,
    fecha date,
    id_paciente int not null,
    FOREIGN KEY (id_paciente) references paciente(id_usuario)
);
