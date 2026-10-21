
function assessGrade(score) {
    if (score < 0 || score > 100 || typeof score !== "number") {
        return "Invalid score";
    }

    if (score >= 95) {
        return "Excellent";
    } else if (score >= 85) {
        return "Very Good";
    } else if (score >= 75) {
        return "Passing";
    } else {
        return "Failing";
    }
}

// Assumption: 50% midterm + 50% final term.
// Replace this formula if your syllabus specifies another one.
function computeFinalGrade(midterm, finalTerm) {
    if (
        typeof midterm !== "number" ||
        typeof finalTerm !== "number" ||
        midterm < 0 || midterm > 100 ||
        finalTerm < 0 || finalTerm > 100
    ) {
        return "Invalid score";
    }

    const finalGrade = (midterm * 0.5) + (finalTerm * 0.5);
    return Number(finalGrade.toFixed(2));
}

// Boundary tests
const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120];

console.log("=== GRADE ASSESSOR ===");

for (const score of tests) {
    console.log(`Score ${score} -> ${assessGrade(score)}`);
}

console.log("\n=== FINAL GRADE ===");
console.log("Midterm 80, Final Term 90 ->",
    computeFinalGrade(80, 90));
console.log("Midterm 70, Final Term 85 ->",
    computeFinalGrade(70, 85));
console.log("Invalid scores ->",
    computeFinalGrade(110, 85));
