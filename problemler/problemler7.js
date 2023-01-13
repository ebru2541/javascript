
const validEmail = (email) => {
  return email.includes && email.endsWith(".com") && email.length - email.lastIndexOf(".")
    ? true
    : false;
};

console.log(validEmail("asd@sjdf.kgrftghlk.com"));

