SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO

if exists (select * from dbo.sysobjects where id = object_id(N'[dbo].[spATLIB_DropTempTable]') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
drop procedure [dbo].[spATLIB_DropTempTable]
GO

CREATE PROCEDURE spATLIB_DropTempTable @tmpTableName nvarchar(128) AS
--Drops a temporary table (if exisists)

DECLARE @strSql nvarchar(300)

IF EXISTS (SELECT * FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..' + @tmpTableName))
  BEGIN
	SET @strSql = 'DROP TABLE ' + @tmpTableName
	exec sp_executesql @strSql
  END
GO
SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO

