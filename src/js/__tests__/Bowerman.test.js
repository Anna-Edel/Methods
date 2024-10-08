/* eslint-disable no-undef */
import Bowerman from '../class/Bowerman';

test("testing Bowerman", () => {
    const result = new Bowerman('bowman');
    const ans = {
        name: 'bowman',
        type: "Bowerman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(result).toEqual(ans);
});
