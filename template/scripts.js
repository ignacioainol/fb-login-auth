let loginWithFacebook = _ => _

function fbSDKLoaded(){
    FB.getLoginStatus(response => {
        if(response.status == "unknown" || response.status == "not_autorized"){
            loginWithFacebook = _ => {
                FB.login(response => {
                    console.log(response);
                });
            } 
        }
    });
}