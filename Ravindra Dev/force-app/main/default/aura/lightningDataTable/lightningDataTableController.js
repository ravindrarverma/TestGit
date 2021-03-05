({
    fetchData : function(component, event, helper) {
        component.set('v.columnData', [
            {label: 'Title', fieldName: 'Title', type: 'text'},
            {label: 'Contact Name', fieldName: 'Name', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Email', fieldName: 'Email', type: 'Email '},
            {label: 'Fax', fieldName: 'Fax', type: 'Fax'}
            
        ]);
        var action = component.get("c.fetchContactData");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.conList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);	
    }
})