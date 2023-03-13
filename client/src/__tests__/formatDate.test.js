const formatDate = (dateString) => {

    if (dateString) {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } else {
        return "Invalid Date";
    }

}

// ________________________________________________________________________________________________________________________

describe('formatDate', () => {
    test('should format date correctly', () => {
        const formattedDate = formatDate('2022-02-22T12:00:00Z');
        expect(formattedDate).toEqual('Feb 22, 2022');
    });

    test('should handle invalid date string', () => {
        const formattedDate = formatDate('not-a-date');
        expect(formattedDate).toEqual('Invalid Date');
    });

    test('should handle null input', () => {
        const formattedDate = formatDate(null);
        expect(formattedDate).toEqual('Invalid Date');
    });

    test('should handle undefined input', () => {
        const formattedDate = formatDate(undefined);
        expect(formattedDate).toEqual('Invalid Date');
    });

    test('should handle empty string input', () => {
        const formattedDate = formatDate('');
        expect(formattedDate).toEqual('Invalid Date');
    });
});


