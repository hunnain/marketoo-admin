export const generateUrl = (data = {}) => {
  console.log(data);

  let url = '';
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      url = url + `${key}=${data[key]}&`;
    }
  });
  console.log(url);

  return url;
};
