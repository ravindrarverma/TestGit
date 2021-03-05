({
    methodAction : function(component, event) {
        //To get method parameters
        var para = event.getParam('arguments');
        if (para) {
            var num1 = para.parameter1;
            var str2 = para.parameter2;
            var obj3 = para.parameter3;
            alert(str2+ "---> " +num1);
            
        }
    }
})