export const useState = initialValue => {
  let _value = initialValue;
  const state = () => _value;

  const setState = newValue => {
    _value = newValue;
  };

  return [state, setState];
};
