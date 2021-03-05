public class accDataClass {
    @AuraEnabled
    public static List<account> fetchAccount(){
        List<account> lstAcc =[Select id, Name,AccountNumber,Phone,Industry from account];
        System.debug('lstAcc:'+lstAcc);
        return lstAcc; 
    }
}