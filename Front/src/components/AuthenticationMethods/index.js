// import npm
import decode from 'jwt-decode';

// Component
export default class AuthenticationMethods {

  // set token
  setToken = token => window.localStorage.setItem('token', token);

  // get token
  getToken = () => window.localStorage.getItem('token');

  // Check if there is a token and if it is expired
  checkLogin = () => {
    // get token
    const token = this.getToken();
    // get a boolean : true => token is expired
    return decode(token).exp < Date.now() / 1000;
  };

  // delete token for logout
  deleteToken = () => {
    window.localStorage.removeItem('token');
  };
}
