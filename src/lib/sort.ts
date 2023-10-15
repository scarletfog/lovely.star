export const sortByParams = <
  K extends string,
  T extends Record<K, string | number>,
>(
  items: T[],
  dateFieldName: K[],
) =>
  items.sort((a: T, b: T) => {
    return dateFieldName.reduce((currentValue, elem) => {
      if (currentValue === 0) {
        // not sorted yet
        const firstElem = a[elem];
        const secondElem = b[elem];

        if (typeof firstElem === "string" && typeof secondElem === "string") {
          return firstElem.localeCompare(secondElem);
        }

        if (typeof firstElem === "number" && typeof secondElem === "number") {
          return firstElem - secondElem;
        }
      }
      return currentValue;
    }, 0);
  });
