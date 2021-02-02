create table Employee
(
 Employee_ID int identity (1000,1) primary key,
 Employee_Name nvarchar (50),
 Email_ID nvarchar (50),
 Phone_No nvarchar (10),
 Gender char (10),
 DOB date,
 Address nvarchar (50),
 Password nvarchar(20)
 )

 select * from Employee

create table Taxi 
( 
Vehicle_ID int identity (1000,1) primary key,
Vehicle_Type nvarchar(20),
Vehicle_Model nvarchar(20),
Vehicle_Number nvarchar(50)
)


drop table Taxi

alter table Taxi 
drop column Employee_ID

select * from Taxi


Create table EmployeeRoster
(
Roster_ID int identity (1,1) primary key,
Employee_ID int,
From_Date date,
To_Date date,
In_Time time,
Out_Time time,
constraint FK_EmployeeRosterEmployee Foreign Key (Employee_ID) references Employee(Employee_ID)
)

select * from EmployeeRoster


create table Customer
(
Customer_Name nvarchar(50),
Customer_ID int identity (10,1) primary key,
Email_ID nvarchar (50),
Phone_No nvarchar (10),
Address char (50),
Gender char(10),
Password nvarchar(30)
)

select * from Customer

alter table Customer
add DOB date;

create table Comment
(
Comment_ID int identity (1,1) primary key,
Customer_ID int foreign key references Customer(Customer_ID),
Employee_ID int foreign key references Employee(Employee_ID),
Feedback nvarchar(50),
Comment nvarchar (200)
)

create table Booking
(
Booking_ID int identity (10000,1) primary key,
Employee_ID int,
Customer_ID int,
Booking_Date date,
Booking_Time time, 
Pickup_Location nvarchar(50),
Drop_Location nvarchar(50),
Fare numeric(20),
constraint FK_BookingEmployee foreign key (Employee_ID) references Employee(Employee_ID),
constraint FK_BookingCustomer foreign key (Customer_ID) references Customer(Customer_ID),
Vehicle_Type nvarchar(20)
)

select * from Booking

create table DistanceMaster
(
Distance_ID int identity(1,1)primary key,
Location1 varchar(50),
Location2 varchar(50),
Distance int
)

create table VehicleType
(
ID int identity (1,1) primary key,
Type varchar(50),
PriceKm int,
)