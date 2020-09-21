export const formatDOB = (dob) =>
    dob.date.slice(5, 10).split("-").join("/") + "/" + dob.date.slice(0, 4);