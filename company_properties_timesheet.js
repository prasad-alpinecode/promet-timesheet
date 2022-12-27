var COMPANY_PROPERTIES = [
    {
        "Name" : "CompanyName",
        "Desc"  : "This is your company name to be used in app and pdf" , 
        "Value" : "Upstream",
        "Type" : "Text" ,
        "AppName": "Timesheet"
    },
    {
        "Name": "Company",
        "Desc": "This is your company ID like 00000000000000236",
        "Value": "00000000000000236DEV",
        "Type": "Text"
    },
    {
        "Name" : "WeekEndingDate",
        "Desc"  : "This is the weekending date set by company, it can be any day from Monday to Sunday" , 
        "Value" : "Sunday",
        "Type" : "Text" ,
        "AppName": "Timesheet"
        },
    {
        "Name": "GTCompanyCode",
        "Desc": "This is your company code in GreenTree",
        "Value": "UPS",
        "Type": "Text"
    },
    {
        "Name": "GTTimesheetPostObject",
        "Desc": "This is the extract object name for posting timesheet to GreenTree",
        "Value": "GTPostTimeSheet",
        "Type": "Text"
    },
    {
        "Name": "GetEmployeeObjectName",
        "Desc": "This is the extract object name for get employee name to GreenTree",
        "Value": "GetJCEmployee",
        "Type": "Text"
    },
    {
        "Name" : "AppName",
        "Desc"  : "appName" ,
        "Value" : "Timesheet",
        "Type" : "Text"  
    },
    {
        "Name" : "ScreenName",
        "Desc"  : "screenName" ,
        "Value" : "Timesheet",
        "Type" : "Text"  
    },
    {
        "Name" : "EmailSuffix",
        "Desc"  : "This is email suffix to be automatically added like @gmail.com" ,
        "Value" : "",
        "Type" : "Text" ,
        "AppName": "Timesheet"
    },
    {
        "Name" : "LocalSyncObject",
        "Desc"  : "LocalSyncObject name" , 
        "Value" : "LocalTimeSheets",
        "Type" : "Text" 
    },
    {
        "Name" : "LocalSyncStatusObject",
        "Desc"  : "Local database sync status object name" , 
        "Value" : "SyncStatus",
        "Type" : "Text" 
    },
    {
        "Name" : "LocalBranchObject",
        "Desc"  : "Local database branch object name" , 
        "Value" : "LocalBranch",
        "Type" : "Text" 
    },
    {
        "Name" : "genDataStoreAppName",
        "Desc"  : "app name saving to genDataStore" , 
        "Value" : "JCTimeSheetWithApprovals",
        "Type" : "Text" 
    },
    {
        "Name" : "genDataStoreObjName",
        "Desc"  : "object name saving to genDataStore" , 
        "Value" : "JCTimeSheetWithApprovals",
        "Type" : "Text" 
    },
    {
        "Name" : "genDataStoreUpdMethod",
        "Desc"  : "method use to save timesheet genDataStore" , 
        "Value" : "SendTimesheetToTokn",
        "Type" : "Text" 
    },{
        "Name" : "WebHook",
        "Desc"  : "WebHook URL" , 
        "Value" : "https://console.tokntechnology.com:50001/WebHook/TimesheetApprovalMail/",
        "Type" : "Text" 
    },
    {
        "Name" : "emailTemplate",
        "Desc"  : "emailTemplate url" , 
        "Value" : "https://tokncloudassetbucket-new.s3.ap-southeast-2.amazonaws.com/app_assets/00000000000000236DEVEmailTemplateFile.html",
        "Type" : "Text" 
    },
    {
        "Name" : "sendPostToConnect",
        "Desc"  : "Service end point for posting timesheet to genDataStore" , 
        "Value" : "https://console.tokntechnology.com:50001/Connect/api/genDataService",
        "Type" : "Text" 
    },
    {
        "Name" : "approveURL",
        "Desc"  : "Service end point for timesheet approval" , 
        "Value" : "https://console.tokntechnology.com/account/timesheet/approve/",
        "Type" : "Text" 
    },
    {
        "Name" : "prewebHook_ApiKey",
        "Desc"  : "ApiKey" , 
        "Value" : "500064",
        "Type" : "Text" 
    },
    {
        "Name" : "prewebHook_Authorization",
        "Desc"  : "Authorization" , 
        "Value" : "Basic VG9rbjpBMTIzNDU2QA==",
        "Type" : "Text" 
    }
   
];

var Co_Prop_TimesheetEmail = {
    "personalizations": [
        {
            "to": [
    
                {
                    "email": "neha@tokntechnology.com"
                }
            ]
        }
    ],
    "aws":"x",
    "from": {
        "email": "TimeSheetAPP@tokntechnology.com"
    },
    "subject": "TimeSheet",
    "content": [
        {
            "type": "text/plain",
            "value": "Please find TimeSheet PDF attached!"
        }
    ],
    "attachments": [
        {
            "content": "",
            "filename": "",
            "disposition": "attachment",
            "content_id": ""
        }
    ]
};