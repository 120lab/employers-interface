if exists (select * from dbo.sysobjects where id = object_id(N'dbo.sp_create_employers_interfaces') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
drop procedure dbo.sp_create_employers_interfaces
GO

CREATE PROCEDURE dbo.sp_create_employers_interfaces 
	--@InputFileKey INT
AS

--/*

--DECLARE	@InputFileKey INT = 4

--*/

	DECLARE @RunDate DATETIME = GETDATE()	

	DECLARE @NUM_OF_POLICIES INT
	DECLARE @MIN_SALARY DECIMAL(18,2)
	DECLARE @MAX_SALARY DECIMAL(18,2)
	DECLARE @REFER_DATE SMALLDATETIME	

	SET @REFER_DATE =  CONVERT(SMALLDATETIME, CONVERT(VARCHAR, dbo.fnATLIB_FirstOfMonthDate(@RunDate), 1))

	--===== Prepare Data ===============================================================================
	EXEC spATLIB_DropTempTable '#Policies'
	EXEC spATLIB_DropTempTable '#Money'
	EXEC spATLIB_DropTempTable '#RawData'
	EXEC spATLIB_DropTempTable '#Output'

	DECLARE	@InputFileKey INT = (SELECT MAX (InputFile.RecordKey) FROM InputFile )
	DECLARE	@CompanyNumber INT  = (SELECT InputFile.CustomerKey FROM InputFile WHERE InputFile.RecordKey = @InputFileKey)
	
	SELECT	InputFileData.RecordKey
	INTO	#Policies
	FROM	InputFileData			
	WHERE	InputFileData.InputFileKey = @InputFileKey
	GROUP BY InputFileData.RecordKey

	SELECT
		IDENTITY(INT, 1, 1)													AS Id,
		CAST(InputFileData.[KOD-MEZAHE-KUPA-H-P] AS NVARCHAR(30)) +  
		CAST(InputFileData.[SUG-MAFKID] AS NVARCHAR(1)) + 
		CAST(InputFileData.[SUG-MEZAHE-MAASIK] AS NVARCHAR(2)) + 
		CAST(InputFileData.[MISPAR-ZIHUY-MAASIK] AS NVARCHAR(16))			AS EmployerFundCode,
		InputFileData.[SHEM-MAASIK]											AS EmployerName,
		InputFileData.[SUG-MAFKID]											AS EmployerCorporationType,
		InputFileData.[MISPAR-ZIHUY-MAASIK]									AS EmployerCorporationId,
		InputFileData.[SUG-MEZAHE-MAASIK]									AS EmployerCorporationIdTypeCode,
		NULL																AS EmployerNumber,
		--#Policies.RecordKey												AS ReferenceNumber,
		InputFileData.[MISPAR-MEZAHE]										AS MemberId,
		InputFileData.[SUG-MEZAHE-OVED]										AS MemberIdTypeCode,
		InputFileData.[SHEM-PRATI]											AS FirstName,
		InputFileData.[SHEM-MISHPACHA]										AS LastName,
		InputFileData.[TAARICH-TCHILAT-STATUS]								AS FirstStatus,
		InputFileData.[MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM]					AS MoneyReference,
		CASE
			WHEN RTRIM(LTRIM(InputFileData.[YEMEI-AVODA-BECHODESH])) = '' THEN
				NULL
			ELSE
				InputFileData.[YEMEI-AVODA-BECHODESH]
		END AS WorkDays,
		CASE
			WHEN RTRIM(LTRIM(InputFileData.[CHELKIUT-MISRA])) = '' THEN
				NULL
			ELSE
				InputFileData.[CHELKIUT-MISRA]
		END AS PartJob,
		InputFileData.[MISPAR-BANK-MAASIK]									AS BankKey,
		InputFileData.[SUG-KARTIS-MAASIK]									AS CardType,
		InputFileData.[MISPAR-SNIF-MAASIK]									AS DepartKey,
		InputFileData.[MISPAR-CHESHBON-MAASIK]								AS Account,
		NULL																AS AccountTypeOsh,
		InputFileData.[SUG-CHESHBON-MAASIK]									AS AccountType,
		InputFileData.[SUG-CHESHBON-KOLET-TASHLUM]							AS AccountTypeInPay,
		InputFileData.[MISPAR-BANK-KOLET]									AS BankKeyInPay,
		InputFileData.[MISPAR-SNIF-KOLET]									AS DepartKeyInPay,
		InputFileData.[MISPAR-CHESHBON-KOLET]								AS AccountInPay,
		InputFileData.[SUG-PEULA]											AS ActionType,
		InputFileData.[KOD-EMTZAI-TASHLUM]									AS PayType,
		NULL																AS BirthDate,
		NULL																AS City,
		NULL																AS Street,
		NULL																AS StreetNumber,
		NULL																AS Apartment,
		NULL																AS PostalNumber,
		NULL																AS POBox,
		NULL																AS EmailAddress,
		NULL																AS MobilePhone,
		NULL																AS SexCode,
		NULL																AS MemberEmployerStartDate,
		#Policies.RecordKey													AS PolicyKey,
		InputFileData.[SUG-TAKBUL]											AS MoneyType,
		InputFileData.[CHODESH-MASKORET]									AS ReferDate,
		InputFileData.[TAARICH-ERECH-HAFKADA-LEKUPA]						AS ValueDate,
		InputFileData.[SACHAR-MEDUVACH]										AS InsuredSalary,
		InputFileData.[SUG-HAFRASHA-A]										AS MoneyPartA,
		InputFileData.[SCHUM-HAFRASHA-A]									AS MoneySumA,
		InputFileData.[SACH-TASHLUMIM-PTURIM-A]								AS MoneySumPaturA,
		InputFileData.[SHIUR-HAFRASHA-A]									AS DepositPartA,

		InputFileData.[SUG-HAFRASHA-B]										AS MoneyPartB,
		InputFileData.[SCHUM-HAFRASHA-B]									AS MoneySumB,
		InputFileData.[SACH-TASHLUMIM-PTURIM-B]								AS MoneySumPaturB,
		InputFileData.[SHIUR-HAFRASHA-B]									AS DepositPartB,

		InputFileData.[SUG-HAFRASHA-C]										AS MoneyPartC,
		InputFileData.[SCHUM-HAFRASHA-C]									AS MoneySumC,
		InputFileData.[SACH-TASHLUMIM-PTURIM-C]								AS MoneySumPaturC,
		InputFileData.[SHIUR-HAFRASHA-C]									AS DepositPartC,

		InputFileData.[MAHAMAD-HAFKADA-BEKUPA]								AS MemberPosition,

		RIGHT('000000000' + CAST(InputFileData.[KOD-MEZAHE-KUPA-H-P] AS nvarchar(9)), 9) +	
			--'-' +
			RIGHT('00000000000000' + CAST(ISNULL('012',0) AS nvarchar(14)) , 14) + 
			--'-' +
			'0000' +
			--'-' +
			'000'									AS FundEncoding
	INTO	#RawData
	FROM	#Policies
			INNER JOIN InputFileData
				ON InputFileData.RecordKey = #Policies.RecordKey

	--SELECT * FROM #RawData


	--===== Build Data ===============================================================================

	EXEC spATLIB_DropTempTable '#PizulHafrashotOvedBeKupa'
	SELECT	DISTINCT
			Id																			AS PizulHafrashotOvedBeKupaId,
			PolicyKey																	AS ChodeshMaskoretVestatusOvedId,
			MoneyPartA																	AS [SUG-HAFRASHA],
			DepositPartA																AS [SHIUR-HAFRASHA],
			MoneySumA																	AS [SCHUM-HAFRASHA],
			MoneySumPaturA																AS [SACH-TASHLUMIM-PTURIM],
			NEWID()																		AS [MISPAR-MEZAHE-RESHUMA],
			NULL																		AS [MISPAR-MEZAHE-RESHUMA-KODEM]
	INTO #PizulHafrashotOvedBeKupa
	FROM #RawData

	INSERT INTO #PizulHafrashotOvedBeKupa (ChodeshMaskoretVestatusOvedId,[SUG-HAFRASHA],[SHIUR-HAFRASHA],[SCHUM-HAFRASHA],[SACH-TASHLUMIM-PTURIM],[MISPAR-MEZAHE-RESHUMA],[MISPAR-MEZAHE-RESHUMA-KODEM])
	SELECT	DISTINCT
			PolicyKey																	AS ChodeshMaskoretVestatusOvedId,
			MoneyPartB																	AS [SUG-HAFRASHA],
			DepositPartB																AS [SHIUR-HAFRASHA],
			MoneySumB																	AS [SCHUM-HAFRASHA],
			MoneySumPaturB																AS [SACH-TASHLUMIM-PTURIM],
			NEWID()																		AS [MISPAR-MEZAHE-RESHUMA],
			NULL																		AS [MISPAR-MEZAHE-RESHUMA-KODEM]
	FROM #RawData

	INSERT INTO #PizulHafrashotOvedBeKupa (ChodeshMaskoretVestatusOvedId,[SUG-HAFRASHA],[SHIUR-HAFRASHA],[SCHUM-HAFRASHA],[SACH-TASHLUMIM-PTURIM],[MISPAR-MEZAHE-RESHUMA],[MISPAR-MEZAHE-RESHUMA-KODEM])
	SELECT	DISTINCT
			PolicyKey																	AS ChodeshMaskoretVestatusOvedId,
			MoneyPartC																	AS [SUG-HAFRASHA],
			DepositPartC																AS [SHIUR-HAFRASHA],
			MoneySumC																	AS [SCHUM-HAFRASHA],
			MoneySumPaturC																AS [SACH-TASHLUMIM-PTURIM],
			NEWID()																		AS [MISPAR-MEZAHE-RESHUMA],
			NULL																		AS [MISPAR-MEZAHE-RESHUMA-KODEM]
	FROM #RawData

	EXEC spATLIB_DropTempTable '#ChodeshMaskoretVestatusOved'
	SELECT DISTINCT
			PolicyKey																	AS ChodeshMaskoretVestatusOvedId,
			MemberId																	AS PirteiOvedId,
			ReferDate																	AS [CHODESH-MASKORET],
			MemberPosition																AS [MAHAMAD-HAFKADA-BEKUPA],
			MoneyType																	AS [SUG-TAKBUL],	-- שוטף
			InsuredSalary																AS [SACHAR-MEDUVACH],
			1																			AS [STATUS-OVED-BECHODESH-MASKORET],	-- חודשי/רגיל
			FirstStatus																	AS [TAARICH-TCHILAT-STATUS],
			PartJob																		AS [CHELKIUT-MISRA],
			WorkDays																	AS [YEMEI-AVODA-BECHODESH],
			NULL/*PolicyKey*/															AS [MISPAR-POLISA-O-HESHBON]
	INTO #ChodeshMaskoretVestatusOved
	FROM #RawData
	
	EXEC spATLIB_DropTempTable '#PirteiOved'
	SELECT DISTINCT
			MemberId																	AS PirteiOvedId,
			EmployerFundCode															AS PirteiHaavaratKsafimId,
			MemberIdTypeCode															AS [SUG-MEZAHE-OVED],
			MemberId																	AS [MISPAR-MEZAHE],
			FirstName																	AS [SHEM-PRATI],
			LastName																	AS [SHEM-MISHPACHA],
			CAST(YEAR(BirthDate) AS NVARCHAR(4)) +
				RIGHT('00' + CAST(MONTH(BirthDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DAY(BirthDate) AS NVARCHAR(2)),2)						AS [TAARICH-LEIDA],
			MemberId																	AS [MISPAR-OVED-ETZEL-MAASIK],
			NULL/*EmployerNumber*/														AS [KOD-MEZAHE-MAASIK-ETZEL-YATZRAN],
			City																		AS [SHEM-YISHUV],
			Street																		AS [SHEM-RECHOV],
			StreetNumber																AS [MISPAR-BAIT],
			Apartment																	AS [MISPAR-DIRA],
			PostalNumber																AS [MIKUD],
			POBox																		AS [TA-DOAR],
			EmailAddress																AS [E-MAIL],
			MobilePhone																	AS [MISPAR-CELLULARI],
			SexCode																		AS [MIN],
			CAST(YEAR(MemberEmployerStartDate) AS NVARCHAR(4)) +
				RIGHT('00' + CAST(MONTH(MemberEmployerStartDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DAY(MemberEmployerStartDate) AS NVARCHAR(2)),2)		AS [MOED-TCHILAT-AHASAKAT-OVED]	
	INTO #PirteiOved
	FROM #RawData

	EXEC spATLIB_DropTempTable '#SachHafrashaLeKupaBechodeshMaskoretOved'
	SELECT 
		PolicyKey																									  AS ChodeshMaskoretVestatusOvedId,
		SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2))) AS [SACH-HAFRASHA-BECHODESH-MASKORET]
	INTO #SachHafrashaLeKupaBechodeshMaskoretOved
	FROM #RawData
	GROUP BY PolicyKey

	EXEC spATLIB_DropTempTable '#SachHafrashaLeOvedBekupa'
	SELECT 
		MemberId																		AS PirteiOvedId,
		SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))										AS [SACH-HAFRASHA-LEOVED-BEKUPA]																		
	INTO #SachHafrashaLeOvedBekupa
	FROM #RawData
	GROUP BY MemberId

	EXEC spATLIB_DropTempTable '#SachHafrashaLeKupaMaasik'
	SELECT 
			EmployerFundCode															AS PirteiHaavaratKsafimId,
			SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SACH-HAFRASHA-LEKUPA-BERAMAT-MAASIK],
			SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SACH-HAFKADA-LEKUPA-BERAMAT-MAASIK],
			COUNT(DISTINCT MemberId)													AS [MISPAR-AMITIM-BERAMAT-MAASIK]	
	INTO #SachHafrashaLeKupaMaasik
	FROM #RawData
	GROUP BY EmployerFundCode

	EXEC spATLIB_DropTempTable '#PirteiKupa'
	SELECT DISTINCT
			2																												AS [SUG-KUPA],	-- קרן פנסיה
			1																												AS [SUG-KEREN-PENSIA],	-- מקיפה
			NULL																											AS [SHEM-KUPA-ETZEL-MAASIK],
			NULL																											AS	 [MISPAR-KUPA-ETZEL-MAASIK]
	INTO #PirteiKupa
	FROM #RawData

	EXEC spATLIB_DropTempTable '#PirteiHaavaratKsafim'
	SELECT
			EmployerFundCode																								AS PirteiHaavaratKsafimId,
			FundEncoding																									AS [KOD-MEZAHE-KUPA-H-P],
			EmployerCorporationType																							AS [SUG-MAFKID],
			EmployerCorporationIdTypeCode																					AS [SUG-MEZAHE-MAASIK],
			EmployerCorporationId																							AS [MISPAR-ZIHUY-MAASIK],
			NULL/*EmployerNumber*/																							AS [KOD-MEZAHE-MAASIK-ETZEL-YATZRAN],
			NULL																											AS [KOD-MASAV],
			SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SCHUM-HAFKADA-KOLEL],
			EmployerName																									AS [SHEM-MAASIK],
			ActionType																										AS [SUG-PEULA],		-- דיווח רגיל/שוטף
			PayType																											AS [KOD-EMTZAI-TASHLUM],	-- העברה בנקאית
			SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SACH-HAFKADA-KUPA-H-P],
			ValueDate																	AS [TAARICH-ERECH-HAFKADA-LEKUPA],
			NULL																		AS [TAARICH-ERECH-HAFKADA-CHESHBON-NEHEMANUT],
			MoneyReference																AS [MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM],
			NEWID()																		AS [MISPAR-ZIHUI],
			RIGHT('000'+ISNULL(BankKey,''),3)											AS [MISPAR-BANK-MAASIK],
			RIGHT('000'+ISNULL(DepartKey,''),3)											AS [MISPAR-SNIF-MAASIK],
			RIGHT('00000000000000000000'+ISNULL(Account,''),20)							AS [MISPAR-CHESHBON-MAASIK],
			AccountTypeOsh																AS [SUG-CHESHBON],	-- חשבון מעסיק
			CardType																	AS [SUG-KARTIS-MAASIK],
			AccountType																	AS [SUG-CHESHBON-MAASIK],
			AccountTypeInPay															AS [SUG-CHESHBON-KOLET-TASHLUM],	--חשבון יצרן
			RIGHT('000'+ISNULL(BankKeyInPay,''),3)										AS [MISPAR-BANK-KOLET],
			RIGHT('000'+ISNULL(DepartKeyInPay,''),3)									AS [MISPAR-SNIF-KOLET],
			RIGHT('00000000000000000000'+ISNULL(AccountInPay,''),20)					AS [MISPAR-CHESHBON-KOLET],
			NULL																		AS [MISPAR-ZIHUI-KODEM],
			NULL																		AS [MISPAR-MISLAKA],
			NULL																		AS [MISPAR-MISLAKA-KODEM]
	INTO #PirteiHaavaratKsafim
	FROM #RawData
	GROUP BY EmployerFundCode,
			 FundEncoding,
			 EmployerCorporationType,
			 EmployerCorporationIdTypeCode,
			 EmployerCorporationId,
			 EmployerNumber,
			 EmployerName,
			 ActionType,
			 PayType,
			 MoneyReference,
			 ValueDate,
			 BankKey,		
			 DepartKey,	
			 Account,
			 AccountTypeOsh,		
			 CardType,	
			 AccountType,
			 AccountTypeInPay,
			 BankKeyInPay,	
			 DepartKeyInPay,	
			 AccountInPay	
			

	EXEC spATLIB_DropTempTable '#YeshutGoremPoneLemislaka'
	SELECT 
			6																			AS [SUG-PONE],
			1																			AS [SUG-KOD-MEZAHE-PONE],
			'514554666'																	AS [MISPAR-MEZAHE-PONE],
			CAST(N'דלי אלון סוכנות לביטוח בע"מ' AS Nvarchar(500))						AS [SHEM-GOREM-PONE],
			NULL																		AS [MISPAR-MEZAHE-METAFEL],
			NULL																		AS [SHEM-PRATI-PONE-LEMISLAKA],
			NULL																		AS [SHEM-MISHPACHA-PONE-LEMISLAKA],
			NULL																		AS [MISPAR-TELEPHONE-KAVI-PONE-LEMISLAKA],
			NULL																		AS [E-MAIL-PONE-LEMISLAKA],
			NULL																		AS [MISPAR-CELLULARI]
	INTO #YeshutGoremPoneLemislaka

	EXEC spATLIB_DropTempTable '#GufHamimshak'
	SELECT 
			NULL	AS PalceHolder
	INTO #GufHamimshak

	EXEC spATLIB_DropTempTable '#KoteretKovetz'
	SELECT
			12																			AS [SUG-MIMSHAK],	-- ממשק מעסיקים - דיווח שוטף
			'002'																		AS [MISPAR-GIRSAT-XML],
			CAST(YEAR(@RunDate) AS NVARCHAR(4)) +
				RIGHT('00' + CAST(MONTH(@RunDate) AS NVARCHAR(2)),2) + 
				RIGHT('00' + CAST(DAY(@RunDate) AS NVARCHAR(2)),2)   +						    				   
				RIGHT('00' + CAST(DATEPART(hh,@RunDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DATEPART(mi,@RunDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DATEPART(ss,@RunDate) AS NVARCHAR(2)),2)				AS [TAARICH-BITZUA],
			2																			AS [KOD-SVIVAT-AVODA],	-- בדיקות
			CAST(YEAR(@RunDate) AS NVARCHAR(4)) +
				RIGHT('00' + CAST(MONTH(@RunDate) AS NVARCHAR(2)),2) + 
				RIGHT('00' + CAST(DAY(@RunDate) AS NVARCHAR(2)),2)   +							    				   
				RIGHT('00' + CAST(DATEPART(hh,@RunDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DATEPART(mi,@RunDate) AS NVARCHAR(2)),2) +
				RIGHT('00' + CAST(DATEPART(ss,@RunDate) AS NVARCHAR(2)),2) +
				RIGHT(REPLICATE('0',16) + '514554666', 16) + 
				'0001'																	AS [MISPAR-HAKOVETZ],
			'0001'																		AS [MISPAR-SIDURI]
	INTO #KoteretKovetz

	EXEC spATLIB_DropTempTable '#NetuneiGoremSholech'
	SELECT 
			6																		AS [KOD-SHOLECH],	-- מסלקה
			1																		AS [SUG-MEZAHE-SHOLECH],	-- ח.פ
			'514554666'																AS [MISPAR-ZIHUI-SHOLECH],
			CAST(N'דלי אלון סוכנות לביטוח בע"מ' AS Nvarchar(500)) 				AS [SHEM-GOREM-SHOLECH],
			CAST(N'לימור' AS Nvarchar(500))											AS [SHEM-PRATI-ISH-KESHER-SHOLECH],
			CAST(N'ניסן'	 AS Nvarchar(500))										AS [SHEM-MISHPACHA-ISH-KESHER-SHOLECH],
			'037333441'																AS [MISPAR-TELEPHONE-KAVI-ISH-KESHER-SHOLECH],
			'info@pensiahova.co.il'													AS [E-MAIL-ISH-KESHER-SHOLECH],
			NULL																	AS [MISPAR-CELLULARI-ISH-KESHER-SHOLECH]
	INTO #NetuneiGoremSholech

	EXEC spATLIB_DropTempTable '#NetuneiGoremNimaan'
	SELECT 
			1																			AS [KOD-NIMAAN],	-- יצרן
			1																			AS [SUG-MEZAHE-NIMAAN],	-- ח.פ
			RIGHT(REPLICATE('0',16) + CAST(@CompanyNumber AS NVARCHAR(16)), 16)			AS [MISPAR-ZIHUI-NIMAAN],
			NULL																		AS [MISPAR-ZIHUI-ETZEL-YATZRAN-NIMAAN]
	INTO #NetuneiGoremNimaan
	--FROM Management

	EXEC spATLIB_DropTempTable '#ReshumatSgira'
	SELECT 
		1																												AS [MISPAR-KUPOT-YATZRANIM-BAKOVETZ],
		COUNT(DISTINCT EmployerFundCode)																					AS [MISPAR-MAASIKIM],
		COUNT(*)																										AS [MISPAR-RESHUMOT],
		COUNT(DISTINCT MemberId)																						AS [MISPAR-AMITIM],
		SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SACH-HAFRASHOT-BAKOVETZ],
		SUM(CAST(MoneySumA AS DECIMAL(15,2)) + CAST(MoneySumB AS DECIMAL(15,2)) + CAST(MoneySumC AS DECIMAL(15,2)))	AS [SACH-HAFKADOT-BAKOVETZ]
	INTO #ReshumatSgira
	FROM #RawData

	EXEC spATLIB_DropTempTable '#MimshakMaasikim'
	SELECT 
			NULL			AS PalceHolder
	INTO #MimshakMaasikim

	--===== Output ===============================================================================
	


	SELECT 
		'104' + 
		RIGHT(REPLICATE('0',12) + CAST(@CompanyNumber AS NVARCHAR(12)), 12) + 
		'EMPONG' + 
		'000' + 
		'002' +
		CAST(YEAR(@RunDate) AS NVARCHAR(4)) +
			RIGHT('00' + CAST(MONTH(@RunDate) AS NVARCHAR(2)),2) + 
			RIGHT('00' + CAST(DAY(@RunDate) AS NVARCHAR(2)),2)   +						    				   
			RIGHT('00' + CAST(DATEPART(hh,@RunDate) AS NVARCHAR(2)),2) +
			RIGHT('00' + CAST(DATEPART(mi,@RunDate) AS NVARCHAR(2)),2) +
			RIGHT('00' + CAST(DATEPART(ss,@RunDate) AS NVARCHAR(2)),2) + 
		'0001' +
		'.DAT' AS InputFileName,
		(
			SELECT --Mimshak
				(
					SELECT --KoteretKovetz
						[SUG-MIMSHAK],
						[MISPAR-GIRSAT-XML],
						[TAARICH-BITZUA],
						[KOD-SVIVAT-AVODA],
						[MISPAR-HAKOVETZ],
						[MISPAR-SIDURI],
						(
							SELECT --NetuneiGoremSholech
								[KOD-SHOLECH],
								[SUG-MEZAHE-SHOLECH],
								[MISPAR-ZIHUI-SHOLECH],
								[SHEM-GOREM-SHOLECH],
								[SHEM-PRATI-ISH-KESHER-SHOLECH],
								[SHEM-MISHPACHA-ISH-KESHER-SHOLECH],
								[MISPAR-TELEPHONE-KAVI-ISH-KESHER-SHOLECH],
								[E-MAIL-ISH-KESHER-SHOLECH],
								[MISPAR-CELLULARI-ISH-KESHER-SHOLECH]
							FROM #NetuneiGoremSholech AS NetuneiGoremSholech
							FOR XML RAW ('NetuneiGoremSholech'), TYPE, ELEMENTS XSINIL	
						),
						(
							SELECT --NetuneiGoremNimaan
								[KOD-NIMAAN],
								[SUG-MEZAHE-NIMAAN],
								[MISPAR-ZIHUI-NIMAAN],
								[MISPAR-ZIHUI-ETZEL-YATZRAN-NIMAAN]
							FROM #NetuneiGoremNimaan AS NetuneiGoremNimaan
							FOR XML RAW ('NetuneiGoremNimaan'), TYPE, ELEMENTS XSINIL 	
						)
					FROM #KoteretKovetz AS KoteretKovetz
					FOR XML RAW ('KoteretKovetz'), TYPE, ELEMENTS XSINIL
				),
				(	
					SELECT --GufHamimshak
						(
							SELECT --YeshutGoremPoneLemislaka
								[SUG-PONE],
								[SUG-KOD-MEZAHE-PONE],
								[MISPAR-MEZAHE-PONE],
								[SHEM-GOREM-PONE],
								[MISPAR-MEZAHE-METAFEL],
								[SHEM-PRATI-PONE-LEMISLAKA],
								[SHEM-MISHPACHA-PONE-LEMISLAKA],
								[MISPAR-TELEPHONE-KAVI-PONE-LEMISLAKA],
								[E-MAIL-PONE-LEMISLAKA],
								[MISPAR-CELLULARI],
								(
									SELECT --PirteiHaavaratKsafim
										[KOD-MEZAHE-KUPA-H-P],
										[SUG-MAFKID],
										[SUG-MEZAHE-MAASIK],
										[MISPAR-ZIHUY-MAASIK],
										[KOD-MEZAHE-MAASIK-ETZEL-YATZRAN],
										[KOD-MASAV],
										[SCHUM-HAFKADA-KOLEL],
										[SHEM-MAASIK],
										[SUG-PEULA],
										[KOD-EMTZAI-TASHLUM],
										[SACH-HAFKADA-KUPA-H-P],
										[TAARICH-ERECH-HAFKADA-LEKUPA],
										[TAARICH-ERECH-HAFKADA-CHESHBON-NEHEMANUT],
										[MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM],
										[MISPAR-ZIHUI],
										[MISPAR-BANK-MAASIK],
										[MISPAR-SNIF-MAASIK],
										[MISPAR-CHESHBON-MAASIK],
										[SUG-CHESHBON],
										[SUG-KARTIS-MAASIK],
										[SUG-CHESHBON-MAASIK],
										[SUG-CHESHBON-KOLET-TASHLUM],
										[MISPAR-BANK-KOLET],
										[MISPAR-SNIF-KOLET],
										[MISPAR-CHESHBON-KOLET],
										[MISPAR-ZIHUI-KODEM],
										[MISPAR-MISLAKA],
										[MISPAR-MISLAKA-KODEM],
										(
											SELECT --PirteiKupa
												[SUG-KUPA],
												[SUG-KEREN-PENSIA],
												[SHEM-KUPA-ETZEL-MAASIK],
												[MISPAR-KUPA-ETZEL-MAASIK],
												(
													SELECT --PirteiOved
														[SUG-MEZAHE-OVED],
														[MISPAR-MEZAHE],
														[SHEM-PRATI],
														[SHEM-MISHPACHA],		
														[TAARICH-LEIDA],
														[MISPAR-OVED-ETZEL-MAASIK],
														[KOD-MEZAHE-MAASIK-ETZEL-YATZRAN],
														[SHEM-YISHUV],
														[SHEM-RECHOV],
														[MISPAR-BAIT],
														[MISPAR-DIRA],
														[MIKUD],
														[TA-DOAR],
														[E-MAIL],
														[MISPAR-CELLULARI],
														[MIN],
														[MOED-TCHILAT-AHASAKAT-OVED],
														(
															SELECT --ChodeshMaskoretVestatusOved
																[CHODESH-MASKORET],
																[MAHAMAD-HAFKADA-BEKUPA],
																[SUG-TAKBUL],
																[SACHAR-MEDUVACH],
																[STATUS-OVED-BECHODESH-MASKORET],
																[TAARICH-TCHILAT-STATUS],
																[CHELKIUT-MISRA],
																[YEMEI-AVODA-BECHODESH],
																[MISPAR-POLISA-O-HESHBON],
																(
																	SELECT --PizulHafrashotOvedBeKupa
																		[SUG-HAFRASHA],
																		[SHIUR-HAFRASHA],
																		[SCHUM-HAFRASHA],
																		[SACH-TASHLUMIM-PTURIM],
																		[MISPAR-MEZAHE-RESHUMA],
																		[MISPAR-MEZAHE-RESHUMA-KODEM]
																	FROM #PizulHafrashotOvedBeKupa AS PizulHafrashotOvedBeKupa
																	WHERE PizulHafrashotOvedBeKupa.ChodeshMaskoretVestatusOvedId = ChodeshMaskoretVestatusOved.ChodeshMaskoretVestatusOvedId
																	FOR XML RAW ('PizulHafrashotOvedBeKupa'), TYPE, ELEMENTS XSINIL
																),
																(
																	SELECT --PizulHafrashotOvedBeKupa
																		[SACH-HAFRASHA-BECHODESH-MASKORET]
																	FROM #SachHafrashaLeKupaBechodeshMaskoretOved AS SachHafrashaLeKupaBechodeshMaskoretOved
																	WHERE SachHafrashaLeKupaBechodeshMaskoretOved.ChodeshMaskoretVestatusOvedId = ChodeshMaskoretVestatusOved.ChodeshMaskoretVestatusOvedId
																	FOR XML RAW ('SachHafrashaLeKupaBechodeshMaskoretOved'), TYPE, ELEMENTS XSINIL
																)
															FROM #ChodeshMaskoretVestatusOved AS ChodeshMaskoretVestatusOved
															WHERE ChodeshMaskoretVestatusOved.PirteiOvedId = PirteiOved.PirteiOvedId
															FOR XML RAW ('ChodeshMaskoretVestatusOved') , TYPE, ELEMENTS XSINIL
														),
														(
															SELECT --PizulHafrashotOvedBeKupa
																[SACH-HAFRASHA-LEOVED-BEKUPA]
															FROM #SachHafrashaLeOvedBekupa AS SachHafrashaLeOvedBekupa
															WHERE SachHafrashaLeOvedBekupa.PirteiOvedId = PirteiOved.PirteiOvedId
															FOR XML RAW ('SachHafrashaLeOvedBekupa'), TYPE, ELEMENTS XSINIL
														)																						
													FROM #PirteiOved AS PirteiOved
													WHERE PirteiOved.PirteiHaavaratKsafimId = PirteiHaavaratKsafim.PirteiHaavaratKsafimId
													FOR XML RAW ('PirteiOved'), TYPE, ELEMENTS XSINIL
												),
												(
													SELECT --#SachHafrashaLeKupaMaasik
														[SACH-HAFRASHA-LEKUPA-BERAMAT-MAASIK],
														[SACH-HAFKADA-LEKUPA-BERAMAT-MAASIK],
														[MISPAR-AMITIM-BERAMAT-MAASIK]								
													FROM #SachHafrashaLeKupaMaasik AS SachHafrashaLeKupaMaasik
													WHERE SachHafrashaLeKupaMaasik.PirteiHaavaratKsafimId = PirteiHaavaratKsafim.PirteiHaavaratKsafimId
													FOR XML RAW ('SachHafrashaLeKupaMaasik'), TYPE, ELEMENTS XSINIL
												)
											FROM #PirteiKupa AS PirteiKupa
											FOR XML RAW ('PirteiKupa'), TYPE, ELEMENTS XSINIL
										)
									FROM #PirteiHaavaratKsafim AS PirteiHaavaratKsafim
									FOR XML RAW ('PirteiHaavaratKsafim'), TYPE, ELEMENTS XSINIL
								)
							FROM #YeshutGoremPoneLemislaka AS YeshutGoremPoneLemislaka
							FOR XML RAW ('YeshutGoremPoneLemislaka'), TYPE, ELEMENTS XSINIL
						)
					FROM #GufHamimshak AS GufHamimshak
					FOR XML RAW ('GufHamimshak'), TYPE, ELEMENTS XSINIL
				),
				(
					SELECT --ReshumatSgira
						[MISPAR-KUPOT-YATZRANIM-BAKOVETZ],
						[MISPAR-MAASIKIM],
						[MISPAR-RESHUMOT],
						[MISPAR-AMITIM],
						[SACH-HAFRASHOT-BAKOVETZ],
						[SACH-HAFKADOT-BAKOVETZ]
					FROM #ReshumatSgira AS ReshumatSgira
					FOR XML RAW ('ReshumatSgira'), TYPE, ELEMENTS XSINIL
				)
			FROM #MimshakMaasikim AS MimshakMaasikim
			FOR XML RAW ('MimshakMaasikim'), TYPE, ELEMENTS XSINIL
		) AS FileXml,
		NULL AS XmlReady
	INTO #Output	
			
	if exists (select * from #Policies )
		select * from #Output
	GO