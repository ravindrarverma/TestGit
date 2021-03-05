public class accData {
    //this class id for learning purpose
    @AuraEnabled
    public static List<Account> fetchAcc(){
        return [SELECT Id, Name,AccountNumber,Fax,Industry,Phone,Rating,Website,YearStarted FROM Account LIMIT 1];
    }
    
    @AuraEnabled
    public static void deleteAcc(String strId){
        Account[] Accts = [SELECT Id, Name FROM Account 
                                 WHERE Id=: strId]; 
        try {
            delete Accts;
        } catch (DmlException e) {
            // Process exception here
        }
    }
}