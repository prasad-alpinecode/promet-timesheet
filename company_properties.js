var COMPANY_PROPERTIES = [
    {
        "AppName": "Safety Toolkit",
        "Name": "RiskRatingCONEQ",
        "Desc": "This is the risk rating list conequence", /* this is help text on con sole for this property*/
        "Type": "List",
        "Value": [
            { "Description": "Insignificant" },
            { "Description": "Minor" },
            { "Description": "Moderate" },
            { "Description": "Major" },
            { "Description": "Catastrophic" }
        ]
    },
    {
        "AppName": "Safety Toolkit",
        "Name": "RiskRatingLIK",
        "Desc": "This is the risk rating list liklehood", /* this is help text on con sole for this property*/
        "Type": "List",
        "Value": [
            { "Description": "Rare" },
            { "Description": "Unlikely" },
            { "Description": "Possible" },
            { "Description": "Likely" },
            { "Description": "Almost Certain" }
        ]
    },
    {
        "Name": "Company",
        "Desc": "This is your company ID like 00000000000000232",
        "Value": "00000000000000232QAS",
        "Type": "Text"
    }
];

var Co_Prop_TimesheetEmail = {
    "personalizations": [
        {
            "to": [
                {
                    "email": "shwetha@tokntechnology.com"
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