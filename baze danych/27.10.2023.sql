

1.policz ilość wszystkich rekordów (zapisów) ;
SELECT COUNT(*)
FROM towar; 

2.z opisami - największą i najmniejsza CENĘ, oraz średnią arytmetyczną CENY ;
SELECT MAX(cena) AS maksymalna, MIN(cena) AS minimalna, AVG(cena) AS srednia 
from towar 


3.sumę wartości towarów, średnią arytmetyczną wartości (ILOSC * CENA);
SELECT sum(ilosc*cena) as SUM, AVG(cena*ilosc) AS srednia 
from towar;

4.policz średnią arytmetyczną ceny, a później policz ręcznie średnią arytmetyczną ceny = suma CENY / ilość rekordów. 

select avg(cena) as srednia, sum(cena)/count(*)
from towar;

5.Wyświetl średnią cenę wszystkich towarów o cenie pomiędzy 10 a 1000 zł

SELECT AVG(cena) as srednia
from towar
where cena between 10 and 1000;

6.wyświetl sumę masy (ilosc * waga) , ale tylko dla rodzaju  GD i TR

select sum(ilosc*waga) as masa
from towar
where rodzaj in('GD', 'TR')

7.Wyświetl łączną ilość wszystkich zamówionych produktów,

SELECT sum(ilosc)
from towar
where zamow='prawda';

8.wyświetl największą wartość (ilosc * cena)  towarów wyprodukowanych w 1997 roku

select max(ilosc*cena)
from towar 
where data_prod like '1997-%';


9.policz ile rekordów jest w każdym RODZAJU 
select rodzaj, count(*)
from towar
group by rodzaj;

10.policz ile rekordów jest w każdym RODZAJU, posortuj malejąco wg RODZAJU;



11.policz sumę i średnią arytmetyczną wartości (ilość * cena) i minimalnej i maksymalnej masie (ilość * waga) dla każdego RODZAJU towaru ;

12.policz ile rekordów jest w każdym RODZAJU - wyświetl ilości rekordów większe od 15 ;

13.policz średnią arytmetyczną ceny dla każdego RODZAJU - wyświetl średnie mniejsze od 500;

14.dla każdego rodzaju towarów wyświetl ilość rekordów, średnią wagę, średnią ilość, maksymalną i minimalną cenę dla ilości rekordów w RODZAJU mniejszej od 15.

15.dla każdego rodzaju towarów wyświetl maksymalną cenę dla ilości rekordów w RODZAJU większe od 10. Uwzględnij tylko towary zamówione.

16.Oblicz minimalną cenę towarów niezamówionych dla każdego rodzaju. 

17.oblicz średnią cenę towarów zamówionych (zamow) i nie zamówionych

18.oblicz średnią cenę towarów wyprodukowanych w 1999 roku  dla poszczególnych rodzajów towaru

