CREATE TABLE product ( 
  product_id INT AUTO_INCREMENT PRIMARY KEY, 
  product_name varchar(100),
  category varchar(50),
  price DECIMAL(10,3),
  stock_quantity int, 
  supplier_name varchar(100),
  manufacture_date DATE, 
  rating float,
  is_available boolean
 );
 
 insert into product
 (product_name, category, price, stock_quantity, supplier_name, manufacture_date, rating, is_available)
 VALUES
 ("LAPTOP", "Electronics", 55000.00, 10, "Dell", '2025-01-10', 4.5, true),
 ("SMARTPHONE", "Electronics", 25000.00, 55, "Samsung", '2025-02-10', 4.1, true),
 ("Coffee", "Beverages", 200.00, 5, "Nestle", '2025-04-10', 2.5, false),
 ("Tea", "Beverages", 100.00, 100, "Taj Mahal", '2025-05-10', 3.5, false),
 ("Water Bottle", "Utensils", 500.00, 100, "Milton", '2025-08-10', 4.7, true),
 ("Table", "Furniture", 2000.00, 100, "Ikea", '2025-07-10', 4.2, true),
 ("Pen", "Stationery", 10.00, 100, "Reynolds", '2025-06-10', 5.0, true);
 
 -- select specific columns
 select product_name, price, stock_quantity from product;
 
 -- where clause... i wanted get electronics
 select * from product where category = "Electronics";
 
 -- price filter
 select * from product where price > 1000;
 
 -- select the products in stock > 50
 select * from product where stock_quantity > 50;
 
 -- AND
 select * from product where category = "Beverages" AND price > 100;
 
 -- OR
 select * from product where category = "Stationery" or category = "Furniture";
 
 -- ascending 
 select * from product order by price asc;
 -- descending 
 SELECT * FROM PRODUCT order by rating desc;
 -- distict categories 
 select DISTINCT category from product;
 -- count the total products
 select count(*) as total_products from product;
 -- count the products by category
 select category, count(*) as count from product group by category;
 
 -- max price
 select max(price)as max_price from product;
  -- min price
 select min(price)as min_price from product;
 -- avg price
 select avg(price) as avg_price from product;
 
 -- sum of the stock_quantity
 select sum(stock_quantity) as total_stock from product;
 
 -- limit the results 
 select * from product limit 2;
 
 -- offset or skip
 select * from product limit 3 offset 2;
 
 -- update the stock_quantity
 update product set stock_quantity = 50 where product_name = "Coffee";
 select product_name, stock_quantity from product;
 
 -- delete the product 
 delete from product where product_name = "SMARTPHONE";
 SELECT product_name from product;
 -- products are not available 
 select * from product where is_available = false;

 -- top 3 expensive products 
 SELECT * from product order by price desc limit 3;