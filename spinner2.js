const chars = ["|", "/", "—", "\\"];

for (let i = 0; i < 10 * chars.length; i++) { //print 10 cycles
  setTimeout(() => { process.stdout.write("\r" + chars[i % 4]);}, 100 * (i + 1));
}
