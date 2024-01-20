const hairstyles = [
    {
        style: "ponytail",
        bestWith: "any",
        cost: "free",
        region: "Ancient Greece",
        tools: ["brush" , "scrungie"]
    },
    {
        style: "afro",
        bestWith: "4a-d",
        cost: "low",
        region: "Tribal Africa",
        tools: ["pick" , "leave-in conditioner"]
    },
    {
        style: "braids",
        bestWith: "any",
        cost: "high",
        region: "Africa",
        tools: ["gel" , "comb"]
    },
];
const hairColors = [
    {
        color: "blonde",
        rarity: "2%",
        shades: 50
    },
    {
        color: "brown",
        rarity: "11%",
        shades: 26
    },
    {
        color: "black",
        rarity: "70%",
        shades: 134
    }
];
const hairCuts = [
    {
        cut:"blunt bob",
        longevity: "6 weeks",
        symbolism: "feminism and individuality",
        hairtype: "any"
    },
    {
        cut:"pixie cut",
        longevity: "5 weeks",
        symbolism: "nonconformity and empowerment",
        hairtype: "any"
    },
    {
        cut:"finger waves",
        longevity: "5 days",
        symbolism: "Sophisticated",
        hairtype: "any"
    }
];

function filterHairstyles(queryParams) {
    const filteredHairstyles = hairstyles.filter((hairstyle) => {
        return (
            (!queryParams.bestWith || hairstyle.bestWith.toLowerCase() === queryParams.bestWith.toLowerCase()) &&
            (!queryParams.cost || hairstyle.cost.toLowerCase() === queryParams.cost.toLowerCase())
        );
    });
    return filterHairstyles;
}

module.exports = {hairstyles, hairColors, hairCuts, filterHairstyles};

