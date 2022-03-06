interface ISleep {
  cb: () => void;
  time: number;
}

export function sleep({ cb, time }: ISleep) {
  const timeout = setTimeout(() => {
    cb();
    clearTimeout(timeout);
  }, time);
}
