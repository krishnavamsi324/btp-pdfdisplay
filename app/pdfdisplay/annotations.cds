using MyService as service from '../../srv/service';
annotate service.stud with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'studId',
                Value : studId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'deptId',
                Value : deptId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'studName',
                Value : studName,
            },
            {
                $Type : 'UI.DataField',
                Value : gender,
                Label : 'gender',
            },
            {
                $Type : 'UI.DataField',
                Label : 'studPhno',
                Value : studPhno,
            },
            {
                $Type : 'UI.DataField',
                Label : 'studEmail',
                Value : studEmail,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'studId',
            Value : studId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'deptId',
            Value : deptId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studName',
            Value : studName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studPhno',
            Value : studPhno,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studEmail',
            Value : studEmail,
        },
    ],
    UI.DataPoint #deptId : {
        $Type : 'UI.DataPointType',
        Value : deptId,
        Title : 'deptId',
    },
    UI.DataPoint #gender : {
        $Type : 'UI.DataPointType',
        Value : gender,
        Title : 'gender',
    },
    UI.DataPoint #studEmail : {
        $Type : 'UI.DataPointType',
        Value : studEmail,
        Title : 'studEmail',
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'deptId',
            Target : '@UI.DataPoint#deptId',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'gender',
            Target : '@UI.DataPoint#gender',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'studEmail',
            Target : '@UI.DataPoint#studEmail',
        },
    ],
);

annotate service.stud with @(
    UI.FieldGroup #Student : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : studId,
                Label : 'studId',
            },{
                $Type : 'UI.DataField',
                Value : deptId,
                Label : 'deptId',
            },{
                $Type : 'UI.DataField',
                Value : studName,
                Label : 'studName',
            },{
                $Type : 'UI.DataField',
                Value : studPhno,
                Label : 'studPhno',
            },{
                $Type : 'UI.DataField',
                Value : studEmail,
                Label : 'studEmail',
            },],
    }
);
