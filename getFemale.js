const getFemale = (obj) => {
  const res = [];
  obj.forEach((el) => {
    let { friends: f } = el;
    if (Array.isArray(f)) {
      f.forEach((a) => {
        let { gender: g } = a;
        if (g === "female") res.push(a);
      });
    }

    if (!Array.isArray(f)) {
      let { gender: g } = f;
      if (g === "female") res.push(a);
    }
  });

  return res;
};
