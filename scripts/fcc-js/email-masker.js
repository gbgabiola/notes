const maskEmail = email => {
  const atIndex = email.indexOf('@');
  const name = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  const asterisks = '*'.repeat(name.length - 2);

  return `${firstChar}${asterisks}${lastChar}${domain}`;
};

// const email = [
//   "apple.pie@example.com",
//   "freecodecamp@example.com",
//   "info@test.dev",
//   "user@domain.org"
// ];
// email.map(email => console.log(maskEmail(email)));

const email = 'apple.pie@example.com';
console.log(maskEmail(email));
