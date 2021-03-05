({
    openTab : function(component, event, helper,id_str) {
        
        if($A.util.hasClass(component.find(id_str), "slds-hide"))
            $A.util.removeClass(component.find(id_str), "slds-hide");
        
        if(id_str == 'tab1'){
             $A.util.addClass(component.find('btn1'), "activeTab");
            if(!$A.util.hasClass(component.find('tab2'), "slds-hide")){
                $A.util.addClass(component.find('tab2'), "slds-hide");
                $A.util.removeClass(component.find('tab2'), "activeTab");
            }
            if(!$A.util.hasClass(component.find('tab3'), "slds-hide")){
                $A.util.addClass(component.find('tab3'), "slds-hide");
                $A.util.removeClass(component.find('tab3'), "activeTab");
            }
        }
        
        if(id_str == 'tab2'){
            $A.util.addClass(component.find('btn2'), "activeTab");
            if(!$A.util.hasClass(component.find('tab1'), "slds-hide")){
                $A.util.addClass(component.find('tab1'), "slds-hide");
                $A.util.removeClass(component.find('btn1'), "activeTab");
            }
            if(!$A.util.hasClass(component.find('tab3'), "slds-hide")){
                $A.util.addClass(component.find('tab3'), "slds-hide");
                $A.util.removeClass(component.find('btn3'), "activeTab");
            }
        }
        
        if(id_str == 'tab3'){
            $A.util.addClass(component.find('btn3'), "activeTab");
            if(!$A.util.hasClass(component.find('tab2'), "slds-hide")){
                $A.util.addClass(component.find('tab2'), "slds-hide");
                $A.util.removeClass(component.find('btn2'), "activeTab");
            }
            if(!$A.util.hasClass(component.find('tab1'), "slds-hide")){
                $A.util.addClass(component.find('tab1'), "slds-hide");
                $A.util.removeClass(component.find('btn1'), "activeTab");
            }
        }
    },
})