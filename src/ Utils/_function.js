export const isEmptyString = (str) => {
    return (!str || 0 === str.length);
}

export const handleChange = (e, setValue) => {
    const { name ,value } = e.target
   
    setValue(value, name)
}