1. Wyświetl nazwy firm klientów z Niemiec. (nazwa,kraj, miasto)
select CustomerName,City,Country
from Customers
where country ='Germany'

2. Ogranicz do tych z Berlina.
select CustomerName,City,Country
from Customers
where City ='Berlin'


3. Wyświetlamy nazwy firm (kraj, miasto) klientów z Niemiec, ale nie z Berlina.

select CustomerName,City,Country
from Customers
where  NOT City ='Berlin' AND COUNTRY ='GERMANY'

4. Nazwy firm (kraj, miasto) z miasta na literę A.

select CustomerName,City,Country
from Customers
where City LIKE 'A%'
5. Nazwy firm (kraj, miasto) z miasta, które na drugim miejscu ma literę a.

select CustomerName,City,Country
from Customers
where City LIKE '_A%'

6. Nazwy firm (kraj, miasto) z USA, Niemiec, Kanady i Francji.

select CustomerName,City,Country
from Customers
where COUNTRY IN ('USA','GERMANY','FRANCE','CENADA')


7. Z kraju o nazwie co najmniej czteroliterowej

select CustomerName,City,Country
from Customers
where COUNTRY like '____%'

8. Wyświetl dane o zamówieniach z lipca dowolnego roku. 

SELECT *
FROM ORDERS
WHERE OrderDate LIKE '%/7/%'

9. wyświetl dane o zamówieniach dokonanych w pierwszych 10 dniach lipca 1996

SELECT *
FROM ORDERS
WHERE OrderDate BETWEEB '1996-07-01' AND '1996-07-10'

10 Wyświetl produkty uporządkowane według ceny rosnąco (najpierw najtańsze). 

SELECT *
FROM products
ORDER BY PRICE; 



11. Wyświetl pięć najdroższych produktów

SELECT *
FROM Products
ORDER BY PRICE DESC LIMIT 5; 


12. Wyświetl towary (nazwy i ceny) o cenach pomiędzy 10 a 100

SELECT productname,price
FROM products
ORDER price between 10 and 100

13. Jak wyżej, ale tylko towary dostawców o kodzie 2.


SELECT productname,price, SupplierID
FROM products
ORDER price between 10 and 100 and SUPPLIERID=2

14. Jak wyżej, ale obok dostawców o kodzie 2  wybierz także 8, 7,4 i 3

SELECT productname,price, SupplierID
FROM products
ORDER price between 10 and 100 
    and SUPPLIERID in (2,3,4,7,8)
    