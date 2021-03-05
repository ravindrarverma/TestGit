({
    doInit : function(component, event, helper){
        var Action =component.get("c.userDetails");
        Action.setParams({
        });
        Action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && (state === "SUCCESS" || state === "DRAFT")){
                var userData = response.getReturnValue();
                console.log("userData:", userData);
                component.set("v.userData",userData);   
            }else if(state ==="ERROR"){
                console.log(response.getError());
            }
        });
        $A.enqueueAction(Action);
    }
})