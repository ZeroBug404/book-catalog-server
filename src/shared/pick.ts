const pick = <T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Partial<T> => {
    const finalObj: Partial<T> = {};
  
    // ['page', 'limit', 'sortBy', 'sortOrder']
    for (const key of keys) {
      if (obj && obj.hasOwnProperty.call(obj, key)) {
        finalObj[key] = obj[key];
      }
    }
  
    return finalObj;
  };
  
  export default pick;