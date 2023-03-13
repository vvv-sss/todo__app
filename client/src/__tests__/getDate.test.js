const getDate = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
}

// ________________________________________________________________________________________________________________________

describe('getDate', () => {
    it('should return the current date in the expected format', () => {
        const dateRegex = /^[A-Z][a-z]{2} \d{1,2}, \d{4}$/; // regex to match "MMM D, YYYY" format
        expect(getDate()).toMatch(dateRegex);
    });

    it('should return a string', () => {
        expect(typeof getDate()).toBe('string');
    });
});