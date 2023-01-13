

const validEmail = (email) => {
  return email.includes("@") &&
    (email.length - email.lastIndexOf(".") <= 4 ||
      email.length - email.lastIndexOf(".") > 2)
    ? Alert("Email adresiniz doğru.")
    : Alert("Email adresiniz yanlış, tekrar deneyiniz.");
};

console.log(validEmail("asd@sjdf.kgrftghlk.co"));
