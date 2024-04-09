import { render } from "@testing-library/react";
import GifItem from "../../components/GifItem";
import { expect, describe, test } from "@jest/globals";

describe('GifItem tests', () => {

    const title = 'Reaper of souls';
    const url = 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2014/09/2556601-0980017126-diablo.jpeg?fit=1920%2C1080&quality=50&strip=all&ssl=1';

    test('should do match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

});