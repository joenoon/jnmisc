export const refetchQueryNames = (...names: any[]) =>
  names
    .map(x => {
      if (x && x.definitions && x.definitions[0] && x.definitions[0].name && x.definitions[0].name.value) {
        return x.definitions[0].name.value;
      }
      return null;
    })
    .filter(x => x != null);