export const deleteKeyFromObj = (obj, keyToDelete) =>
    Object.fromEntries(Object.entries(obj).filter(([key, value]) => key !== keyToDelete));
