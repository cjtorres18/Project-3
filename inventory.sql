CREATE DATABASE warehouse_inventory;
USE warehouse_inventory;
-- I used NOT NULL to force my table to have different values defined
-- AUTO_INCREMENT the id whenever we add a new product to our table
-- Made the product_id the primary key because it's quicker than the name column
CREATE TABLE products (
product_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL, 
quantity_in_stock INT(32) NOT NULL,
total_capacity INT(32) DEFAULT 500,
unit_price DECIMAL(6,2) NOT NULL,
PRIMARY KEY (product_id)
);
-- the id column automatically generates itself so no need to enter
-- when we add data to our table
INSERT INTO products (product_name) VALUES 
		('Front Bumper'),('Back Bumper'),
		('Steering Wheel'),('Trunk'),
        ('Hood'),('Right Fender'),
        ('Left Fender'),('Left Sideview Mirror'),
        ('Right Sideview Mirror'),('Rear View Mirror'),
        ('Alternator'),('Battery'),('Rotors'),
        ('Brake pads'),('Calipers'),('Exhaust');
SELECT * FROM products;
