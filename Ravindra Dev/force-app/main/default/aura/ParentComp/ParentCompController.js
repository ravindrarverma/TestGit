({
    init : function(component, event, helper){
        var parentData =component.get("v.parentData");
        var Action =component.get("c.fetchAccount");
        Action.setParams({
        });
        Action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && (state === "SUCCESS" || state === "DRAFT")){
                var accData = response.getReturnValue();
               // console.log("accData:", accData);
                component.set("v.parentData",accData);   
            }else if(state ==="ERROR"){
                console.log(response.getError());
            }
        });
        $A.enqueueAction(Action);
    }
})