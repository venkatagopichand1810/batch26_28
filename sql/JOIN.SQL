-- create the customer table and order table

create table Customers ( 
  cust_id INT, 
  name varchar(50), 
  city varchar(50)
  );
  
  create table orders ( 
    order_id int, 
    cust_id int,
    product varchar(50), 
    price decimal(10, 2)
 );
 
 insert into Customers (cust_id, name, city) 
 values 
 (1, "Ramesh", "delhi"), 
 (2, "rama", "Mumbai"), 
 (3, "priya", "chennai"), 
 (4, "venkat", "bangalore");
 
 insert into orders(order_id, cust_id, product, price)VALUES
 (101, 1, "Laptop", 55000.00), 
 (102, 3, "Phone", 30000.00), 
 (103, 2, "headphones", 4000.00), 
 (104, 5, "tablet", 25000.00);
 
 select Customers.name, orders.product, orders.price 
 from Customers 
 INNER JOIN ORDERS
 ON Customers.cust_id = orders.cust_id;
 
 select Customers.name, orders.product, orders.price 
 from Customers 
 LEFT JOIN ORDERS
 ON Customers.cust_id = orders.cust_id;
 
 select Customers.name, orders.product, orders.price 
 from Customers 
 RIGHT JOIN ORDERS
 ON Customers.cust_id = orders.cust_id;
 
 
  select Customers.name, orders.product, orders.price 
 from Customers 
 LEFT JOIN ORDERS
 ON Customers.cust_id = orders.cust_id
 UNION
 select Customers.name, orders.product, orders.price 
 from Customers 
 RIGHT JOIN ORDERS
 ON Customers.cust_id = orders.cust_id;
 
 
 
    