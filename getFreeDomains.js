const getFreeEmailDomains = (emails, domains, result = {}) => {
  emails.forEach((el) => {
    let value = el.slice(el.indexOf("@") + 1);
    if (domains.includes(value)) {
      hasOwnProperty.call(result, value)
        ? (result[value] += 1)
        : (result[value] = 1);
    }
  });

  return result;
};

const email = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];

console.log(
  getFreeEmailDomains(email, ["gmail.com", "yandex.ru", "hotmail.com"])
);
