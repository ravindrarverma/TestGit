Trigger IntegrationContact on Contact (after insert) {
    for(Contact a:Trigger.new){
        SendAccountUsingRESTAPI.callgetContact('0032w000003fOKRAA2');
    }
}