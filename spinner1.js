const chars = ["|", "/", "—", "\\"];

for (var i = 0; i < 10; i++) {
  let mutiple = 400 * i;
  chars.forEach((item, index) => {
    setTimeout(() => {
      process.stdout.write("\r" + item);
    }, mutiple + 100 * (index));
  });
}
