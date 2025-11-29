create table users ( 
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name varchar(100), 
  email varchar(100), 
  phone varchar(15), 
  address varchar(200)
  );
  
 insert into users (name, email, phone, address)
 values 
 ("venkat", "venkat@gmail.com", "7894561237", "bangalore"),
 ("rama", "rama@gmail.com", "9874561279", "chennai"),
 ("siva", "siva@gmail.com", "6597485411", "vizag");
  
 
-- categories 
create table categories ( 
  category_id int primary key auto_increment, 
  category_name varchar(100)
  );
  
 insert into categories (category_name) values 
 ("mobiles"), 
 ("laptops"), 
 ("clothing"), 
 ("electronics");
 
-- sellers 
create table sellers ( 
  seller_id int primary key auto_increment, 
  seller_name varchar(100), 
  rating decimal(3,2)
  );
  
 insert into sellers(seller_name, rating) values 
 ("sony", 4.9), 
 ("samsung", 4.6), 
 ("apple", 5);
  
-- products 
create table products ( 
  product_id int primary key auto_increment, 
  product_name varchar(100),
  price decimal(10, 2), 
  stock int, 
  category_id int, 
  seller_id int
 ); 
 
 insert into products(product_name, price, stock, category_id, seller_id) values 
 ("iphone 15", 75000, 50, 1, 1), 
 ("hp laptop", 55000, 30, 2, 1), 
 ("t-shirt", 999, 100, 3, 2), 
 ("samsung galaxy", 67000, 40, 1, 3),
 ("headphones", 2999, 60, 4, 3);
 
 -- orders
 
 create table orders ( 
   order_id int primary key auto_increment, 
   user_id int, 
   order_date DATE, 
   total_amount Decimal(10, 2), 
   status varchar(50)
   ); 
   
   insert into orders(user_id, order_date, total_amount, status) values 
   (1, "2025-10-10", 75000, "Delivered"), 
   (2, "2025-10-11", 55754, "Delivered"), 
   (3, "2025-10-12", 68000, "shipped"), 
   (1, "2025-10-13", 2888, "pending");

   
-- order_items 
 create table order_items( 
   item_id int primary key auto_increment, 
   order_id int, 
   product_id int, 
   quantity int, 
   item_price decimal(10, 2)
  );
  
  insert into order_items(order_id, product_id, quantity, item_price) values 
  (1, 1, 1, 75000), 
  (2, 2, 1, 55000), 
  (2, 3, 1, 799), 
  (3, 4, 1, 68000), 
  (4, 5, 1, 2999);
  
  
  
 -- payments
 create table payments ( 
   payment_id int primary key auto_increment,
   order_id int, 
   payment_method varchar(50), 
   payment_status varchar(50), 
   payment_date date
  );
  insert into payments(order_id, payment_method, payment_status, payment_date) VALUES
  (1, "credit card", "success","2025-10-10"), 
  (2, "UPI", "success", "2025-10-11"), 
  (3, "COD", "pending", null), 
  (4, "debit card", "pending", null);
 
 -- cart
 create table cart ( 
   cart_id int primary key auto_increment,
   user_id int, 
   product_id int, 
   quantity int 
   ); 
   
   insert into cart(user_id, product_id, quantity) values 
   (1, 3, 2), 
   (2, 5, 1), 
   (3, 2, 1);
   
 -- reviews 
 create table reviews( 
   review_id int primary key auto_increment, 
   user_id int, 
   product_id int, 
   rating int, 
   comment varchar(200)
   
  );
  
  insert into reviews(user_id, product_id, rating, comment)values 
  (1, 1, 5, "amazing phone"), 
  (2, 2, 4, "good laptop"), 
  (3, 4, 5, "Excellent mobile"),
  (2, 3, 3, "nice quality");
 
 -- delivery
 create table delivery (
   delivery_id int primary key auto_increment,
   order_id int, 
   delivery_date date, 
   delivery_status varchar(50), 
   courier_name varchar(100)
  );
 
insert into payments(order_id, payment_method, payment_status, payment_date) VALUES
  (1, "credit card", "success",  "2025-10-10"), 
  (2, "UPI", "success", "2025-10-11"), 
  (3, "COD", "pending", null), 
  (4, "debit card", "pending", null);
 
 
 -- show all the products in "electronics"
 select product_name, price from products 
 	where category_id = (
      select category_id  from categories where category_name = "electronics"
     );

 -- find the total cart value of venkat

 
 






  





 