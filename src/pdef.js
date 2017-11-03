export const postdef = fn => ({
  where: argsObject => fn(argsObject),
});

export const predef = argsObject => ({
  in: fn => fn(argsObject),
});
