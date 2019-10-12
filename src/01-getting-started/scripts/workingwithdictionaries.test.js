import workingWithDictionaries from './workingwithdictionaries';

test("test object lookup", () => {
    expect(workingWithDictionaries.lookup(0)).toBe("Please enter a valid province code");
    expect(workingWithDictionaries.lookup("hello")).toBe("Please enter a valid province code");
    expect(workingWithDictionaries.lookup("ab")).toBe("Alberta");
    expect(workingWithDictionaries.lookup("bc")).toBe("British Columbia");
    expect(workingWithDictionaries.lookup("mb")).toBe("Manitoba");
    expect(workingWithDictionaries.lookup("nb")).toBe("New Brunswick");
    expect(workingWithDictionaries.lookup("nl")).toBe("Newfoundland and Labrador");
    expect(workingWithDictionaries.lookup("ns")).toBe("Nova Scotia");
    expect(workingWithDictionaries.lookup("on")).toBe("Ontario");
    expect(workingWithDictionaries.lookup("pe")).toBe("Prince Edward Island");
    expect(workingWithDictionaries.lookup("qc")).toBe("Quebec");
    expect(workingWithDictionaries.lookup("sk")).toBe("Saskatchewan");
});