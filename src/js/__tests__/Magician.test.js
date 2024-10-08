/* eslint-disable no-undef */
import Magician from '../class/Magician';

test("testing Magician", () => {
    const result = new Magician('magician');
    const ans = {
        name: 'magician',
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(result).toEqual(ans);
});
