// ============================================
// VISTO - Codice Fiscale Calculator
// Italian Fiscal Code Generator
// ============================================

// Italian municipalities and their codes (sample data - in production, use complete database)
const COMUNI_ITALIANI = {
    'ROMA': 'H501',
    'MILANO': 'F205',
    'NAPOLI': 'F839',
    'TORINO': 'L219',
    'PALERMO': 'G273',
    'GENOVA': 'D969',
    'BOLOGNA': 'A944',
    'FIRENZE': 'D612',
    'BARI': 'A662',
    'CATANIA': 'C351',
    'VENEZIA': 'L736',
    'VERONA': 'L781',
    'MESSINA': 'F158',
    'PADOVA': 'G224',
    'TRIESTE': 'L424',
    // Add more as needed
};

// Load country codes from external file (will be loaded via script tag)
// The COUNTRY_CODES object will be available globally
const PAESI_ESTERI = typeof COUNTRY_CODES !== 'undefined' ? COUNTRY_CODES : {};

// Month codes for fiscal code
const MONTH_CODES = {
    '01': 'A', '02': 'B', '03': 'C', '04': 'D',
    '05': 'E', '06': 'H', '07': 'L', '08': 'M',
    '09': 'P', '10': 'R', '11': 'S', '12': 'T'
};

// Character values for checksum calculation
const CHAR_VALUES_ODD = {
    '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21,
    'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21,
    'K': 2, 'L': 4, 'M': 18, 'N': 20, 'O': 11, 'P': 3, 'Q': 6, 'R': 8, 'S': 12, 'T': 14,
    'U': 16, 'V': 10, 'W': 22, 'X': 25, 'Y': 24, 'Z': 23
};

const CHAR_VALUES_EVEN = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
    'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19,
    'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
};

const CHECKSUM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// ============================================
// HELPER FUNCTIONS
// ============================================

function extractConsonants(str) {
    return str.toUpperCase().replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/g, '');
}

function extractVowels(str) {
    return str.toUpperCase().replace(/[^AEIOU]/g, '');
}

function getSurnameCode(surname) {
    const consonants = extractConsonants(surname);
    const vowels = extractVowels(surname);
    let code = consonants + vowels + 'XXX';
    return code.substring(0, 3);
}

function getNameCode(name) {
    const consonants = extractConsonants(name);
    const vowels = extractVowels(name);

    // Special rule: if consonants >= 4, take 1st, 3rd, 4th
    if (consonants.length >= 4) {
        return consonants[0] + consonants[2] + consonants[3];
    }

    let code = consonants + vowels + 'XXX';
    return code.substring(0, 3);
}

function getDateCode(birthDate, gender) {
    const date = new Date(birthDate);
    const year = date.getFullYear().toString().substring(2);
    const month = MONTH_CODES[('0' + (date.getMonth() + 1)).slice(-2)];
    let day = date.getDate();

    // For females, add 40 to the day
    if (gender.toUpperCase() === 'F') {
        day += 40;
    }

    const dayStr = ('0' + day).slice(-2);
    return year + month + dayStr;
}

function calculateChecksum(code15) {
    let sum = 0;

    for (let i = 0; i < 15; i++) {
        const char = code15[i];
        if (i % 2 === 0) {
            // Odd position (1-indexed)
            sum += CHAR_VALUES_ODD[char];
        } else {
            // Even position (1-indexed)
            sum += CHAR_VALUES_EVEN[char];
        }
    }

    const remainder = sum % 26;
    return CHECKSUM_CHARS[remainder];
}

// ============================================
// MAIN CALCULATION FUNCTION
// ============================================

