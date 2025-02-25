drop database if exists instagram;
create database instagram;
use instagram;

drop table if exists instagram;
create table comments(
	id int primary key,
    comment_text varchar(150) not null,
    created_at datetime
);

-- auto increment
alter table comments
modify column id int auto_increment;

-- add data into comments table
insert into comments (comment_text, created_at)
values ("Hào đẹp trai", "2020-12-05 01:30:59"),
("Code tại Cybersoft thật đỉnh", "2020-07-14 16:02:47"),
("No comment :))", "2021-01-27 23:59:32");

-- Show the data
select * from comments;

-- Read the comment, id = 2
select * from comments
where id = 2;

-- Read the comment, date < 14/07/2020
select * from comments
where created_at > "2020-07-14";

-- Update the comment
update comments set comment_text = "Hôm nay trời đẹp quá"
where id = 2;

-- Delete the comment
delete from comments
where id = 2;

-- Ex: Substr + Concat
select concat(substr(comment_text,1,8),"...") as results
from comments
where length(comment_text) > 8;
