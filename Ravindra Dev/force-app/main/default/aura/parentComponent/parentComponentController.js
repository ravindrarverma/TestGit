({
	controllerCAll : function(component, event, helper) {
         var objCompB = component.find('id1');
        //calling child aura method with passing the parameter 
        objCompB.methodName();
    }
})