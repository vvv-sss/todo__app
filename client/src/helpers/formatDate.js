export const formatDate = (dateString) => {

    if (dateString) {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } else {
        return "Invalid Date";
    }

}