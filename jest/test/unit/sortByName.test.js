const sorting = require('../../app');

const config = {
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
    ],
};

module.exports = config;

describe('Books names test suit', () => {
    test('Books names should be sorted in ascending order', () => {
        const expected = sorting.sortByName([
            'Гарри Поттер',
            'Властелин Колец',
            'Волшебник изумрудного города',
        ]);
        const actual = [
            'Властелин Колец',
            'Волшебник изумрудного города',
            'Гарри Поттер',
        ];
        expect(expected).toEqual(actual);
    });
    test('Books names should be sorted in ascending order', () => {
        const expected = sorting.sortByName([
            'Гарри Поттер',
            'Гарри Поттер',
            'Волшебник изумрудного города',
        ]);
        const actual = [
            'Волшебник изумрудного города',
            'Гарри Поттер',
            'Гарри Поттер',
        ];
        expect(expected).toEqual(actual);
    });
});
