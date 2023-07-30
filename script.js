
let refreshCaptcha = document.getElementById('refresh-img');
let showCaptcha = document.getElementById('c-box');
let captchaInput = document.getElementById('captcha-input');
let verifyCaptcha = document.getElementById('verify');
let verifyMessgae = document.querySelector('.p')

//*******************  Generate Random  String *********************************** 
function generateCaptcha() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captcha = '';
    for (var i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }
  //************** To Show Random Capctha in Box **********************

  let showCap;
  refreshCaptcha.addEventListener('click',()=>{
    console.log('hii');
       showCap = showCaptcha.innerText = generateCaptcha();
  });

  
// ***********  For Target Input Box Value ****************
captchaInput.addEventListener('keypress',(e)=>{
    let input = e.target.value;
})

// *********** Verify captcha ******************

verifyCaptcha.addEventListener('click',()=>{
    console.log('Clicked')
    let input = captchaInput.value; // Get the value from the input field
    if (showCap === input) {
        console.log('verify');
        verifyMessgae.style.display ='block';
        verifyMessgae.innerText = 'Captcha verified ✔️';
        verifyMessgae.style.color = 'green';
    } else {    
        verifyMessgae.innerText = 'Wrong captcha ❌';   
        verifyMessgae.style.color = 'red';
    }

});
