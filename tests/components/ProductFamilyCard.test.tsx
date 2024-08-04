import ProductFamilyCard from '../../src/components/ProductFamilyCard';
import mockedProduct from './mockedProduct.json';
import { describe, it, expect } from 'vitest'
import {render, screen} from "@testing-library/react";

describe('ProductFamilyCard', () => {

    it('renders without crashing', () => {
        render(<ProductFamilyCard product={mockedProduct} />);
    });

    it('displays the product name when hovered', () => {
        render(<ProductFamilyCard product={mockedProduct} />);
        const productName = screen.findByDisplayValue("Galaxy Tab S9 11 inch 5G");
        expect(productName).toBeDefined();
    });

    it('displays the product image', () => {
        render(<ProductFamilyCard product={mockedProduct} />);
        const productImage = screen.getAllByAltText("Galaxy Tab S9 11 inch 5G")[0];
        expect(productImage.getAttribute('src'))
            .toBe("//images.samsung.com/is/image/samsung/p6pim/nl/sm-x716bzaaeub/gallery/nl-galaxy-tab-s9-5g-x716-sm-x716bzaaeub-thumb-537848593");
    });
});