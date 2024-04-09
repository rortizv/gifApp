import { getGifs } from "../../helpers/getGifs";
import { expect, describe, test } from "@jest/globals";

describe('getGifs tests', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('Reaper of souls');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs.length).toBe(10);
    });

    test('should return 0 elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});