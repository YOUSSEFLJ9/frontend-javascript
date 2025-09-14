// Add export to both interfaces and functions
export interface MajorCredits {
    credits: number;
    _brand: "major";
}

export interface MinorCredits {
    credits: number;
    _brand: "minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "major"
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "minor"
    };
}

// Test the functions
console.log(sumMajorCredits({ credits: 13400, _brand: "major" }, { credits: 446, _brand: "major" }));
console.log(sumMinorCredits({ credits: 334, _brand: "minor" }, { credits: 456, _brand: "minor" }));
