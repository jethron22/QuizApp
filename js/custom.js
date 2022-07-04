$("#loginPage").validate({
    rules:{
        name:{
            minlength: 2
        }
       },
       messages: "Ce champ est requis",
       minlength: "Au moins 2 caractères "

    submitHandler: function(form) {
      form.submit();
    }
   })