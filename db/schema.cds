namespace db;

entity stud{
    key studId: String;
    deptId: String;
    studName: String;
    studPhno: String;
    studEmail: String;
    gender : String(10) enum { 
        male   = 'male';
        female = 'female';
        other  = 'other';
    };
    studtofile: Composition of many Files on studtofile.filetostud = $self;
}
using { 
    cuid,
    managed
} from '@sap/cds/common';

entity Files: cuid, managed{
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    size: Integer;
    url: String;
    studId : String;
    filetostud: Association to one stud on filetostud.studId = studId;
}