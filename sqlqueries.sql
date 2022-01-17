create table product(
  pid integer not null,
  pname varchar(100) , 
  quantity integer , 
  price float,
  PRIMARY KEY(pid)
  );

create table customer(
  cid integer AUTO_INCREMENT not null PRIMARY KEY, 
  cname varchar(100) , 
  email varchar(255) not null,
  phoneNo bigint(11),
  password varchar(100),
  address varchar(255)
  );

create table cart(
  cid integer ,
  pname varchar(100) , 
  qty integer , 
  price float,
  pid integer
  );


insert into product values(1 , "T-Shirt" , 10 , 499);
insert into product values(2 , "Shirt" , 10 , 699);
insert into product values(3 , "Shorts" , 10 , 549);
insert into product values(4 , "Jeans" , 10 , 1099);
insert into product values(5 , "Joggers" , 10 , 399);
insert into product values(6 , "Half Sleves" , 10 , 449);
insert into product values(7 , "Suit 2-Piece" , 10 , 1999);
insert into product values(8 , "Suit 3-Piece" , 10 , 2999);
insert into product values(9 , "Blazer" , 10 , 1499);
insert into product values(10 , "Tie" , 10 , 199);

insert into customer values( , "author" ,  , "author@gmail.com" , "1234"); 