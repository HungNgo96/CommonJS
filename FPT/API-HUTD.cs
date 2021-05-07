
/******************************************************************
**** Description: Thông tin API: FTI - Hoàn ứng vật tư tự động cho TIN/PNC
**** Author: Team OUS04
**** statusCode
	 200: Success, 400: input không đúng,  500: lỗi server hoặc store
**** Host
	- Staging
		domain: http://stagparapiora.fpt.vn
	 	host: 172.20.17.50
	- Staging
		domain: http://stagparapiora.fpt.vn
	 	host: 172.20.17.50
	- Product
		domain: http://parapiora.fpt.vn
	 	host: 172.20.17.32

**** Lưu ý: các output dài chỉ lấy đại diện 2 row của mỗi field, bổ sung ký tự "..."

******************************************************************/


/**** I. API dùng chung cho triển khai và bảo trì ****/

1. Get danh sách chức năng theo thiết bị và bộ nguyên nhân thu hồi không thành công
API: {domain}/api/FTIAuto/Deployment/GetListTotal
Method: POST
Input: {}
Ouput:
{
    "data": {
		/* Chức năng theo thiết bị */
        "FunctionName": [
            {
                "parentName": "Modem",
                "functionName": "Converter"
            },
            {
                "parentName": "Modem",
                "functionName": "AccessPoint"
            }
			...
        ],
		/* Bộ nguyên nhân thu hồi không thành công */
        "NoneReturnCause": [
            {
                "ID": 1,
                "Name": "Không liên hệ được khách hàng"
            },
            {
                "ID": 2,
                "Name": "Khách hàng không đồng ý thu hồi"
            }
			...
        ]
    },
    "statusCode": 200
}


2. Get danh sách nhân viên, block, đối tác theo tỉnh thành
API: {domain}/api/FTIAuto/Maintenance/LoadEmployee
Method: POST
Input: 
{
	int LocationID; // Mã tỉnh thành (theo hợp đồng)
}
Ouput:
{
    "data": {
        "Partner": [], // Đối tác thuộc tỉnh thành, bao gồm các field: 
							/* 	Code: mã đối tác (duy nhất), 
								Partner: mã đối tác (phân theo FTTH), 
								INFDivName: tên đối tác (bỏ qua), 
								Supporter: tên đối tác (tên hiển thị lên drl),  
								OwnerType: 1 - TIN/PNC, 2 - INDO
							*/
        "Block": [], // Block filter theo đối tác (Partner)
							/* 	ID: ID Block, 
								SubName: tên block
								PartnerID: mã đối tác (khóa ngoại Partner), 								
							*/
        "Employee": [] // Nhân viên filter theo Block
							/* 	ID: ID nhân viên, 
								BlockID: ID block (khóa ngoại Block),
								InsideAccount: accoutn nhân viên hiển thị (account đăng nhập mobinet của NV),			
							*/
    },
    "statusCode": 200
}
VD:
Input:
{
    "LocationID": 8
}
Ouput:
{
    "data": {
        "Partner": [
            {
                "Code": 1089,
                "Partner": 42,
                "INFDivName": "SST",
                "Supporter": "SGTo SST",
                "OwnerType": 1
            },
            {
                "Code": 63,
                "Partner": 93,
                "INFDivName": "Phuong Nam-01",
                "Supporter": "SGTo PhuongNam-01",
                "OwnerType": 1
            } 
			...
        ],
        "Block": [
            {
                "ID": 369916,
                "PartnerID": 208,
                "SubName": "Q1-001"
            },
            {
                "ID": 333916,
                "PartnerID": 357,
                "SubName": "ISC-Q1-001"
            }
			...
        ],
        "Employee": [
            {
                "ID": 1000009822,
                "BlockID": 346736,
                "InsideAccount": "PNC01.DONDH"
            },
            {
                "ID": 1000010232,
                "BlockID": 338796,
                "InsideAccount": "PNC04.THANHLH1"
            }
			...
        ]
    },
    "statusCode": 200
}


