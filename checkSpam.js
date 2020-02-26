function checkSpam(mailSubject) {
  if (
    mailSubject.toLowerCase().includes("xxx") ||
    mailSubject.toLowerCase().includes("viagra")
  ) {
    return true;
  }
  return false;
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xXxXx"));
console.log(checkSpam("innocent rabbit"));
