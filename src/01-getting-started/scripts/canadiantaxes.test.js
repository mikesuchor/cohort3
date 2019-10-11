import canadianTaxes from './canadiantaxes';

test("Test canadian taxes calculator", () => {
    expect(canadianTaxes.calculateTaxes(1)).toBe(0.15);
    expect(canadianTaxes.calculateTaxes(2)).toBe(0.30);
    expect(canadianTaxes.calculateTaxes(47630)).toBe(7144.5);
    expect(canadianTaxes.calculateTaxes(47631)).toBe(7144.71);
    expect(canadianTaxes.calculateTaxes(95259)).toBe(16908.45);
    expect(canadianTaxes.calculateTaxes(95260)).toBe(16908.71);
    expect(canadianTaxes.calculateTaxes(147667)).toBe(30534.53);
    expect(canadianTaxes.calculateTaxes(147668)).toBe(30534.82);
    expect(canadianTaxes.calculateTaxes(250000)).toBe(61796.26);
});