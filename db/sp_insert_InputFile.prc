if exists (select * from dbo.sysobjects where id = object_id(N'dbo.sp_insert_InputFile') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
drop procedure dbo.sp_insert_InputFile
GO

CREATE PROCEDURE dbo.sp_insert_InputFile 
	@customerKey int,
	@fileName nvarchar(500),
	@fileStamp NVARCHAR(500),
	@id int output
AS 

/*
DECLARE @customerKey INT = (SELECT LEFT('512000000000000000000000000000',9)),
		@fileName NVARCHAR(500) = 'idan.csv',
		@fileStamp NVARCHAR(500) = 'upload_45536443b488fd615f396946a40d418a',
		@id INT

*/
	DECLARE @RecordKey	INT
	SELECT	@RecordKey = InputFile.RecordKey
	FROM	InputFile
	WHERE	InputFile.CustomerKey = @customerKey
			AND InputFile.FileStamp = @fileStamp

	IF(@RecordKey IS NULL) 
		BEGIN 
			INSERT INTO InputFile ( CustomerKey, [FileName], FileStamp ) VALUES ( @customerKey , @fileName, @fileStamp );
			SELECT @id = scope_identity();
		END
	ELSE
		BEGIN
			SET @id = @RecordKey;
		END

	print @id
	
GO