drop database moduleFirst;
create database moduleFirst;
use moduleFirst;

create table Professeur (
	matricule int primary key auto_increment,
	identifiant varchar (20),
	password varchar (50)
);


create table Etudiant(
	ine int primary key auto_increment,
	nom varchar (20),
	prenom varchar (50),
	niveau varchar (50)
);

create table Classe (
	codeClasse int primary key auto_increment,
	nom varchar (50),
	matricule int,
	 constraint foreign key fk_matiere_idMatiere_professeur
	  (matricule) references professeur(matricule)
	
);

create table Matiere (
	 idMatiere int primary key auto_increment, 
	 nomMatiere varchar (20),
	 matricule int,
	 constraint foreign key fk_matiere_idMatiere_professeur
	  (matricule) references professeur(matricule) 
);

create table ListePresence (
	ine varchar(10) primary key,
	nomEtudiant varchar(20),
	prenomEtudiant varchar (20),
	codeClass int,
	 constraint foreign key fk_listePresence_codeClass_classe
	 (codeClass) references classe (codeClasse)
);