3. Cập nhật phân công nhân viên
API: {domain}/api/FTIAuto/Maintenance/UpdateEmployee
Method: POST
Input: 
{
	int ObjID; // Mã hợp đồng
int LLAddressID; // ID Checklist FTI
int PartnerID; // Mã đối tác
int BlockID; // ID block
string AccountEMP; // Account nhân viên được phân công
int EmployeeRole; // Thuộc tính nhân viên [ chính (EmployeeRole = 1) / phụ (EmployeeRole = 2)], không truyền mặc định là nhân viên chính
int Cause; // Nguyên nhân phân công (Không có thì để 0)
string LogonUser; // Account người phân công
string Supporter; // Tên đối tác
string Description; // Ghi chú
int Type; // 1 - triển khai, 2 - bảo trì
}
Ouput:
{
    "data": 1, // 0 - cập nhật không thành công, 1 - cập nhật thành công
    "statusCode": 200
}
VD:
Input:
{
    "ObjID":1014921682,
    "LLAddressID":111,
    "PartnerID": 93,
	"BlockID": "273716",
	"AccountEMP": "PNC01.DIEUPT456",
    "EmployeeRole": 1,
	"Cause": 2,
    "LogonUser": "Test",
    "Supporter": "SGTo PhuongNam-01",
    "Description": "Test chuyển nhân viên",        
    "Type":2
}
Ouput:
{
    "data": 0,
    "statusCode": 200
}


4. Load danh sách vật tư triển khai, bảo trì dành cho FTI
API: {domain}/api/FTIAuto/Maintenance/LoadListEquipment
Method: POST
Input: 
{
	int ObjID; // Mã hợp đồng
int Request; // FTI mặc định truyền = 2
int LocalType; // Loại dịch vụ, LocalType trong bảng Object (FTI mặc định 90)
string AccountEMP;
}
Ouput:
{
    "data": {
        "Equipment_Use": [], // Vật tư sử dụng
									/*
										CodeID: mã vật tư
										DBName: tên vật tư dưới DB
										EQuipmentName: tên vật tư hiển thị
										IsMac: 0 - thiết bị không có mac, 1 - thiết bị có mac
										ServiceCode: mã dịch vụ
										UnitName: đơn vị (chiec/met ...)
										ParentName: tên nhóm vật tư (Modem/HD Box/Cap ...)
										ParentNameVN: tên nhóm vật tư tiếng việt
										ReturnType: bỏ qua trường này
										EnabledModdem: bỏ qua trường này
									*/
        "Equipment_Return": [], // Vật tư thu hồi
									/*
										CodeID: mã vật tư
										DBName: tên vật tư dưới DB
										EQuipmentName: tên vật tư hiển thị
										IsMac: 0 - thiết bị không có mac, 1 - thiết bị có mac
										ServiceCode: mã dịch vụ
										UnitName: đơn vị (chiec/met ...)
										ParentName: tên nhóm vật tư (Modem/HD Box/Cap ...)
										ParentNameVN: tên nhóm vật tư tiếng việt
										ReturnType: bỏ qua trường này
									*/
        "Equipment_Dept": [], // Vật tư nợ của nhân viên
                                    /*
                                        EQUIPMENTNAME: Tên vật tư
                                        UNITNAME: Đơn vị tính
                                        QUANTITY: Số lượng tạm ứng (nợ)
                                        TYPE: 
                                        CODEID: Mã vật tư đã tạm ứng
                                        ISMAC: 1 - Vật tư có mac, 0 - Vật tư không có mac

                                    */

    },
    "statusCode": 200
}
VD:
Input:
{
    "ObjID":1020108722,
    "Request": 2,
    "Localtype": 63,
    "AccountEMP":"ISC2.THU"
}
Ouput:
{
    "data": {
        "Equipment_Use": [
            {
                "CodeID": 52,
                "DBName": "Onecore",
                "EQuipmentName": "1 core",
                "IsMac": 0,
                "ServiceCode": null,
                "UnitName": "MET",
                "ParentName": "Cap",
                "ParentNameVN": "Cáp",
                "ReturnType": null,
                "EnabledModdem": 1.0
            },
            {
                "CodeID": 62,
                "DBName": "Twocore",
                "EQuipmentName": "2 core",
                "IsMac": 0,
                "ServiceCode": null,
                "UnitName": "MET",
                "ParentName": "Cap",
                "ParentNameVN": "Cáp",
                "ReturnType": null,
                "EnabledModdem": 1.0
            }
        ],
        "Equipment_Return": [
            {
                "CodeID": 52,
                "DBName": "Onecore",
                "EQuipmentName": "1 core",
                "IsMac": 0,
                "ServiceCode": null,
                "UnitName": "MET",
                "ParentName": "Cap",
                "ParentNameVN": "Cáp",
                "ReturnType": null
            },
            {
                "CodeID": 62,
                "DBName": "Twocore",
                "EQuipmentName": "2 core",
                "IsMac": 0,
                "ServiceCode": null,
                "UnitName": "MET",
                "ParentName": "Cap",
                "ParentNameVN": "Cáp",
                "ReturnType": null
            }
			...
        ],
        "Equipment_Dept": [
            {
                "EQUIPMENTNAME": "1 core",
                "UNITNAME": "MET",
                "QUANTITY": 30,
                "TYPE": 2,
                "CODEID": 52,
                "ISMAC": 0
            },
            {
                "EQUIPMENTNAME": "GPON Wifi",
                "UNITNAME": "CHI",
                "QUANTITY": 0,
                "TYPE": 1,
                "CODEID": 542,
                "ISMAC": 1
            },
            ...
        ]
    },
    "statusCode": 200
}


