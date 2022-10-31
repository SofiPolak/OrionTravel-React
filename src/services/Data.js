const API_HOST = "http://localhost:3001/admin";

export async function getCategorias() {
  try {
    const url = `${API_HOST}/expenses?group=category`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getMetodosPago() {
  try {
    const url = `${API_HOST}/expenses?group=paymentMethod`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getGastosAnio() {
  try {
    const url = `${API_HOST}/expenses?group=date&period=year`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getUsuariosAnio() {
  try {
    const url = `${API_HOST}/users?period=year`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getViajesAnio() {
  try {
    const url = `${API_HOST}/travels?period=year`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}