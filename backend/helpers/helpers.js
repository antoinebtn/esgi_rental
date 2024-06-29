export const success = (message, data) => {
    return { message, data }
};

export const getUniqueId = (cars) => {
    const carsIds = cars.map(car => car.id);
    const maxId = carsIds.reduce((a,b) => Math.max(a,b));
    const uniqueId = maxId + 1;
    return uniqueId;
}
