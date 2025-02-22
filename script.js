document.getElementById("calculate-risk").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#data-form input[type='checkbox']");
    let totalRisk = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalRisk += parseInt(checkbox.value);
        }
    });

    let riskLevel;
    if (totalRisk <= 14) {
        riskLevel = "Low";
    } else if (totalRisk <= 25) {
        riskLevel = "Medium";
    } else {
        riskLevel = "High";
    }

    document.getElementById("risk-level").querySelector("span").textContent = riskLevel;

    let recommendations = "To secure your data, consider:";
    if (totalRisk > 25) {
        recommendations += " Avoid sharing highly sensitive data like your address.";
    } else if (totalRisk > 14) {
        recommendations += " Use privacy settings for medium-risk data like your number.";
    } else {
        recommendations += " Be cautious with low-risk data like your name.";
    }
    document.getElementById("recommendations").querySelector("span").textContent = recommendations;
});

