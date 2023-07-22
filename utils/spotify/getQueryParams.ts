type Query = {
  name: string;
  value: string | number | undefined;
};

export function getQueryParams(params: Query[]) {
  let query: Query[] = [];

  params.forEach((param) => {
    if (param.value) {
      query.push(param);
    }
  });

  const queryParams = query
    .map((param) => {
      return `${param.name}=${param.value}`;
    })
    .join("&");

  return queryParams;
}
