export const makePagePath = (pathname: string, to: string) =>
  [to, ...pathname.split('/~').slice(1)].join('/~');

export const makeModalPath = (pathname: string, to: string) =>
  [...pathname.split('/~').filter((item) => item !== to), to].join('/~');