5. Load danh sách mac xuất tạm ứng của nhân viên
API: {domain}/api/FTIAuto/Maintenance/LoadMacExportByEmployee
Method: POST
Input: 
{
	int LocationID; // Mã tỉnh thành
string AccountEMP; // Account nhân viên
int ObjID; // Mã hợp đồng
int SupID; // Mã phiếu triển khai, bảo trì FTI
int TypeID; // 1 - triển khai, 2 - bảo trì
int IsGetSet; // mặc định = 0
}
Ouput:
{
    "data": {
        "MacExport": [] // Danh sách mac xuất
							/*
								ID: mã vật tư
								Mac: mac xuất tạm ứng
								MacOnline: mac online được tính từ mac xuất
							*/
    },
    "statusCode": 200
}
VD:
Input:
{    
    "LocationID":8,    
	"AccountEMP": "ISC.CHUYENNT5",
    "ObjID": 1014921682 ,
    "SupID": 111,
    "Typeid":2
}
Ouput:
{
    "data": {
        "MacExport": [
            {
                "ID": 212,
                "Mac": "20017261ABM",
                "MacOnline": "20017261ABM"
            },
            {
                "ID": 502,
                "Mac": "G97RG6190301",
                "MacOnline": "G97RG6190301"
            }
            ...
        ]
    },
    "statusCode": 200
}

/**** II. API dùng cho triển khai ****/

1. Lấy vật tư sử dụng trên PTC
API: {domain}/api/FTIAuto/Deployment/GetSupINFEquip
Method: POST
Input:
{
    "Objid":184825,             // id hợp đồng
    "LLAddressID":505752        // id của PTC
}
Output:
{
    "data": [                   // danh sách vật tư
        {
            "IDCODE": 242,                          // id vật tư
            "DESCRIPTION": "Cap 5",                 // mô tả
            "PARENTNAME": "Cap IPTV",               // CHỦNG LOẠI VẬT TƯ
            "QUANTITY": 60,                         // số lượng
            "MAC": null                             // mac
        },
        {
            "IDCODE": 2812,
            "DESCRIPTION": "Access Point N300T",
            "PARENTNAME": "Modem",
            "QUANTITY": 1,
            "MAC": "9c:50:ee:fd:56:e8"
        },
        {
            "IDCODE": 742,
            "DESCRIPTION": "Wifi 1 Port",
            "PARENTNAME": "Modem",
            "QUANTITY": 1,
            "MAC": "16:60:28:1"
        }
    ],
    "statusCode": 200
}

