({
     openTab : function(component, event, helper) {
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.value;
        helper.openTab(component, event, helper,id_str); 
    },
    dropDownChange : function(component, event, helper) {
        helper.openTab(component, event, helper,'tab1'); 
    }
})