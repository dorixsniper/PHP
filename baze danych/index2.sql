

1. Utwórz tabele: Wystawa (IDWystawy, nazwa, data, IDGalerii) oraz Galeria (IDGalerii, nazwa ). Podkreślone pole to klucz podstawowy z autoinkrementacją.
 
create table Wystawa(
    IDWystawy int,
    nazwa text,
    data date,
    IDGalerii int
);


create table Galeria(
    IDGalerii AUTO_INCREMENT PRIMARY KEY,
    nazwa text; 
)

2. Dodaj klucz podstawowy do tabeli Wystawa (wykorzystaj już istniejące w tabeli pole).
alter table Wystawa

3. Zmień nazwę tabeli Galeria na GaleriaSztuki.
 
4. Zmień typ pola nazwa w tabeli Wystawa, poszerzając ilość znaków.
 
5. Dodaj pole budzet do tabeli Wystawa (całkowite)
 
6. Zmien typ pola budzet na rzeczywisty dokładny (6 miejsc przed przecinkiem i dwa po przecinku)
 
7. Przesuń pole IDGalerii za pole IDWystawy
 
8. Usuń pole adres.
 
9. Zmień nazwę pola data w tabeli Wystawa na data_wystawy
 
10 Dodaj wartość domyślną 'biennale' dla pola nazwa w tabeli Wystawa
 
