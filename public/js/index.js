function insta()
{
    window.open('https://nana-insta-downloader.netlify.app/', '_blank');
}

function analog_clock()
{
    window.open('https://clock-simple.netlify.app/', '_blank');
}

function digital_clock()
{
    window.open('https://mordern-clock.netlify.app/', '_blank');
}

function color_code()
{
    window.open('https://random-color-code-generator.netlify.app/', '_blank');
}

var data_js = {
    "access_token": "5u9c9i5gb28ndri4t36yfto9"
};

function onload_sendEmail()
{
    var request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            js_onSuccess();
        } else
        if(request.readyState == 4)
        {
            js_onError(request.response);
        }
    };

    var subject = 'Home Page Opened Alert';
    var message = 'Someone has opened the home page without your concent';

    data_js['subject'] = subject;
    data_js['text'] = message;

    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

function js_onSuccess() {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    console.log('success');
}

function js_onError(error) {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    console.log('error');
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}
