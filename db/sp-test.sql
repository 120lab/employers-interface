-- test : sp_create_employers_interfaces
exec sp_create_employers_interfaces
GO

-- test : sp_insert_InputFile

declare  @id varchar(50)

exec sp_insert_InputFile 1, 'ddd', @id out

--exec sp_get_scope_id  @id output

select @id
GO

-- test : sp_insert_InputFileData

exec sp_insert_InputFiledata 
	1, 
	'ww','1','1','44444444','4545.32','5455566778788898990900yuyujujheyyujhrhtj','1','1','454554656.5','656','8.37E+16','7.86E+19','43','43','56555656566','1','1','1','43','32','54545655665','43434445454','4565667677899-0','nnghnhgghgnghghnghghnghnnhngh555555558','3','1','1','3445345667','4567','45566677889','4444','1','1','4444444444','1','4646','33.33','34456','1','44.44','4575666.55','2345678.34','4.57E+13','7','44.33','44.44','33.33','34456776555','1','33.33','2345.33','444õ33','4.44E+14'


select * from InputFile
select * from InputFiledata 


