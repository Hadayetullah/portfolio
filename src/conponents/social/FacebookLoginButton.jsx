import { useEffect } from 'react';

const FacebookLoginButton = () => {
  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
    };

    // Inject the Facebook SDK script
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleLogin = () => {
    window.FB.login(
      response => {
        if (response.authResponse) {
          // Send access token to backend
        //   onLoginSuccess(response.authResponse.accessToken);
        console.log("Response: ", response);
        } else {
          console.error('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'email,public_profile' }
    );
  };

  return (
    <button onClick={(e) => {
        e.preventDefault(); // ✅ Prevent default navigation
        handleLogin();
      }} style={{width: "20px", height: "20px", border: "none", background: "none", cursor: "pointer"}}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20"
            height="20"
            style={{ transform: "scale(1.4)" }}
            fill="#1877F2"
        >
            <path d="M24 4C12.95 4 4 12.95 4 24c0 9.9 7.25 18.07 16.75 19.73v-13.94h-5.05v-5.79h5.05v-4.4c0-5 2.98-7.78 7.55-7.78 2.19 0 4.48.39 4.48.39v4.92h-2.52c-2.49 0-3.27 1.55-3.27 3.14v3.73h5.56l-.89 5.79h-4.67v13.94C36.75 42.07 44 33.9 44 24c0-11.05-8.95-20-20-20z" />
        </svg>

    </button>);
};

export default FacebookLoginButton;
