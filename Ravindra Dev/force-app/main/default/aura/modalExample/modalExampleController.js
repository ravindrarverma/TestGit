({
    doinit : function(component, event, helper) {
        var action = component.get('c.fetchAcc');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var allValues = response.getReturnValue();
                console.log("allValues--->>> " + allValues);
                component.set('v.mydata', allValues);
            }
            else if(state === "ERROR") {
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: " + errors[0].message);
                    }
                }
                else{
                    console.log("Unknown Error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    showPopup :function(component, event, helper){  
        var ctarget = event.currentTarget;
        var cmpTarget = component.find('Modalbox');
        //var cmpBack = component.find('Modalbackdrop');
        //$A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.removeClass(cmpTarget, 'slds-hide'); 
    },
    
    Edit : function(component, event, helper) {
         var ctarget = event.currentTarget;
        var id = ctarget.dataset.accid;
        window.open('/lightning/r/Account/' + id +'/view' ,'_self');
    },
    deletePopupModal : function(component, event, helper){
        var cmpTarget1 = component.find('Modalbox');
        $A.util.addClass(cmpTarget1, 'slds-hide');
        debugger;
        var ctarget = event.currentTarget;
        var name =ctarget.dataset.name;
        var aid =ctarget.dataset.aid;
        component.set('v.accName',name);
        component.set('v.aid',aid);
        var cmpTarget = component.find('ModalDelete');
        $A.util.removeClass(cmpTarget, 'slds-hide'); 
    },
    closePopupModal : function(component, event, helper){
        var cmpTarget = component.find('Modalbox');
        //var cmpBack = component.find('Modalbackdrop');
        //$A.util.addClass(cmpTarget, 'slds-fade-in-open');
        //$A.util.addClass(cmpBack, 'slds-backdrop--open'); 
        $A.util.addClass(cmpTarget, 'slds-hide');
    },
    closeDeletePopupModal: function(component, event, helper){
        var cmpTarget = component.find('ModalDelete');
        $A.util.addClass(cmpTarget, 'slds-hide'); 
        var cmpTarget1 = component.find('Modalbox');
        $A.util.removeClass(cmpTarget1, 'slds-hide'); 
    },
    deleteAccount : function(component, event, helper) {
        debugger;
        var aid = component.get('v.aid');
        var action = component.get('c.deleteAcc');
        action.setParams({
            "strId" :  aid
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var allValues = response.getReturnValue();
                console.log("allValues--->>> " + allValues);
                var cmpTarget = component.find('ModalDelete');
                $A.util.addClass(cmpTarget, 'slds-hide'); 
            }
            else if(state === "ERROR") {
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: " + errors[0].message);
                    }
                }
                else{
                    console.log("Unknown Error");
                }
            }
        });
        $A.enqueueAction(action);
    },
})