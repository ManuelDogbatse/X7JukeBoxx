function secondsToStr(secs, duration) {
  let arr = [0, 0, secs];
  while (arr[2] >= 60) {
    if (arr[2] >= 60) {
      arr[1]++;
      arr[2] -= 60;
    }
    if (arr[1] >= 60) {
      arr[0]++;
      arr[1] = 0;
    }
  }

  if (duration != null) {
    if (arr[0] === 0 && duration < 3600) {
      arr = [arr[1], arr[2]];
    }
  } else {
    if (arr[0] === 0) {
      arr = [arr[1], arr[2]];
    }
  }

  const newStrArr = arr.map((x) => x.toString().padStart(2, "0"));
  return newStrArr.join(":");
}

export { secondsToStr };
