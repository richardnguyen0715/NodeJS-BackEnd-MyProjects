drop database if exists instagram;
create database instagram;
use instagram;

-- xóa bảng
drop table if exists users;

create table users(
	id int,
    first_name varchar(255),
    last_name varchar(255),
    age int,
    birthday date
);

-- Sửa cột firstname và lastname thành chuỗi tối đa là 150 ký tự.
alter table users
modify column first_name varchar(100),
modify column last_name varchar(150);


-- Thêm cột loại người dùng - user_type
-- set giá trị mặc định cho dữ liệu
alter table users
add column user_type varchar(10) default "client";

-- ràng buộc thuộc tính
alter table users
modify column id int auto_increment primary key;

-- ràng buộc not null
alter table users
modify column age int not null,
modify column first_name varchar(100) not null,
modify column last_name varchar(150) not null;

-- Thêm data vào table
insert into users (first_name, last_name, age, birthday)
values ("Hao", "Nguyen", 19, "1998-05-11"),  
("Tuong", "Nguyen", 20, "1998-05-11");

-- Cập nhật users
update users set user_type= "admin"
where id = 2;

-- Optional
set SQL_SAFE_UPDATES = 0;

update users set age = 20
where age = 19;

-- Xóa user
delete from users
where id = 2;

-- Xóa người 18 tuổi
delete from users
where age < 18;

-- Đọc data từ database
select last_name as Họ, first_name as Tên from users;

-- concat
select concat(first_name," ",last_name) as username from users;

-- Substring
select substr(birthday, 1, 4) as year_of_birthday from users;

-- replace
select replace(user_type, "client", "Khách hàng") as LoaiNguoiDung from users;

-- Upper and Lower
select UPPER(first_name), LOWER(last_name) 
from users;

