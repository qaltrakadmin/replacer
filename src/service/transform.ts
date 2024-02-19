/**
 * Replaces all value occurrences of 'dog' with 'cat' in the given object
 * but not any strings containing dog.
 * @param input
 * @returns the object with all references of the value 'dog' replaced with 'cat'
 */
export const transform = (input: { [key: string]: any }): any => {
  if (typeof input === 'object') {
    Object.keys(input).forEach((key) => {
      const value = input[key];
      if (value === 'dog') {
        input[key] = 'cat';
      } else if (typeof value === 'object') {
        transform(value);
      }
    });
  }
  return input;
};
