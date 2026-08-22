User:

Register
Login
View Products
View Categories
Add to Cart
Update Cart
Remove from Cart
Create Order
View My Orders
Cancel Order
Create Review
---------------------------------------------

Admin:

Login
Create Product
Update Product
Delete Product
Create Category
Update Category
Delete Category
View Orders
Update Order Status
Manage Stock
-----------------------------------------------
DataBase Tables:

users
categories
products
cart
cart_items
orders
order_items
------------------------------------------------

users
----------------
id
name
email
password
role
created_at
updated_at

-------------------------------------

categories
----------------
id
name
description
created_at
---------------------------

products
----------------
id
category_id
name
description
price
stock
image_url
created_at
updated_at
----------------------------

cart
----------------
id
user_id
created_at
updated_at
------------------------------

cart_items
----------------
id
cart_id
product_id
quantity
------------------------------

orders
----------------
id
user_id
status
total_price
created_at
updated_at
----------------------------------

order_items
----------------
id
order_id
product_id
quantity
unit_price
-----------------------
