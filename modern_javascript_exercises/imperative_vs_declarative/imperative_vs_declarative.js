// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {

  const longPasswords = [];
  
  passwords.forEach(password => password.length >= 9 ? longPasswords.push(password) : longPasswords);

  return longPasswords;
}
