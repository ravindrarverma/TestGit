public class dynamicSearchClass {
    @AuraEnabled
    public static List<sObject> searchData(String AccountName,String Industry,String Rating ){
        String AccName = '%' +AccountName+ '%';
        String IndustryName = '%' +Industry+ '%';
        String Rtmg = '%' +Rating+ '%';
        String Query = '';
        if( AccountName != null ||  Industry != null||  Rating != null ){
            Query = 'Select id, Name,AccountNumber,Phone,Industry,Rating from account Where Name Like :AccName or Industry Like :IndustryName or Rating Like :Rtmg  LIMIT 10'; 
        }
        List<sObject> objectData = Database.query(Query);
        system.debug('objectData-->'+objectData);
        return objectData;
    }
}