2. Cập nhật vật tư sử dụng trên PTC
API: {domain}/api/FTIAuto/Deployment/UpdateSupINFEquip
Method: POST
Input:
{
	"ObjID": 184825,                // id hợp đồng
	"LLAddressID": 505752,          // id PTC
	"CreateBy": "khoit",            // account inside
    "ListEquip": [                  // danh sách thiết bị cần cập nhật
        {
            "IDCODE": 242,                      // mã 
            "FUNCTIONNAME": "Cap IPTV",         // CHỨC NĂNG CỦA THIẾT BỊ
            "MAC": "",                          // mac
            "QUANTITY": 60,                     // số lượng
            "TYPEID": 3                         // 1: VT chính, 2: VT thu hồi, 3: VT phụ 
        },
        {
            "IDCODE": 2812,
            "FUNCTIONNAME": "Modem",
            "MAC": "9c:50:ee:fd:56:e8",
            "QUANTITY": 1,
            "TYPEID": 1
        },
        {
            "IDCODE": 742,
            "FUNCTIONNAME": "Cap IPTV",
            "MAC": "16:60:28:1",
            "QUANTITY": 1,
            "TYPEID": 2
        }
    ]
}
Output:
{
    "data": 1, /* thành công             
            0: lỗi không tìm thấy PTC, hoặc lỗi bộ nhớ
            -1: có 1 VT không hợp lệ
            -2: có 2 VT không hợp lệ
            -n: ...
            */ 
    "statusCode": 200
}

3. Hoàn tất kết hợp hoàn ứng PTC
API: {domain}/api/FTIAuto/Deployment/FinishAndHUTDDeploymentFTI
Method: POST
Input:
{
    "LLAddressID":505752
    "ObjID":184825
    "Description":"test-1",
    "Username":"khoit",
    "Status":1,
    "NotSetHiFPT":1,
    "DeptID":1,
    "SubDeptID":1,
    "EmployeeName": "PNC01.DIEUPT456"
}
Output:
{
    "data": {
        "code": "1"                 // tùy từng mã code sẽ có message thông báo lỗi từng giai đoạn (nếu có)
        "message": "Thành công"

        /*      ------------ CÁC BỘ MÃ LỖI --------------
            "1660281": "Nhân viên còn tồn nợ vật tư, không thể hoàn tất phiếu thi công"
            "99": "Hoàn ứng tự động không thành công"
            "0": "Có lỗi xảy ra (kiểm tra lại mã phiếu, ...)"
            "2": "Không có thông tin hợp đồng, vùng miền"
            "3": "Không có thông tin nhân sự, phiếu thi công"
            "4": "Không có thông tin nhân viên, tổ thi công"
            "5": "Không có thông tin phòng ban"
            "6": "Không có thông tin vật tư"
        */
    },
    "statusCode": 200
}

4. Tạo PTC FTI
API: {domain}/api/FTI/SupportINFCreateAutoByFTI
Method: POST
Input:
{
    "ObjID": "1049285443",  
    "CusType": "0",             // 0:Triển khai mới, 1:Chuyển địa điểm,3:Khôi phục dịch vụ,7:KH nâng cấp dịch vụ,10:KH Downgrade dịch vụ,11:KH nâng cấp dịch vụ gia tăng,12:Khách hàng mua/đổi thiết bị,13:Khách hàng cắt chuyển di dời,14:Thay đổi hạ tầng,15:Khách hàng nâng cấp băng thông,16:Swap hạ tầng,17:KH thuê thiết bị HDBox,18:Dùng thử dịch vụ,19:Nâng cấp SD sang HD
    "CenterID": "6",            //Trung tam 1: IBB 2: Telasale 3: Giao dich quay 4: KDDA 5: CS 6: FTI  7: PayTV 8: Outside 9: DMX 10: Sale Online 11: TIN/PNC  12: Member 13: MO
    "AccountLogin": "ngocbt9",
    "LLAddressID": "1145163",   // id phieu thi cong FTI
    "DeptID": "",               // Đối tác => Code trong API LoadEmployee
    "SubDeptID": ""             // Tổ, Mô hình nhân viên tổ mặc định tổ 300
}
Output:
{
    "data": 1,   // thành công, 0: thất bại
    "statusCode": 200
}

