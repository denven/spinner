const chars = ["|", "/", "—", "\\"];

for (var i = 0, j = 0; i < 10 * chars.length; i++) { //print 10 cycles
  setTimeout(() => { process.stdout.write("\r" + chars[j++ % 4]);}, 100 * (i + 1));
}
