<!--suppress XmlDuplicatedId -->
<html lang="en">
<head>
<meta name="description" content="Novoline Utility Mod Website">
<meta name="keywords" content="novoline, utility mod, novoline client">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="twitter:card" content="summary_large_image">
<link rel="apple-touch-icon" sizes="180x180" href="static/icon/apple-touch-icon-ae48d951ac79ace029bfe1b2da788d41.png">
<link rel="icon" type="image/png" sizes="32x32" href="static/icon/favicon-32x32-c3b5c691ebb1cf8e12e98bc8f7ee7e24.png">
<link rel="icon" type="image/png" sizes="16x16" href="static/icon/favicon-16x16-3b017cee9ffd54b60f365baf6e1649b3.png">
<link rel="manifest" href="static/icon/site-053100cb84a50d2ae7f5492f7dd7f25e.webmanifest">
<link rel="stylesheet" href="static/css/authentication-b47095276f1daac0fe9e7aa4c43ea8be.css">
<link rel="stylesheet" href="static/css/shared-498fd915829119c2f4f6904e2e5904e3.css">
<link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/vanillatoasts@1.4.0/vanillatoasts.min.css" onload="this.onload=null;this.rel='stylesheet'">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="static/js/common-45fc22203f51d3a54cb931ba5f2db836.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/vanillatoasts@1.4.0/vanillatoasts.min.js" crossorigin="anonymous"></script>
<script defer src="https://kit.fontawesome.com/f8fe63fb19.js" crossorigin="anonymous"></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-5HEPXW3GJX"></script>
<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5HEPXW3GJX');
        </script>
<title>Novoline Client - Login</title>
</head>
<script>
        window.CONFIG = {
            CLIENT_ID: "860999025700110379"
        };
    </script>
<body class="flex-column">
<div id="login-form" class="login-container flex-column">
<img id="logo" src="static/icon/apple-touch-icon-ae48d951ac79ace029bfe1b2da788d41.png" alt="Novoline Logo" load="async">
<hr noshade>
<span id="title" class="h-24">Login</span>
<div class="input-container flex-column">
<input id="email" type="email" placeholder="Email">
<input id="password" type="password" placeholder="Password">
</div>
<span id="login" class="button">Login
<img id="discord-login" class="small-button discord-login-button" src="static/images/discord-28174a34e77bb5e5310ced9f95cb480b.png" alt="Discord logo" load="async">
</span>
<div class="links flex-column">
<div class="flex-row">
<span id="go-back">Go back</span>&bull;
<a href="register">Register</a>&bull;
<a href="reset-password" id="reset-password">Forgot password?</a>
</div>
<span class="t-12 existing-notice">Existing user? Click the Discord icon</span>
</div>
</div>
<div style="display: none !important" id="totp-form" class="login-container flex-column">
<img id="logo" src="static/icon/apple-touch-icon-ae48d951ac79ace029bfe1b2da788d41.png" alt="Novoline Logo" load="async">
<hr noshade>
<span id="title" class="h-24">Two-factor authentication</span>
<span class="t-16">Enter the code from your authenticator app</span>
<div class="input-container flex-column">
<input id="otp" type="text" placeholder="000 000">
</div>
<span id="otp-continue" class="button">Continue</span>
<div class="links flex-row">
<span id="back-login">Go back to Login</span>
</div>
</div>
</body>
<script>
        let savedEmail, savedPassword;

        $("#discord-login").click(function(e) {
            e.stopImmediatePropagation();
            window.location = common.discordRedirect("/discord/handoff");
        });

        $("#login, #otp-continue").click((e) => loginClick($(e.target)));

        $("#email, #password").keypress((e) => {
            if(e.which === 13) $("#login").trigger("click");
        })
        
        $("#back-login").click(function() {
            common.fadeOutImportant($("#totp-form"), 150, () => $("#login-form").fadeIn(150));
        });

        $(() => {
            let searchParams = new URLSearchParams(window.location.search);

            if(searchParams.has("mesage")) {
                VanillaToasts.create({
                   text: "You have been logged out",
                   type: "info", timeout: 7500
                });
            }
        });

        let login = async (email, password, callback, otp) => {
            // Prevent users from using email addresses in lower-case because this will fail the validation!
            if(typeof email !== "undefined") email = email.toLowerCase();

            const credentials = {"email": email, "password": password};
            if(otp !== undefined) Object.assign(credentials, { "otp": otp });

            fetch(window.location.pathname, { 
                method: "POST",
                body: common.fetchParams(credentials),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                redirect: "follow"
            }).then(response => {
                if(!response.ok && !response.redirected) throw response;

                if(response.redirected) callback(true, response.url);
                else callback(true); 
            }).catch(function(response) {
                if(response.status === 401) {
                    response.json().then((json) => {
                        let code = json.code, message;

                        switch(code) {
                            case "invalid_credentials": message = "Invalid email or password"; break;
                            case "locked": message = json.message; break;
                            case "need_validation": handleNeedValidation(email, password); return;
                            case "invalid_otp": message = "Invalid two-factor code"; break;
                            default: message = `Unknown error: ${code}`;
                        }

                        callback(false, message);
                    });
                } else callback(false, "A network or server error has occurred");
            });
        };

        let loginClick = button => {
            let email = $("#email").val(), password = $("#password").val(), otp = $("#otp").val();
            if(!$("#totp-form").is(":visible")) otp = undefined;

            common.toggleSpin(button, "Logging in...");

            login(email, password, function(success, message) {
                common.toggleSpin(button);

                if(success) {
                    if(message !== undefined) window.location = message;
                    else window.location.reload();
                } else VanillaToasts.create({
                    title: "Authentication failed",
                    text: message,
                    type: "error",
                    timeout: 5000
                });
            }, otp);
        };

        let handleNeedValidation = (email, password) => {
            savedEmail = email, savedPassword = password;

            common.toggleSpin($("#login"));
            common.fadeOutImportant($("#login-form"), 150, function() {
                $("#totp-form").fadeIn(150);
            });
        };

        $("#go-back").click(() => {
            if(window.location.search === "") window.history.back();
            else location.href = "/";
        });
    </script>
</html>