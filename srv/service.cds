using db from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity stud as projection on db.stud;
    function postattach(p : String)           returns String;
    entity Files as projection on db.Files;
}