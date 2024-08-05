import jwtDecode from 'jwt-decode';

function saveToken(token) {
  localStorage.setItem('token', token);
}

function getToken() {
  try {
    return jwtDecode(localStorage.getItem('access_token'));
  } catch (error) {
    console.log(error);
    return null;
  }
}




function destroyToken() {
  localStorage.removeItem('access_token');
}

export default { saveToken, destroyToken, getToken };
