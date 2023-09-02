function fibRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibRec(n - 1) + fibRec(n - 2);
  }
}

const num = 5;

for (let i = 0; i < num; i++) {
  console.log(fibRec(i));
}
