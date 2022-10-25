/*
      This portion of the function checks the Color field to make sure it
      is 3 characters in length and it checks the Quantity to make sure it
      is numeric and in a range of values from 1 to 12.
*/

      function validate() {

        var lastName = /^[a-zA-Z]/;
        var lname = document.getElementById('lcname').value;
        if(!lastName.test(name)){
        alert('Please enter your first name!');
        document.getElementById('lcname').focus();
        return false;
         }

        var firstName = /^[a-zA-Z]/;
        var cname = document.getElementById('cname').value;
        if(!firstName.test(name)){
        alert('Please enter your first name!');
        document.getElementById('cname').focus();
        return false;
      }
/*
         This portion of the function checks the Email Address to make sure
         it has an @ and a dot somewhere in the address.
*/
         var eaddr = document.ordForm.emailAddr.value;
         atSign = eaddr.indexOf("@");
         dotSign = eaddr.lastIndexOf(".");

         if (atSign < 1 || ( dotSign - atSign < 2 )) {
            alert("Error in email address format!")
            document.ordForm.emailAddr.focus() ;
            return false;
         }

         return( true );
      }
