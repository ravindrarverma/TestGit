public class dataTableClass {
    @AuraEnabled
    public static List <Contact> fetchContactData() {
        List<Contact> conList = [SELECT Id,Title, Name, Phone,Email,Fax from Contact LIMIT 20];
        return conList;
    }
}