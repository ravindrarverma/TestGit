public class currentUserData {
    @AuraEnabled
    public static user userDetails(){
        User usr =[select id,Name,Username,Country,CompanyName,FirstName,LastName,IsActive,Phone,Department 
                    FROM User Where id =: userInfo.getUserId()];
        return usr; 
    } 
}