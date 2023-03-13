const getDayOfWeek = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
}

// ________________________________________________________________________________________________________________________

describe('getDayOfWeek', () => {
    it('should return a string', () => {
        expect(typeof getDayOfWeek()).toBe('string');
    });

    it('should return the current day of the week', () => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayIndex = new Date().getDay();
        const expectedDay = daysOfWeek[currentDayIndex];
        expect(getDayOfWeek()).toEqual(expectedDay);
    });
});
