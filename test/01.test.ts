import Day1A from '../src/01/Day1A';
import Day1B from '../src/01/Day1B';
import Day2A from '../src/02/Day2A';
import Day2B from '../src/02/Day2B';

test('day 1a sample', () => {
        expect((new Day1A()).run()).toBe(514579);
});

test('day 1b sample', () => {
        expect((new Day1B()).run()).toBe(241861950);
});

test('day 2a sample', () => {
        expect((new Day2A()).run()).toBe(2);
});

test('day 2b sample', () => {
        expect((new Day2B()).run()).toBe(1);
});
