({
    doSearch : function(component, event, helper){
        var accountName =component.get("v.accountName");
        var industry =component.get("v.industry");
        var selectRating =component.get("v.rtng");
        var Action =component.get("c.searchData");
        Action.setParams({
            "AccountName" : accountName,
            "Industry" : industry,
            "Rating"  : selectRating
        });
        Action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && (state === "SUCCESS" || state === "DRAFT")){
                var accData = response.getReturnValue();
                console.log("accData:", accData);
                component.set("v.recordList",accData);   
            }else if(state ==="ERROR"){
                console.log(response.getError());
            }
        });
        $A.enqueueAction(Action);
    }
})