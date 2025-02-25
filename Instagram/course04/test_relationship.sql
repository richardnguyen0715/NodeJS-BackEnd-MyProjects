drop database if exists mysql_relationship;
create database mysql_relationship;
use mysql_relationship;

-- Create table
-- 1. Customer

drop table if exists customers;
create table customers(
	customer_id int primary key auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(200) not null,
    birthday date not null
);

-- 2. Order
drop table if exists orders;
create table orders(
	order_id int primary key auto_increment,
    order_date date not null,
    price float not null,
    amount int not null,
    customer_id int not null,
    foreign key (customer_id) references customers(customer_id)
);

-- Tìm ra đơn đặt hàng mà Hào đã đặt
-- Solution 01: Inner join
select order_id
from orders as ORD
join customers as CUS on CUS.customer_id = ORD.customer_id
where CUS.first_name like 'Hao';

-- Solution 02: Cross join
select order_id
from orders
where customer_id = ( select customer_id from customers
						where first_name like 'Hao'
                        );