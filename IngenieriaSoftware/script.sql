-- El foro no está incluido en esta versión

DROP TABLE IF EXISTS Torneo;
DROP TABLE IF EXISTS InscripcionTorneo;
DROP TABLE IF EXISTS Arma;
DROP TABLE IF EXISTS Equipacion;
DROP TABLE IF EXISTS ObjetoTienda;
DROP TABLE IF EXISTS Usuario;
DROP TABLE IF EXISTS Equipo;

CREATE TABLE Equipo(
	nombre CHAR(20) NOT NULL,
	nucleo CHAR(30) NOT NULL,
	ciudad CHAR(30) NOT NULL,
	puntosRanking INTEGER,
	puntosMaster INTEGER,
	logo CHAR(80) NOT NULL,
	PRIMARY KEY (nombre)
	);

CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  name char(20) NOT NULL,
  surname char(40) NOT NULL,
  nick char(20) NOT NULL,
  username char(20) NOT NULL,
  email varchar(45) NOT NULL,
  nif char(9) NOT NULL,
  password varchar(240) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1'

CREATE TABLE ObjetoTienda(
	codigo INTEGER NOT NULL AUTO_INCREMENT,
	precio FLOAT NOT NULL,
	direccionFacturacion CHAR(80) NOT NULL,
	PRIMARY KEY (codigo)
	);

CREATE TABLE Arma(
	codigo INTEGER NOT NULL,
	tipo CHAR(20) NOT NULL,
	CHECK (tipo IN ('kette','stab','dual','mandoble','qtip','escudo')),
	PRIMARY KEY (codigo),
	FOREIGN KEY (codigo) REFERENCES ObjetoTienda(codigo)
	);

CREATE TABLE Equipacion(
	codigo INTEGER NOT NULL,
	equipo CHAR(20) NOT NULL,
	PRIMARY KEY (codigo),
	FOREIGN KEY (codigo) REFERENCES ObjetoTienda(codigo),
	FOREIGN KEY (equipo) REFERENCES Equipo(nombre)
	);

CREATE TABLE Torneo(
	codigo INTEGER NOT NULL AUTO_INCREMENT,
	nombre CHAR(40) NOT NULL,
	fecha DATE NOT NULL,
	modelo CHAR(10) NOT NULL,
	categoria CHAR(15) NOT NULL,
	CHECK (modelo IN ('piedras','puntos'))
	CHECK (categoria IN ('local','regional','nacional'))
	PRIMARY KEY (codigo),
	);

CREATE TABLE InscripcionTorneo(
	codigoTorneo INTEGER NOT NULL,
	equipo CHAR(20) NOT NULL,
	resultado INTEGER,
	PRIMARY KEY (codigoTorneo, equipo),
	FOREIGN KEY (codigoTorneo) REFERENCES Torneo(codigo),
	FOREIGN KEY (equipo) REFERENCES Equipo(nombre),
	);

-- DATA

INSERT INTO Equipo (nombre,nucleo,ciudad,puntosRanking,puntosMaster,logo) VALUES ('Bushido','Valladolid','Valladolid',1000,1001,'logo.png');
INSERT INTO Equipo (nombre,nucleo,ciudad,puntosRanking,puntosMaster,logo) VALUES ('Gulden Draak','Valladolid','Valladolid',1001,1000,'logo.png');
INSERT INTO Equipo (nombre,nucleo,ciudad,puntosRanking,puntosMaster,logo) VALUES ('LOT','Valladolid','Valladolid',100,100,'logo.png');

INSERT INTO Usuario (nombre,apellidos,nick,dni,username,password,telefono,equipo,capitan,admin,photo) VALUES ('Pablo','Martínez López','Pablo','00000000X','HylianPablo','password','983000000',,false,true,'perfil.png');
INSERT INTO Usuario (nombre,apellidos,nick,dni,username,password,telefono,equipo,capitan,admin,photo) VALUES ('Hugo','Prieto Tárrega','Kuma','00000001X','Kuma','password','983000001','Bushido',true,true,'perfil.png');

INSERT INTO ObjetoTienda (precio, direccionFacturacion) VALUES (10.0,'Valladolid');
INSERT INTO ObjetoTienda (precio, direccionFacturacion) VALUES (20.0,'Murcia');

INSERT INTO Arma (codigo,tipo) VALUES (1,'kette');
INSERT INTO Equipacion (codigo,equipo) VALUES (2,'Bushido');

INSERT INTO Torneo (nombre,fecha,modelo,categoria) VALUES ('Winter 2020','2020-01-30','piedras','local');
INSERT INTO Torneo (nombre,fecha,modelo,categoria) VALUES ('Summer 2020','2020-02-30','puntos','nacional');

INSERT INTO InscripcionTorneo (codigoTorneo,equipo,resultado) VALUES (1,'Bushido',1);
INSERT INTO InscripcionTorneo (codigoTorneo,equipo,resultado) VALUES (2,'Gulden Draak',1);