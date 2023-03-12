export const getDayOfWeek = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
}