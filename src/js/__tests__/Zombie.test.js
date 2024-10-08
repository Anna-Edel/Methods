/* eslint-disable no-undef */
import Zombie from '../class/Zombie';

test("testing Zombie", () => {
    const result = new Zombie('zombie');
    const ans = {
        name: 'zombie',
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(result).toEqual(ans);
});
