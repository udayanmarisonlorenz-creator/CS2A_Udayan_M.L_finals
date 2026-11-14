//!. Get user Details, Concatenate, Save to loacation
function saveUserDetails() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let user_name = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // let number = document.getElementById("number").value;
    
    //make sure that all blanks are filled
    //HTML TAg INPUT "required"
    //OR make our own remarks

    if(first_name === "" || last_name === "" || address ==="" ||
        user_name === "" || email === "" || password === ""
    ) {
        document.getElementById("regMessage").innerHTML
        = "<h1 style='color:red'>Please Complete Details</h1>";
        return;
    };
    
    

    //String Concatanate all Details
    let userDetails = first_name + " | " + last_name + " | "
                      address + " | " + user_name + " | " +
                      email + " | " + password;

    //Save to localStorage (to store setItem/ to retieve getItem)
    localStorage.setElement("userRecord", userDetails);

    document.getElementById("regMessage").innerHTML =
        "<h3 style='color:green'></h3>";

    alert(localStorage.getItem("userRecord"));  
}
