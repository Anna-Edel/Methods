/* eslint-disable no-undef */
import Daemon from '../class/Daemon';

test("testing Daemon", () => {
    const result = new Daemon('daemon');
    const ans = {
        name: 'daemon',
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(result).toEqual(ans);
});