/**** III. API dùng cho bảo trì ****/

1. Load danh sách vật tư đã nhập trên phiếu bảo trì
API: {domain}/api/FTIAuto/Maintenance/LoadEquipmentByChecklist
Method: POST
Input: 
{
	int ObjID; // Mã hợp đồng
int SupID; // Mã phiếu bảo trì FTI (LLAddressID)
int Request; // FIT mặc  định = 2
}
Ouput:
{
    "data": {
        "Equipment_Use": [], // Danh sách vật tư sử dụng
								/*
									CodeID: mã vật tư
									DBName: tên vật tư trong DB
									EQuipmentName: tên vật tư
									Quantity: số lượng
									MacAddress: địa chỉ mac
									FunctionName: chức năng đã chọn
									Type: bỏ qua trường này
									Orderby: bỏ qua trường này
									IsMac: 0 - thiết bị không có mac, 1 - thiết bị có mac
									ParentName: tên nhóm vật tư (Modem/HD Box/Cap ...)
								*/
        "Equipment_Return": [] // Danh sách vật tư thu hồi
								/*
									CodeID: mã vật tư
									DBName: tên vật tư trong DB
									EQuipmentName: tên vật tư
									Quantity: số lượng
									MacAddress: địa chỉ mac
									FunctionName: chức năng đã chọn
									CauseReturn: ngyên nhân thu hồi không thành công
									Type: bỏ qua trường này
									Orderby: bỏ qua trường này
									IsMac: 0 - thiết bị không có mac, 1 - thiết bị có mac
									ParentName: tên nhóm vật tư (Modem/HD Box/Cap ...)
								*/
    },
    "statusCode": 200
}
VD:
Input:
{
    "SupID": 111,
    "ObjID": 1026132302,
    "Request": 2
}
Ouput:
{
    "data": {
        "Equipment_Use": [
            {
                "CodeID": 242,
                "DBName": "Cable5",
                "EQuipmentName": "Cap 5",
                "Quantity": 1,
                "MacAddress": null,
                "FunctionName": "Cap IPTV",
                "Type": 0,
                "Orderby": 9,
                "IsMac": 0,
                "ParentName": "Cap IPTV"
            },
            {
                "CodeID": 52,
                "DBName": "Onecore",
                "EQuipmentName": "1 core",
                "Quantity": 1,
                "MacAddress": null,
                "FunctionName": "Cap",
                "Type": 0,
                "Orderby": 1,
                "IsMac": 0,
                "ParentName": "Cap"
            }
			...
        ],
        "Equipment_Return": [
            {
                "CodeID": 242,
                "DBName": "Cable5",
                "EQuipmentName": "Cap 5",
                "Quantity": 1,
                "MacAddress": null,
                "FunctionName": null,
                "CauseReturn": 0,
                "Type": 0,
                "Orderby": 9,
                "IsMac": 0,
                "ParentName": "Cap IPTV"
            },
            {
                "CodeID": 1442,
                "DBName": "ArcherC2",
                "EQuipmentName": "Archer C2",
                "Quantity": 1,
                "MacAddress": "270820189552C2",
                "FunctionName": null,
                "CauseReturn": 0,
                "Type": 0,
                "Orderby": 2,
                "IsMac": 1,
                "ParentName": "Modem"
            }
        ]
    },
    "statusCode": 200
}


