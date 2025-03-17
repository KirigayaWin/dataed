document.getElementById("calculate-risk").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#data-form input[type='checkbox']");
    let totalRisk = 0;
    let recommendations = "<ul>To secure your data, consider:";
    let detailedRecommendations = "<ul>To secure your data, consider:";
    let assessment = "<ul>Data Assessment:";
    let detailedAssessment = "<ul>Detailed Assessment:";

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalRisk += parseInt(checkbox.value);
            switch (checkbox.nextElementSibling.innerHTML.trim()) {
                case "Name":
                    recommendations += `
                        <li>Avoid using your full name on public platforms.</li>
                        <li>Be cautious when filling out online forms.</li>
                        <li>Ensure your name is not linked to sensitive personal details.</li>`;
                    detailedRecommendations += `
                        <li>Avoid using your full legal name on public platforms.</li>
                        <li>Use a first name or alias on social media and forums.</li>
                        <li>Be cautious when filling out online forms.</li>
                        <li>Ensure your name is not linked to sensitive information.</li>
                        <li>Check privacy settings on social media.</li>
                        <li>Use pseudonyms where possible.</li>`;
                    assessment += "<li>Your name is commonly shared online, but it can still be misused for fraud, impersonation, and unauthorized profiling. Be mindful of sharing it alongside other personal details.</li>";
                    detailedAssessment += "<li>Your name is one of the most commonly shared personal details online. While it may seem harmless, it can be used for fraud, impersonation, and unauthorized profiling. Cybercriminals and data brokers often collect names to link them with other exposed data, making it easier to track and identify you. Additionally, if your name appears in public databases or social media, it can be used for phishing attacks and social engineering scams. Be mindful of where and how you share your full name, especially on public forums and unsecured websites.</li>";
                    break;
                case "Email Address":
                    recommendations += `
                        <li>Use separate emails for work, personal use, and online registrations.</li>
                        <li>Enable two-factor authentication (2FA).</li>
                        <li>Be cautious of phishing emails.</li>`;
                    detailedRecommendations += `
                        <li>Use multiple email addresses for different purposes.</li>
                        <li>Enable two-factor authentication (2FA) on all important accounts.</li>
                        <li>Be cautious when receiving unsolicited emails.</li>
                        <li>Regularly check if your email has been leaked in data breaches.</li>
                        <li>Change your password immediately if necessary.</li>
                        <li>Use email filtering tools to block spam.</li>`;
                    assessment += "<li>Your email is a key identifier for online accounts and a frequent target for spam, phishing, and hacking attempts. According to Hoven (2019), cybercriminals use leaked emails to gain access to sensitive accounts.</li>";
                    detailedAssessment += "<li>Your email address is a key identifier used for communication, online registrations, and account logins. Unfortunately, it is also a primary target for spam, phishing, and hacking attempts. Data breaches frequently expose email addresses, allowing hackers to send fraudulent messages or reset passwords on linked accounts. If your email is leaked alongside other personal data, scammers can craft highly convincing phishing emails that trick you into revealing more sensitive information. Additionally, marketing companies often track emails to build consumer profiles and target ads. Limiting where you share your email and using unique addresses for different purposes can help reduce these risks.</li>";
                    break;
                case "Location":
                    recommendations += `
                        <li>Disable GPS tracking when not needed.</li>
                        <li>Avoid sharing real-time locations online.</li>
                        <li>Use a VPN to mask your IP.</li>`;
                    detailedRecommendations += `
                        <li>Disable GPS tracking on mobile apps.</li>
                        <li>Limit location-sharing settings on social media.</li>
                        <li>Avoid posting real-time location updates.</li>
                        <li>Use a delay or provide vague details instead of exact addresses.</li>
                        <li>Use a VPN to mask your IP address.</li>
                        <li>Regularly review app permissions for location access.</li>`;
                    assessment += "<li>Your location data can be used to track your movements, target you with location-based ads, or even put you at risk of stalking and security threats. Hoven (2019) highlights concerns about surveillance and tracking in the digital age.</li>";
                    detailedAssessment += "<li>Location data, whether in the form of GPS coordinates, home addresses, or location history, can be highly sensitive. This information can be used to track your movements, deliver targeted advertisements, or even expose you to stalking and security threats. Cybercriminals can exploit location data to determine when you are away from home, while advertisers use it to monitor shopping and travel habits. Additionally, law enforcement and government agencies can access location history through various apps and databases. Disabling unnecessary location tracking and being cautious about sharing your address online can help minimize these risks.</li>";
                    break;
                case "Telephone/Phone Number":
                    recommendations += `
                        <li>Avoid sharing your primary phone number publicly.</li>
                        <li>Use a secondary number for online registrations.</li>
                        <li>Enable SIM lock to prevent unauthorized access.</li>`;
                    detailedRecommendations += `
                        <li>Avoid sharing your primary phone number on public websites.</li>
                        <li>Use a secondary number or a VoIP service for online registrations.</li>
                        <li>Enable security features such as SIM card lock.</li>
                        <li>Enable two-factor authentication (2FA) to prevent SIM swapping attacks.</li>
                        <li>Regularly review phone number exposure on data breach sites.</li>
                        <li>Use call-blocking apps to reduce spam calls.</li>`;
                    assessment += "<li>Phone numbers are often exploited for spam, phishing scams, SIM swapping, and identity fraud. Criminals can use your number to bypass two-factor authentication (2FA) and take over accounts.</li>";
                    detailedAssessment += "<li>Your phone number is a direct link to your identity and can be exploited for scams, phishing, and SIM swapping attacks. Criminals can use it to impersonate you, intercept verification codes, or gain access to sensitive accounts. Telemarketers and data brokers frequently sell phone numbers, leading to an increase in spam calls and messages. In worst-case scenarios, fraudsters can perform SIM hijacking, transferring your number to another SIM card to bypass security measures and take over financial or social media accounts. Using alternative numbers or privacy-focused services can help protect your primary phone number from unwanted exposure.</li>";
                    break;
                case "Photos":  
                    recommendations += `
                        <li>Limit the public sharing of personal photos.</li>
                        <li>Disable automatic facial recognition on social media.</li>
                        <li>Remove metadata from images before uploading.</li>`;
                    detailedRecommendations += `
                        <li>Avoid uploading high-resolution photos on public platforms.</li>
                        <li>Disable automatic facial recognition features in social media settings.</li>
                        <li>Restrict who can view and download your photos.</li>
                        <li>Use secure cloud storage services with restricted access.</li>
                        <li>Review privacy settings on social media regularly.</li>
                        <li>Remove metadata from images before uploading.</li>`;
                    assessment += "<li>Your personal images can be used for facial recognition, deepfakes, or unauthorized sharing. According to Purtova (2015), insufficient regulations leave individuals vulnerable to misuse of biometric-related data.</li>";
                    detailedAssessment += "<li>Personal photos may seem harmless, but they pose significant privacy risks. Images shared online can be used for facial recognition, deepfake technology, and unauthorized identity replication. Cybercriminals can extract metadata from photos, revealing location and device details. In some cases, photos are taken from social media and used for scams, identity theft, or manipulated into misleading content. If your image is publicly available, it could be used without your consent in ways you never intended. Being selective about where you upload images and reviewing privacy settings on social media can reduce these risks.</li>";
                    break;
                case "IP Address":
                    recommendations += `
                        <li>Use a VPN or secure browsing tools to hide your IP address.</li>
                        <li>Avoid using public Wi-Fi without protection.</li>
                        <li>Regularly update your firewall and router settings.</li>`;
                    detailedRecommendations += `
                        <li>Use a VPN or the Tor browser to mask your real IP.</li>
                        <li>Avoid using public Wi-Fi networks without proper security measures.</li>
                        <li>Regularly update your firewall and router settings.</li>
                        <li>Request a dynamic IP change from your ISP if necessary.</li>
                        <li>Use secure browsing tools to protect your IP address.</li>
                        <li>Monitor your network for unauthorized access.</li>`;
                    assessment += "<li>Your IP address can be used to track your online activities, approximate your location, and bypass privacy protections. Websites and hackers can collect this data for surveillance or targeted cyberattacks (Hoven, 2019).</li>";
                    detailedAssessment += "<li>Your IP address acts as a digital identifier that reveals information about your geographic location and internet service provider. Websites, advertisers, and hackers can use it to track your online activity, serve targeted ads, and even attempt cyberattacks. In some cases, IP addresses are used for profiling users and restricting access to content. If exposed, malicious actors may attempt to bypass your network security, perform denial-of-service (DDoS) attacks, or link your activity across different sites. Using a VPN or secure browsing tools can help protect your IP address from unauthorized tracking.</li>";
                    break;
                case "Bank Account":
                    recommendations += `
                        <li>Never share your banking details over email or text.</li>
                        <li>Use official banking apps with multi-factor authentication (MFA).</li>
                        <li>Regularly monitor your account for unauthorized transactions.</li>`;
                    detailedRecommendations += `
                        <li>Avoid sharing your bank account details through email or text messages.</li>
                        <li>Use official banking applications and websites for transactions.</li>
                        <li>Regularly monitor your account statements for unauthorized transactions.</li>
                        <li>Enable account alerts to receive real-time notifications of suspicious activities.</li>
                        <li>Use multi-factor authentication (MFA) for banking apps.</li>
                        <li>Ensure banking websites have HTTPS encryption.</li>`;
                    assessment += "<li>Financial details are one of the highest-risk types of data. If leaked, they can lead to fraud, unauthorized transactions, and identity theft. Agarwal (2016) stresses the importance of strong privacy risk assessments for financial security.</li>";
                    detailedAssessment += "<li>Bank account details are among the most sensitive forms of personal data and are a prime target for fraud and identity theft. If leaked, they can be used for unauthorized transactions, loan fraud, or social engineering scams. Cybercriminals often exploit weak security measures to gain access to banking information through phishing, malware, or data breaches. Even partial banking details can be used to manipulate financial institutions or trick users into providing additional credentials. Always be cautious when entering banking details online and avoid sharing them through unsecured channels.</li>";
                    break;
                case "Microphone":
                    recommendations += `
                        <li>Limit microphone access to trusted apps.</li>
                        <li>Review permissions regularly.</li>
                        <li>Disable smart device voice assistants when not in use.</li>`;
                    detailedRecommendations += `
                        <li>Grant microphone access only to trusted applications.</li>
                        <li>Review app permissions regularly and disable unnecessary access.</li>
                        <li>Disable smart home devices and virtual assistants when not in use.</li>
                        <li>Use physical microphone covers or noise jammers to prevent unauthorized listening.</li>
                        <li>Check privacy settings on devices for microphone access.</li>
                        <li>Be cautious of apps requesting microphone access without clear justification.</li>`;
                    assessment += "<li>Granting microphone access can allow unauthorized listening or recording without your knowledge. Arshad & Asghar (2024) emphasize the risks of invasive privacy breaches through emerging surveillance technologies.</li>";
                    detailedAssessment += "<li>Granting microphone access to applications and websites can lead to serious privacy concerns. Unauthorized apps may secretly record conversations, collect voice data, and use it for targeted advertising or surveillance. Some reports suggest that smart devices continuously listen for keywords, raising concerns about how voice data is stored and used. In extreme cases, hackers can exploit vulnerabilities to activate microphones remotely, turning personal devices into spying tools. Regularly reviewing and disabling microphone permissions for unnecessary apps can reduce the risk of unauthorized audio capture.</li>";
                    break;
                case "Signature":
                    recommendations += `
                        <li>Store digital signatures securely in password-protected files.</li>
                        <li>Avoid signing blank documents.</li>
                        <li>Do not provide your signature on unverified websites.</li>`;
                    detailedRecommendations += `
                        <li>Use encrypted e-signature platforms that require authentication.</li>
                        <li>Avoid signing blank papers or providing your signature on unsecured websites.</li>
                        <li>Store digital copies of your signature in password-protected or encrypted files.</li>
                        <li>Report any suspected forgery immediately.</li>
                        <li>Take legal action if necessary to protect your signature.</li>
                        <li>Regularly review where your signature is stored and used.</li>`;
                    assessment += "<li>Digital and handwritten signatures can be forged to authorize fraudulent transactions or legal documents. Secure storage and authentication methods are recommended to protect against misuse (Purtova, 2015).</li>";
                    detailedAssessment += "<li>Your handwritten or digital signature can be forged and misused for fraudulent transactions, document forgery, or identity theft. If a cybercriminal gains access to your signature, they can use it to authorize fake contracts, financial agreements, or legal documents. Unlike passwords, which can be changed, a stolen signature remains the same, making it a long-term risk. Be cautious about sharing your signature digitally, and consider using encrypted e-signature services to prevent unauthorized duplication.</li>";
                    break;
                case "Biometric Data":
                    recommendations += `
                        <li>Use biometric authentication only on trusted devices.</li>
                        <li>Avoid services that store biometric data externally.</li>
                        <li>Combine biometric authentication with multi-factor authentication.</li>`;
                    detailedRecommendations += `
                        <li>Avoid using biometric authentication for critical financial accounts unless combined with multi-factor authentication.</li>
                        <li>Ensure biometric data is stored securely on the device.</li>
                        <li>Research privacy policies of services requiring biometric verification.</li>
                        <li>Do not share biometric data with untrusted third parties.</li>
                        <li>Regularly review device settings for biometric data storage.</li>
                        <li>Use multi-factor authentication to enhance security.</li>`;
                    assessment += "<li>Biometric identifiers (e.g., fingerprints, Face ID) are permanent and unchangeable if compromised. If stolen, they can be used for identity fraud or surveillance. Hoven (2019) warns about the lack of sufficient regulation on biometric data protection.</li>";
                    detailedAssessment += "<li>Biometric data, such as fingerprints, facial recognition, and iris scans, are among the most secure forms of authentication but also pose permanent risks if compromised. Unlike passwords, biometric identifiers cannot be changed once stolen. Cybercriminals who gain access to biometric databases can use this information for identity fraud, surveillance, and unauthorized access to secured systems. Additionally, the increasing use of biometric authentication in banking, travel, and government services raises concerns about centralized storage and potential misuse. Ensuring that biometric data is stored securely and using multi-factor authentication can help mitigate these risks.</li>";
                    break;
            }
        }
    });

    let riskLevel;
    if (totalRisk <= 50) {
        riskLevel = "Low";
    } else if (totalRisk <= 90) {
        riskLevel = "Medium";
    } else {
        riskLevel = "High";
    }

    document.getElementById("risk-level").querySelector("span").innerHTML = riskLevel;
    document.getElementById("assessment").querySelector("span").innerHTML = assessment + "</ul>";
    document.getElementById("recommendations").querySelector("span").innerHTML = recommendations + "</ul>";

    // Store the initial results
    sessionStorage.setItem("initialAssessment", assessment);
    sessionStorage.setItem("initialDetailedAssessment", detailedAssessment);
    sessionStorage.setItem("initialRecommendations", recommendations);
    sessionStorage.setItem("initialDetailedRecommendations", detailedRecommendations);
});

function toggleMoreInfo(section) {
    const moreInfoText = {
        assessment: sessionStorage.getItem("initialDetailedAssessment"),
        recommendations: sessionStorage.getItem("initialDetailedRecommendations")
    };

    const shortInfoText = {
        assessment: sessionStorage.getItem("initialAssessment"),
        recommendations: sessionStorage.getItem("initialRecommendations")
    };

    const sectionElement = document.getElementById(section).querySelector("span");
    const buttonElement = document.getElementById(`more-info-${section}`);

    if (buttonElement.innerHTML === "More Info") {
        sectionElement.innerHTML = moreInfoText[section];
        buttonElement.innerHTML = "Less Info";
    } else {
        sectionElement.innerHTML = shortInfoText[section];
        buttonElement.innerHTML = "More Info";
    }
}

