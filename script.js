$("#Registerform").validate({
    
              
    rules: {
        "full-name" :{
             required: true,
             minlength: 3,
             maxlength:50,
             
         },

         "email-address":{
            required: true,
            
         },

         "Phone Number":{
            required:true,
            minlength:10,
            maxlength:14,
            Number:true,
         },
         "age":{
            min:18,
            max:120,
         },
         "gender":{
            required:true,
            minlength:4,
            maxlength:15,
            Number:true,

         },
         "address":{
            maxlength:50,
         }

      
         
      },
      messages: {
        "full-name": {
             required: "Name field is required",
             minlength: "this field must contain at least {0} characters",
             
         },
         "Phone Number":{
            required: "Mobile number is required",
            minlength: " Please enter minimum 10 numbers",
         },
         "age":{
            min:"Age - should be in between of 18 and 120",
            max:"Age - should be in between of 18 and 120",
         },
         "gender":{
            required:"Please enter your gender",
            minlength:"this filed must contain at least {0} character",
            maxlength:"Gender must not be greater than 15 characters long.",
         },
         "address":{
            maxlength:"Address must not be greater than 15 characters long",
         }



      }
});
    
   