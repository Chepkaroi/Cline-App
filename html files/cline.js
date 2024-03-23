const container = document.getElementById( "container" );
const register = document.getElementById("register");
const cline = document.getElementById( 'cline' ) ;
const login= document.getElementById("login")

function openContainer() {
    container.style.display= "block";
    cline.style.display= "none";
}

function openSignup(){
    container.style.display="block"
    register.style.display= "block";
    login.style.display= "none";
    cline.style.display= "none";
}