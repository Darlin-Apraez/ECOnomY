import AsyncStorage from "@react-native-async-storage/async-storage";

//Funcion guardar contra
async function savePassword(data) {
  try {
    console.log(await AsyncStorage.setItem("@storage_Pass", data));
  } catch (e) {
    // saving error
  }
}

//Funcion guardar contra
async function readPassword() {
  //obteniendo contra
  try {
    const password = await AsyncStorage.getItem("@storage_Pass");
    return password;
  } catch (e) {
    // saving error
  }
}
//Funcion guardar nombre de usuario
async function saveUser(data) {
  try {
    console.log(await AsyncStorage.setItem("@storage_User", data));
  } catch (e) {
    // saving error
  }
}

//Funcion leer nombre de usuario
async function readUser() {
  try {
    console.log(await AsyncStorage.getItem("@storage_User"));
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_User");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export { savePassword, readPassword, saveUser, readUser, getData };