2. Cập nhật vật tư bảo trì
API: {domain}/api/FTIAuto/Maintenance/InsertUpdateEquipment
Method: POST
Input: 
{
	int ObjID; // Mã hợp đồng
int SupID; // Mã phiếu bảo trì FTI (LLAddressID)
int Request; // FIT mặc  định = 2
string LogonUser; // Account cập nhật
int LocationID; // ID tỉnh thành
string XmlEquipment; // Chuỗi XML đẩy vật tư, dạng attribute
							/* XmlEquipment = <rows><row CodeID='502' Quantity='1' MacAddress='ABCDEFGHIJK' IsReturn='2' FunctionName = 'Modem' CauseReturn='0' /></rows> 
								CodeID: mã vật tư
								Quantity: số lượng
								MacAddress: địa chỉ mac
								IsReturn: 1 - vật tư thu hồi, 2 - vật tư sử dung
								FunctionName: tên chức năng
								CauseReturn: nguyên nhân thu hồi không thành công
							*/

}
Ouput:
{
    "data": {
        "Result": 1, // Mã kết quả trả về, 0 - cập nhật không thành công, 1 - Cập nhật thành công
        "ResultDesc": "Cập nhật vật tư thành công!"
    },
    "statusCode": 200
}
VD:
Input:
{
    "ObjID":1026132302,
    "LocationID":8,
    "SupID": 111,
    "LogonUser": "Test",
    "Request":2,
    "XmlEquipment":"<rows><row CodeID='1612' Quantity='1' MacAddress='9C50EE29E2EE' IsReturn='2' Type='0' FunctionName = 'Modem' CauseReturn='0' /><row CodeID='1612' Quantity='1' MacAddress='TestTH' IsReturn='1' Type='0' FunctionName = '' CauseReturn='0' /><row CodeID='1612' Quantity='1' MacAddress='TestKoTH' IsReturn='1' Type='0' FunctionName = '' CauseReturn='1' /></rows>"
}
Ouput:
{
    "data": {
        "Result": 1,
        "ResultDesc": "Cập nhật vật tư thành công!"
    },
    "statusCode": 200
}


3. Cập nhật phiếu bảo trì(cập nhật thông tin phiếu và hoàn tất)
API: {domain}/api/FTIAuto/Maintenance/UpdateChecklist
Method: POST
Input(truyền như API cũ /api/FTI/SupportList_UpdateAuto_FTI, có bổ sung thêm AccountEMP): 
{
    int LLAddressID;
    int ObjID;
    int Final_Status; // 0 - Đang xử lý, 1 - Xử lý hoàn tất, 100 - Hủy phiếu bảo trì
    string LogonUser; // Account đăng nhập
                      //int DepartmentID; // ID DepartmentINF
    int DeptID; // Code trong API /LoadEmployee
    int SubTeamID; // ID PartnerSubTeam
    string Link1; // Vị trí mối nối 1
    string Link2; // Vị trí mối nối 2
    int LengthLink; // Chiều dài mối nối
    string Description; // Ghi chú phiếu bảo trì
    string DivisionDesc; // Ghi chú division
    string RepreName; // Tên người đại diện
    string RepreRelation; // Quan hệ với chủ HĐ
    string ReprePhone; // Số điện thoại người đại diện
    int CurrentStatus; // Lần phân công thứ i
    int Now_Status; // Tình trạng sự cố ban đầu
    int HappenPosition; // Vị Trí Xảy Ra Lỗi
    int Status; // Mô Tả Lỗi
    int OftenError; // Mô Tả Nguyên Nhân
    int TestResult; // 	Hướng Xử Lý
    string ImageCoreMap; // Đường dẫn hình ảnh Sơ đồ dẫn core
    int ReasonNonSetHiFPT; // Nguyên nhân không cài đặt Hi-FPT
    string AccountEMP; // Account nhân viên chính đang được phân công
}
Ouput:
{
	"data": {
		"Code": {Code},
		"Message": {Message},
		"ResultInfo": {ResultInfo}
        /* 
            Code = 1,
            Message = "Cập nhật phiếu thành công!",
            ResultInfo = ""

            Code = 2,
            Message = "Cập nhật phiếu thành công! hoàn ứng thành công!",
            ResultInfo = "Xác nhận hoàn ứng thành công Inside - Stock phiếu PHUTK-PNC08.HADV1-19032021-002"

            Code = 3,
            Message = "Cập nhật phiếu thành công! hoàn ứng không thành công!",
            ResultInfo = "Ket noi FTelSCM khong thanh cong."

            Code = -1,
            Message = "Không tìm thấy thông tin phiếu tồn bảo trì!",
            ResultInfo = ""

            Code = -2,
            Message = "Phiếu chưa phân công nhân viên, vui lòng phân công trước khi hoàn tất!",
            ResultInfo = ""

            Code = -3,
            Message = "Mac bảo trì không nằm trong danh sách mac xuất của nhân viên: ISC.Test!"
            ResultInfo = "[{\"CodeID\":672,\"MacAddress\"😕"MacTest\",\"IsOnline\":0}]"

            Code = -4,
            Message = "Số lượng vật tư bảo trì vượt quá số lượng nợ của nhân viên: Test!",
            ResultInfo = "[{\"EQuipmentName\"😕"HDMI\",\"MacAddress\":null,\"Quantity\":1}]"

            Code = -5,
            Message = "Lỗi cập nhật phiếu!",
            ResultInfo = "Cannot access a disposed object.\r\nObject name: 'OracleConnection'." 
        */
	},
	"statusCode": 200
}
VD:
Input:
{    
    "lladdressid":111,
	"ObjID":1026132302,            
	"Final_Status":0,
    "LogonUser": "Test",    
    "Description": "Test cập nhật bảo trì"
}
Ouput:
{
    "data": {
        "Code": 1,
        "Message": "Cập nhật phiếu thành công!",
        "ResultInfo": ""
    },
    "statusCode": 200
}


