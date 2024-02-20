/**
 * Replaces all value occurrences of 'dog' with 'cat' in the given object
 * but not any strings containing dog.
 * @param input
 * @returns the object with all references of the value 'dog' replaced with 'cat'
 */
export const transform = (input: { [key: string]: any }): any => {
  if (Array.isArray(input)) {
    return input.map(transform);
  }

  if (typeof input === 'object') {
    const transformedInput = {};
    Object.keys(input).forEach((key) => {
      const value = input[key];
      transformedInput[key] = transform(value);
    });
    return transformedInput;
  }

  if (typeof input === 'string' && input === 'dog') {
    return 'cat';
  }

  return input;
};
