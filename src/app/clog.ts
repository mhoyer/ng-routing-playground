export function clog(msg, hue = 0) {
  const logStyle = `color: hsl(${hue} 70% 30%); background: hsl(${hue} 100% 97%);`;
  console.log(`  ➡ %c${msg}`, logStyle);
}