4. Tạo phiếu bảo trì(API dùng chung)
API: {domain}/api/ISMaintaince/SupportListDSLCreate
Method: POST
Input:
{
	int: ObjID
    int: llAddressId
    string: CreateBy
    int: Type
    int: Init_Status
    string: Description
    int: ModemType
    bool: SubAssign
    int: CLElectric
    bool: Upgrade
    string: Supporter
    string: SubSupporter
    int: DeptID
    int: RequestFrom
    int: OwnerType
    int: NonSetHiFPT
    int: CRID
}
/*  Mô tả input ==========================================================
         ObjId (int): ID hợp đồng
         llAddressId: truyền ID phiếu FTI (Mã ID phiếu)
         CreateBy (varchar): (Account đăng nhập người Tạo Cl)
         Type (int): ID sự cố (Luôn truyền vào 2)-
         Init_Status (int): tình trạng sự cố ban đầu 
         Description (varchar): ghi chú
         ModemType (smallint): loại modem, không có thông tin truyền default 0
         bitSubAssign (bit): phân công cho Sub- default false
         bitCLElectric (tinyint): 1=checklist điện lực; 0=checklist thường,4- Cl Khẩn SOS
         bitUpgrade (bit): Checklist nâng cấp* default false
         Supporter (varchar): Tên đối tác bảo trì (tên đối tác DepartmentINF.Supporter) *
         SubSupporter (varchar): tổ bảo trì (Không có tổ mặc định truyền 300)*
         DeptID (int): id đối tác (Code trong API /LoadEmployee)
         RequestFrom: Nguồn tạo checklist, FTI và Inside: = 9
         OwnerType: = 1: checklist TIN/PNC; = 2: Checklist INDO *         
         NonSetHiFPT: truyền default 0
         CRID: Customer Request default 0
*/
Output:
{
	"data": 1222597216 // id checklist, > 0 Tạo checklist thành công, 0: Tạo checklist không thành công,
	"statusCode": 200
}


5. Load tình trạng sự cố ban đầu
API: {domain}/api/FTIAuto/Maintenance/LoadInit_Status
Method: POST
Input: không có input
Output:
{
    "data": [
        {
            "CodeFTI": 641,
            "Description": "Tình trạng khác"
        },
        {
            "CodeFTI": 531,
            "Description": "System - Rớt kết nối liên tục"
        },
        ...
    ],
    "statusCode": 200
}









