const generateSubtaskID = (array) => {
    let id;

    if (array.length === 0) {
        return id = 1;
    }

    if (array.length > 0) {
        const arrayOfIDs = array.reduce((a, subtask) => [...a, subtask.id], []);
        const arraySorted = arrayOfIDs.sort((a, b) => a - b);
        for (let i = 1; i <= arraySorted.length + 1; i++) {
            if (arraySorted.indexOf(i) === -1) {
                return id = i;
            }
        }
    }
}

// ________________________________________________________________________________________________________________________

describe('generateSubtaskID', () => {
    it('should return 1 when array is empty', () => {
        expect(generateSubtaskID([])).toEqual(1);
    });

    it('should return the next available ID when array is not empty', () => {
        const array = [      
            { id: 1, name: 'Subtask 1' },      
            { id: 3, name: 'Subtask 3' },      
            { id: 5, name: 'Subtask 5' },    
        ];
        expect(generateSubtaskID(array)).toEqual(2);
    });

    it('should return the next available ID when array is not empty and contains IDs with gaps', () => {
        const array = [      
            { id: 2, name: 'Subtask 2' },      
            { id: 4, name: 'Subtask 4' },      
            { id: 5, name: 'Subtask 5' },    
        ];
        expect(generateSubtaskID(array)).toEqual(1);
    });

    it('should return the next available ID when array is not empty and contains IDs starting from 1', () => {
        const array = [      
            { id: 1, name: 'Subtask 1' },      
            { id: 2, name: 'Subtask 2' },      
            { id: 3, name: 'Subtask 3' },    
        ];
        expect(generateSubtaskID(array)).toEqual(4);
    });
});
