public class SendAccountUsingRESTAPI {
    private final String clientId = '3MVG9n_HvETGhr3D6seoxDuqAa3XcQWEegtoPLjMWzWgZXmC2kjTbxHaLQQBeDzOZTKHfPJHogmWCfU3ZoxlA';
    private final String clientSecret = '8901B457BF9E3C85CDEB57BECD8665110233F5C09FB4A81F94FE8541B36BD755';
    private final String username = 'ravindra.verma@salesforce.com';
    private final String password = 'qwerty@007';
    public class deserializeResponse
    {
        public String id;
        public String access_token;
    }
    public String ReturnAccessToken ()
    {
        String reqbody = 'grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint('https://r-k-v-dev-ed.my.salesforce.com/services/oauth2/token');
        HttpResponse res = h.send(req);
        system.debug(res);
        deserializeResponse resp1 = (deserializeResponse)JSON.deserialize(res.getbody(),deserializeResponse.class);
        system.debug(resp1.access_token);
        system.debug('@@@@access_token@@'+resp1 );
        return resp1.access_token;
    }
    
    public static list<Contact> callgetContact (String accId)
    {
        SendAccountUsingRESTAPI acount1 = new SendAccountUsingRESTAPI();
        String accessToken;
        accessToken = acount1.ReturnAccessToken ();
        list<Contact> LstContact=new List<Contact>();
        if(accessToken != null){
            String endPoint = 'https://ap16.lightning.force.com/services/apexrest/v1/getContacts/' +accId;
            
            //String jsonstr = '{"accId" : "' + accId+ '"}';
            Http h2 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer ' + accessToken);
           // req1.setHeader('Content-Type','application/json;charset=UTF-8')
            req1.setHeader('Content-Type', 'application/json');

            req1.setHeader('Accept','application/json');
            //req1.setBody(jsonstr);
            req1.setMethod('GET');
            req1.setEndpoint(endPoint);
            HttpResponse res1 = h2.send(req1);
            String trimmedResponse = res1.getBody().unescapeCsv().remove('\\');
            system.debug('@@@RESPONSE@@'+trimmedResponse);
            JSONParser parser = JSON.createParser(res1.getBody());
            set<Contact> contList=new set<Contact>();
            
            while (parser.nextToken() != null) {
                //Id
                
                if((parser.getCurrentToken() == JSONToken.FIELD_NAME) ){
                    Contact cont;
                    if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'Id')) {
                        // Get the value.
                        parser.nextToken();
                        // Compute the grand total price for all invoices.
                        string sId= parser.getText();
                        cont=new Contact();
                        cont.Id=sId;
                        system.debug('Id@@@' + sId);
                        
                        parser.nextToken();
                        if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && 
                            (parser.getText() == 'Name')) {
                                // Get the value.
                                parser.nextToken();
                                // Compute the grand total price for all invoices.
                                string sName= parser.getText();
                                cont.LastName=sName;
                                system.debug('Name@@@' + sName );
                            }
                        
                        //Email
                        parser.nextToken();
                        if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && 
                            (parser.getText() == 'Email')) {
                                // Get the value.
                                parser.nextToken();
                                // Compute the grand total price for all invoices.
                                string sEmail= parser.getText();
                                cont.Email=sEmail;
                                system.debug('Email@@@' + sEmail);
                            }
                        
                        
                    }
                    contList.add(cont); 
                }
                
                
                
                contList.remove(null);
                
            }
            LstContact.AddAll(contList);
            system.debug('ContList@@@@'+Json.serialize(LstContact));
            
            
            
            
        }
        return LstContact;
    }
    
    
}