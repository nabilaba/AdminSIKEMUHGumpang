let api = "http://localhost:8000/api";
if (
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost"
) {
  api = "http://localhost:8000/api";
} else {
  api = `${window.location.origin}/api`;
}

const apiData = `${api}/data`;
const apiLogin = `${api}/auth/login`;
const apiRegister = `${api}/auth/register`;
const apiUser = `${api}/user`;

export { apiData, apiLogin, apiRegister, apiUser };

export default api;
