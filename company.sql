CREATE DATABASE company_sql;
USE company_sql;

CREATE TABLE warehouses (
address VARCHAR(255) NOT NULL,
total_capacity INT(32),
warehouse_id INT(3) NOT NULL,
PRIMARY KEY (warehouse_id)
);

INSERT INTO warehouses (address, total_capacity, warehouse_id) VALUES 
		('320 Fowler Street, Lynbrook, New York', 10000, 1),
        ('31 Spooner Street, Quahog, Rhode Island', 10000, 2);
SELECT * FROM warehouses;

CREATE TABLE products (
product_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
product_description VARCHAR(255) NOT NULL,
product_size VARCHAR(50),
warehouse_id INT(3) NOT NULL,
PRIMARY KEY (product_id),
CONSTRAINT FK_warehouse_id FOREIGN KEY (warehouse_id) REFERENCES Warehouses(warehouse_id)
);

INSERT INTO products (product_name,product_description,product_size,warehouse_id) VALUES 
		('Front Bumper', 'placed front of car', '27 lbs', 1),
        ('Back Bumper','placed behind car','31 lbs', 2),
		('Steering Wheel','used to direct car','12 lbs', 1),
        ('Trunk','part above back bumper','60 lbs', 1),
        ('Hood','part above front bumper','55 lbs', 1),
        ('Shocks','stabilizes vehicle when driving','35 lbs', 2),
        ('Transmission', 'gearing device of vehicle',' 200 lbs', 2),
        ('Left Sideview Mirror','view left side of vehicle','18 lbs', 2),
        ('Right Sideview Mirror','view right side of vehicle','17 lbs', 1),
        ('Rear View Mirror','view rear of vehicle','15 lbs', 1),
        ('Alternator','generate electricity','10 lbs', 1),
        ('Battery','powers ignition','50 lbs', 2),
        ('Catalytic Converter','controls emissions from vehicle','30 lbs', 2),
        ('Brakes','slows/stops car','25 lbs', 2),
        ('Radiator','cooling system','35 lbs', 1),
        ('Engine','makes the car move','300 lbs', 2);
SELECT * FROM products;

CREATE TABLE inventory (
product_id INT NOT NULL AUTO_INCREMENT,
unit_price DECIMAL(6,2) NOT NULL,
quantity_in_stock INT(32) NOT NULL,
total_capacity INT(32) DEFAULT 500,
PRIMARY KEY (unit_price),
CONSTRAINT FK_product_id FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

INSERT INTO inventory (unit_price,quantity_in_stock,total_capacity) VALUES 
			(320.00, 5, 500),
            (250.00, 10, 500),
            (120.00, 1, 500),
            (700.00, 1, 500),
            (500.00, 3, 500),
            (190.00, 8, 500),
            (180.00, 5, 500),
            (125.00, 3, 500),
            (110.00, 1, 500),
            (100.00, 3, 500),
            (255.00, 1, 500),
            (170.00, 3, 500),
            (50.00, 10, 500),
            (130.00, 8, 500),
            (60.00, 4, 500),
            (510.00, 1, 500);
SELECT * FROM inventory ORDER BY product_id;



