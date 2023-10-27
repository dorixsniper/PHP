
1.Towary, których WAGA >150 kg;
select*
from towar
where waga>150;

2.całkowita wartość pola CENA jest trzycyfrowa;
select*
from towar
where cena between 100 and 999;

3.23% podatek od jednej sztuki wynosi więcej niż 750 zł;

select *
from towar
where cena  * 0.23 >750;

4.CENA < 10 zł., lub CENA >10000 zł i równocześnie ILOSC < 5;

select *
from towar
where(cena <10 or cena >10000 ) and ILOSC <5;                                                                 ></5>

5.cena 1 kg (CENA / WAGA) jest mniejsza od 10 zł i równocześnie większa od 5 zł;

select * 
from towar
where cena/waga <10 and cena/waga >5;

6.całkowita masa (ILOSC * WAGA) jest większa od ceny, a mniejsza od potrójnej ceny;

select ilosc,waga,cena
from towar
where ilosc*waga > cena and (ilosc*waga) < (cena*3);

7.tylko ZAMÓWIONE towary, których waga =1;

select*
from towar
where ZAMOW='PRAWDA' and WAGA=1;

8.nazwy towarów, których RODZAJ = NA i GD (również małymi literami);

select*
from towar
where RODZAJ IN ('NA','GD');

9.wyświetl nazwy towarów, które nie zawierają litery a w NAZWIE;

select*
from towar
where NOT NAZWA='%A%' ;

10Wyprodukowane w 1997 roku;

select*
from towar
where DATA_PROD LIKE='1997-%';

11.(DATA_PROD - od początku 1995 roku do końca 1998,) CENA jest dwucyfrowa, WAGA < 0.5;

select*
from towar
where DATA_PROD BETWEEN '1995-01-01' AND '1998-12-31'   AND Cena BETWEEN 10 AND 99 AND WAGA <0.5;             >

12.jw. wyświetl tylko NAZWĘ, RODZAJ I CENĘ;



13.rekordy w których CENA jest pomiędzy 12,50 a 35 i WAGA jest pomiędzy 0,5 a 2,5;

select *
from towar
where (cena between 12.50 and 35) and (waga between 0.5 and 2.5);

14.jw. - wyświetl tylko NAZWĘ, RODZAJ i wartość (ILOSC * CENA) ;




15.jw. posortowane malejąco wg NAZWY ; 

SELECT NAZWA, RODZAJ, ILOSC*CENA A$ WARTOSC
FROM Towar
WHERE (CENA BETWEEN 12.50 AND 35)
    AND (WAGA BETWEEN 0.5 AND 2.5)
        ORDER BY NAZWA;

16.różne RODZAJE towarów (bez powtórek) ; (wskazówka: SELECT DISTINCT...)

SELECT DISTINCT RODZAJ
FROM TOWAR;

