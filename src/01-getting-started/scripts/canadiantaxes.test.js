import canadianTaxes from './canadiantaxes';

test("Test canadian taxes calculator", () => {
    expect(canadianTaxes.calculateTaxes(1)).toBe(0.15);
    expect(canadianTaxes.calculateTaxes(2)).toBe(0.30);
    expect(canadianTaxes.calculateTaxes(50000)).toBe(7630.35);
    // expect(canadianTaxes.calculateTaxes(250000)).toBe(61796.26);
});