function calculateCodiceFiscale(surname, name, birthDate, birthPlace, gender) {
    try {
        // Validate inputs
        if (!surname || !name || !birthDate || !birthPlace || !gender) {
            throw new Error('Tous les champs sont requis');
        }

        // Get codes for each part
        const surnameCode = getSurnameCode(surname);
        const nameCode = getNameCode(name);
        const dateCode = getDateCode(birthDate, gender);

        // Get birth place code
        // birthPlace is already the country code from the select dropdown (e.g., Z172, Z246, etc.)
        let placeCode = birthPlace;

        // Combine all parts
        const code15 = surnameCode + nameCode + dateCode + placeCode;

        // Calculate checksum
        const checksum = calculateChecksum(code15);

        // Final code
        const codiceFiscale = code15 + checksum;

        return {
            success: true,
            code: codiceFiscale,
            breakdown: {
                surname: surnameCode,
                name: nameCode,
                date: dateCode,
                place: placeCode,
                checksum: checksum
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// ============================================
// DOM MANIPULATION & EVENT HANDLERS
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('codice-fiscale-form');
    const resultContainer = document.getElementById('result-container');
    const resultCode = document.getElementById('result-code');
    const breakdownContainer = document.getElementById('breakdown-container');
    const copyButton = document.getElementById('copy-button');
    const downloadButton = document.getElementById('download-button');

    if (!form) return;

    // No need for dynamic field switching - birthPlace is now a select dropdown in HTML
    // The nationality field still determines the calculation logic

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm(form)) {
            return;
        }

        // Get form values
        const surname = document.getElementById('surname').value.trim();
        const name = document.getElementById('name').value.trim();
        const birthDate = document.getElementById('birthDate').value;
        const birthPlace = document.getElementById('birthPlace').value.trim();
        const gender = document.getElementById('gender').value;

        // Calculate (no nationality parameter needed)
        const result = calculateCodiceFiscale(surname, name, birthDate, birthPlace, gender);

        if (result.success) {
            // Display result
            resultCode.textContent = result.code;

            // Display breakdown
            if (breakdownContainer) {
                breakdownContainer.innerHTML = `
          <div class="breakdown-grid">
            <div class="breakdown-item">
              <span class="breakdown-label">Nom:</span>
              <span class="breakdown-value">${result.breakdown.surname}</span>
            </div>
            <div class="breakdown-item">
              <span class="breakdown-label">Prénom:</span>
              <span class="breakdown-value">${result.breakdown.name}</span>
            </div>
            <div class="breakdown-item">
              <span class="breakdown-label">Date:</span>
              <span class="breakdown-value">${result.breakdown.date}</span>
            </div>
            <div class="breakdown-item">
              <span class="breakdown-label">Lieu:</span>
              <span class="breakdown-value">${result.breakdown.place}</span>
            </div>
            <div class="breakdown-item">
              <span class="breakdown-label">Contrôle:</span>
              <span class="breakdown-value">${result.breakdown.checksum}</span>
            </div>
          </div>
        `;
            }

            // Show result container with animation
            resultContainer.style.display = 'block';
            resultContainer.classList.add('fade-in');
            setTimeout(() => {
                resultContainer.classList.add('visible');
            }, 100);

            // Scroll to result
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Show success notification
            showNotification('Code fiscal calculé avec succès!', 'success', 3000);

            // Store result for copy/download
            resultContainer.dataset.code = result.code;

        } else {
            showNotification(result.error, 'error', 5000);
        }
    });

    // Copy button
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            const code = resultContainer.dataset.code;
            if (code) {
                copyToClipboard(code, 'Code fiscal copié!');
            }
        });
    }

    // Download button
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            const code = resultContainer.dataset.code;
            if (code) {
                const surname = document.getElementById('surname').value.trim();
                const name = document.getElementById('name').value.trim();

                const content = `
CODICE FISCALE ITALIANO
========================

Nome: ${surname}
Prénom: ${name}
Code Fiscal: ${code}

Généré le: ${new Date().toLocaleDateString('fr-FR')}
Source: VISTO Platform
        `.trim();

                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `codice_fiscale_${surname}_${name}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                showNotification('Fichier téléchargé!', 'success', 3000);
            }
        });
    }

    // Real-time validation
    const inputs = form.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateSingleInput(this);
        });
    });
});

// ============================================
// SINGLE INPUT VALIDATION
// ============================================

function validateSingleInput(input) {
    const formGroup = input.closest('.form-group');
    const existingError = formGroup?.querySelector('.form-error');

    // Remove previous error
    input.classList.remove('error', 'success');
    if (existingError) {
        existingError.remove();
    }

    // Check if required and empty
    if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('error');

        if (formGroup) {
            const error = document.createElement('div');
            error.className = 'form-error';
            error.textContent = 'Ce champ est requis';
            formGroup.appendChild(error);
        }
    } else if (input.value.trim()) {
        input.classList.add('success');
    }
}

// Make calculation function globally available
window.calculateCodiceFiscale = calculateCodiceFiscale;
