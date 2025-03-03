document.getElementById("calculate-risk").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#data-form input[type='checkbox']");
    let totalRisk = 0;
    let recommendations = "To secure your data, consider:";
    let detailedRecommendations = "Detailed Recommendations:";
    let assessment = "Data Assessment:";
    let detailedAssessment = "Detailed Assessment:";

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalRisk += parseInt(checkbox.value);
            switch (checkbox.nextElementSibling.textContent.trim()) {
                case "Name":
                    recommendations += " Avoid using your full name on public platforms to reduce the risk of identity theft and impersonation. Be cautious when filling out online forms and ensure your name is not linked to sensitive personal details.";
                    detailedRecommendations += " To minimize risks associated with sharing your name online, avoid using your full legal name on public platforms, especially on social media, forums, and unsecured websites. Many online accounts only require a first name or an alias, which can help protect your identity from unauthorized tracking or profiling. Be cautious when filling out online forms that ask for your full name, as some companies collect and sell user data to third parties. Additionally, ensure that your name is not publicly linked to sensitive information, such as home addresses, phone numbers, or birthdates, which can make identity theft easier for cybercriminals.";
                    assessment += " Your name is commonly shared online, but it can still be misused for fraud, impersonation, and unauthorized profiling. Be mindful of sharing it alongside other personal details.";
                    detailedAssessment += " Your name is one of the most commonly shared personal details online. While it may seem harmless, it can be used for fraud, impersonation, and unauthorized profiling. Cybercriminals and data brokers often collect names to link them with other exposed data, making it easier to track and identify you. Additionally, if your name appears in public databases or social media, it can be used for phishing attacks and social engineering scams. Be mindful of where and how you share your full name, especially on public forums and unsecured websites.";
                    break;
                case "Email Address":
                    recommendations += " Use separate emails for work, personal use, and online registrations. Enable two-factor authentication (2FA) to secure your accounts, and be cautious of phishing emails that attempt to steal your information.";
                    detailedRecommendations += " To safeguard your email from phishing, hacking, and spam, consider using multiple email addresses for different purposes. A dedicated email for financial transactions, another for work, and a separate one for social media can help contain security breaches. Enable two-factor authentication (2FA) on all important accounts to add an extra layer of security. Be cautious when receiving unsolicited emails, especially those requesting personal information or containing links—cybercriminals often disguise phishing attempts as legitimate messages from trusted sources. Regularly check if your email has been leaked in data breaches using online security tools, and change your password immediately if necessary.";
                    assessment += " Your email is a key identifier for online accounts and a frequent target for spam, phishing, and hacking attempts. According to Hoven (2019), cybercriminals use leaked emails to gain access to sensitive accounts.";
                    detailedAssessment += " Your email address is a key identifier used for communication, online registrations, and account logins. Unfortunately, it is also a primary target for spam, phishing, and hacking attempts. Data breaches frequently expose email addresses, allowing hackers to send fraudulent messages or reset passwords on linked accounts. If your email is leaked alongside other personal data, scammers can craft highly convincing phishing emails that trick you into revealing more sensitive information. Additionally, marketing companies often track emails to build consumer profiles and target ads. Limiting where you share your email and using unique addresses for different purposes can help reduce these risks.";
                    break;
                case "Location":
                    recommendations += " Disable GPS tracking when not needed, and avoid sharing real-time locations online. Use a VPN to mask your IP and prevent websites and advertisers from tracking your location.";
                    detailedRecommendations += " Your location data should be carefully managed to prevent unwanted tracking and privacy risks. Disabling GPS tracking on mobile apps and limiting location-sharing settings on social media can help reduce exposure. Avoid posting real-time location updates, such as check-ins or vacation details, as they can make you a target for physical security threats or digital tracking. If you must share your location, use a delay or provide vague details instead of exact addresses. Using a Virtual Private Network (VPN) can also help mask your IP address and prevent websites and advertisers from tracking your online activities.";
                    assessment += " Your location data can be used to track your movements, target you with location-based ads, or even put you at risk of stalking and security threats. Hoven (2019) highlights concerns about surveillance and tracking in the digital age.";
                    detailedAssessment += " Location data, whether in the form of GPS coordinates, home addresses, or location history, can be highly sensitive. This information can be used to track your movements, deliver targeted advertisements, or even expose you to stalking and security threats. Cybercriminals can exploit location data to determine when you are away from home, while advertisers use it to monitor shopping and travel habits. Additionally, law enforcement and government agencies can access location history through various apps and databases. Disabling unnecessary location tracking and being cautious about sharing your address online can help minimize these risks.";
                    break;
                case "Telephone/Phone Number":
                    recommendations += " Avoid sharing your primary phone number publicly. Use a secondary number for online registrations and enable SIM lock to prevent unauthorized access to your accounts.";
                    detailedRecommendations += " To prevent spam, scams, and unauthorized account takeovers, avoid sharing your primary phone number on public websites or social media. Many companies sell phone numbers to marketers and scammers, increasing your chances of receiving spam calls and phishing messages. Consider using a secondary number or a VoIP service for online registrations to protect your main contact. Enable security features such as SIM card lock and two-factor authentication (2FA) to prevent SIM swapping attacks, which can allow hackers to gain access to your accounts.";
                    assessment += " Phone numbers are often exploited for spam, phishing scams, SIM swapping, and identity fraud. Criminals can use your number to bypass two-factor authentication (2FA) and take over accounts.";
                    detailedAssessment += " Your phone number is a direct link to your identity and can be exploited for scams, phishing, and SIM swapping attacks. Criminals can use it to impersonate you, intercept verification codes, or gain access to sensitive accounts. Telemarketers and data brokers frequently sell phone numbers, leading to an increase in spam calls and messages. In worst-case scenarios, fraudsters can perform SIM hijacking, transferring your number to another SIM card to bypass security measures and take over financial or social media accounts. Using alternative numbers or privacy-focused services can help protect your primary phone number from unwanted exposure.";
                    break;
                case "Photos":  
                    recommendations += " Limit the public sharing of personal photos to prevent misuse in deepfake technology and identity theft. Disable automatic facial recognition on social media and remove metadata from images before uploading.";
                    detailedRecommendations += " To protect your personal images from unauthorized use, avoid uploading high-resolution photos on public platforms. Cybercriminals can use your images for facial recognition databases, deepfake technology, or identity fraud. Social media platforms often store metadata within images, which can reveal sensitive information like the date, time, and location where the picture was taken. Disable automatic facial recognition features in your social media settings and restrict who can view and download your photos. If you need to share sensitive images, use secure cloud storage services with restricted access instead of public uploads.";
                    assessment += " Your personal images can be used for facial recognition, deepfakes, or unauthorized sharing. According to Purtova (2015), insufficient regulations leave individuals vulnerable to misuse of biometric-related data.";
                    detailedAssessment += " Personal photos may seem harmless, but they pose significant privacy risks. Images shared online can be used for facial recognition, deepfake technology, and unauthorized identity replication. Cybercriminals can extract metadata from photos, revealing location and device details. In some cases, photos are taken from social media and used for scams, identity theft, or manipulated into misleading content. If your image is publicly available, it could be used without your consent in ways you never intended. Being selective about where you upload images and reviewing privacy settings on social media can reduce these risks.";
                    break;
                case "IP Address":
                    recommendations += " Use a VPN or secure browsing tools to hide your IP address and prevent tracking. Avoid using public Wi-Fi without protection to reduce exposure to cyber threats.";
                    detailedRecommendations += " Your IP address is a digital fingerprint that websites, advertisers, and hackers can use to track your online activity. To protect your privacy, consider using a VPN or the Tor browser, which can mask your real IP and encrypt your internet traffic. Avoid using public Wi-Fi networks without proper security measures, as hackers can intercept your connection and extract personal information. Regularly update your firewall and router settings to prevent unauthorized access to your home network. If you suspect your IP address is being misused, you can request a dynamic IP change from your internet service provider (ISP).";
                    assessment += " Your IP address can be used to track your online activities, approximate your location, and bypass privacy protections. Websites and hackers can collect this data for surveillance or targeted cyberattacks (Hoven, 2019).";
                    detailedAssessment += " Your IP address acts as a digital identifier that reveals information about your geographic location and internet service provider. Websites, advertisers, and hackers can use it to track your online activity, serve targeted ads, and even attempt cyberattacks. In some cases, IP addresses are used for profiling users and restricting access to content. If exposed, malicious actors may attempt to bypass your network security, perform denial-of-service (DDoS) attacks, or link your activity across different sites. Using a VPN or secure browsing tools can help protect your IP address from unauthorized tracking.";
                    break;
                case "Bank Account":
                    recommendations += " Never share your banking details over email or text. Use official banking apps with multi-factor authentication (MFA) and regularly monitor your account for unauthorized transactions.";
                    detailedRecommendations += " Financial data should always be treated with the highest level of security to prevent fraud and identity theft. Avoid sharing your bank account details through email, text messages, or unsecured websites. Only use official banking applications and websites for transactions, ensuring they have HTTPS encryption. Regularly monitor your account statements for unauthorized transactions and enable account alerts to receive real-time notifications of suspicious activities. Using multi-factor authentication (MFA) for banking apps provides an additional layer of security, making it harder for cybercriminals to gain access to your funds.";
                    assessment += " Financial details are one of the highest-risk types of data. If leaked, they can lead to fraud, unauthorized transactions, and identity theft. Agarwal (2016) stresses the importance of strong privacy risk assessments for financial security.";
                    detailedAssessment += " Bank account details are among the most sensitive forms of personal data and are a prime target for fraud and identity theft. If leaked, they can be used for unauthorized transactions, loan fraud, or social engineering scams. Cybercriminals often exploit weak security measures to gain access to banking information through phishing, malware, or data breaches. Even partial banking details can be used to manipulate financial institutions or trick users into providing additional credentials. Always be cautious when entering banking details online and avoid sharing them through unsecured channels.";
                    break;
                case "Microphone":
                    recommendations += " Limit microphone access to trusted apps and review permissions regularly. Disable smart device voice assistants when not in use to prevent unauthorized recordings.";
                    detailedRecommendations += " Microphone access should be granted only to trusted applications, as some software can secretly record conversations or collect voice data for advertising and surveillance purposes. Review app permissions regularly and disable microphone access for apps that do not need it. Smart home devices and virtual assistants have been reported to record audio even when not in use, so consider muting or turning off these features when privacy is a concern. Additionally, using physical microphone covers or noise jammers can help prevent unauthorized listening.";
                    assessment += " Granting microphone access can allow unauthorized listening or recording without your knowledge. Arshad & Asghar (2024) emphasize the risks of invasive privacy breaches through emerging surveillance technologies.";
                    detailedAssessment += "Granting microphone access to applications and websites can lead to serious privacy concerns. Unauthorized apps may secretly record conversations, collect voice data, and use it for targeted advertising or surveillance. Some reports suggest that smart devices continuously listen for keywords, raising concerns about how voice data is stored and used. In extreme cases, hackers can exploit vulnerabilities to activate microphones remotely, turning personal devices into spying tools. Regularly reviewing and disabling microphone permissions for unnecessary apps can reduce the risk of unauthorized audio capture.";
                    break;
                case "Signature":
                    recommendations += " Store digital signatures securely in password-protected files. Avoid signing blank documents or providing your signature on unverified websites.";
                    detailedRecommendations += " A stolen or forged signature can be used for fraud, identity theft, and unauthorized transactions. To protect your digital signature, use encrypted e-signature platforms that require authentication before signing documents. Avoid signing blank papers or providing your signature on unsecured websites. If you need to store digital copies of your signature, ensure they are kept in password-protected or encrypted files. If you suspect someone has forged your signature, report the incident immediately and take legal action if necessary.";
                    assessment += " Digital and handwritten signatures can be forged to authorize fraudulent transactions or legal documents. Secure storage and authentication methods are recommended to protect against misuse (Purtova, 2015).";
                    detailedAssessment += " Your handwritten or digital signature can be forged and misused for fraudulent transactions, document forgery, or identity theft. If a cybercriminal gains access to your signature, they can use it to authorize fake contracts, financial agreements, or legal documents. Unlike passwords, which can be changed, a stolen signature remains the same, making it a long-term risk. Be cautious about sharing your signature digitally, and consider using encrypted e-signature services to prevent unauthorized duplication.";
                    break;
                case "Biometric Data":
                    recommendations += " Use biometric authentication only on trusted devices. Avoid services that store biometric data externally, as it cannot be changed if compromised.";
                    detailedRecommendations += " Biometric data, such as fingerprints and facial recognition, is permanent and cannot be changed if compromised. Unlike passwords, which can be reset, stolen biometric data can be used indefinitely for identity fraud. To mitigate risks, avoid using biometric authentication for critical financial accounts unless it is combined with multi-factor authentication. When using biometric security features, ensure that the data is stored securely on the device rather than being uploaded to external servers. If a service requires biometric verification, research its privacy policies to confirm that the data is not shared with third parties or stored in a vulnerable manner.";
                    assessment += " Biometric identifiers (e.g., fingerprints, Face ID) are permanent and unchangeable if compromised. If stolen, they can be used for identity fraud or surveillance. Hoven (2019) warns about the lack of sufficient regulation on biometric data protection.";
                    detailedAssessment += " Biometric data, such as fingerprints, facial recognition, and iris scans, are among the most secure forms of authentication but also pose permanent risks if compromised. Unlike passwords, biometric identifiers cannot be changed once stolen. Cybercriminals who gain access to biometric databases can use this information for identity fraud, surveillance, and unauthorized access to secured systems. Additionally, the increasing use of biometric authentication in banking, travel, and government services raises concerns about centralized storage and potential misuse. Ensuring that biometric data is stored securely and using multi-factor authentication can help mitigate these risks.";
                    break;
            }
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
    document.getElementById("assessment").querySelector("span").textContent = assessment;
    document.getElementById("recommendations").querySelector("span").textContent = recommendations;

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

    if (buttonElement.textContent === "More Info") {
        sectionElement.textContent = moreInfoText[section];
        buttonElement.textContent = "Less Info";
    } else {
        sectionElement.textContent = shortInfoText[section];
        buttonElement.textContent = "More Info";
    }
}

