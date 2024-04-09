import { render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";
import { describe, test } from 'jest';

describe('AddCategory tests', () => {
    test('should change input value', () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        screen.debug();
    });
});