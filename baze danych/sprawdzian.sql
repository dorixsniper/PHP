
Wyświetl dane (OrderID, OrderDate, CustomerID) o 
zamówieniach o numerach (OderID) pomiędzy 10300 a 10340. 
 Użyj właściwego operatora. (tabela Orders) 

SELECT OrderID,OrderDate,CustomerID
FROM Orders
where OderID between 10300 and 10340;



zad 11
 wyświetl nazwy produktów (ProductName) sprzedawane w butelkach
  (na końcu Unit mają "bottles")
   (dane wybierz z tabeli Products, wyświetl tylko pola ProductName i Unit)

   SELECT ProductName,Unit
FROM Products
where  Unit like "%bottles'; 




zad 10
 Wybierz produkty o cenie pomiędzy 40 a 100 i z kategorii 2 
 (użyj właściwego operatora) (Price, CategoryID) (tabela Products)

 Select Price,CategoryID
 from Products
 where price between 40 and 100




wyświetl produkty z kategorii 1, 3, 6, i 8.
 Użyj właściwego operatora. (CategoryID) (tabela Products)

 Select CategoryID
 from Products
 where CategoryID in (1,3,6,8)


 Wyświetl produkty (ProductName) o cenie
  (Price) pomiędzy 10 a 50 (użyj właściwego operatora)(tabela Products)
  Select ProductName
  from Products
  where Price between 10 and 50;




zad 10
   Wybierz produkty o cenie pomiędzy 40 a 100 i z 
   kategorii 2 (użyj właściwego operatora) (Price, CategoryID)
    (tabela Products)

    Select  Price,CategoryID
    from Products
    where Price between 40 and 100, where CategoryID=2


    Wyświetl wszystkie wiersze z tabeli Customers 
    posortowane najpierw według kraju (country),
     a potem według miasta (city) (kilka słów)

     Select *
     from customers
     where 