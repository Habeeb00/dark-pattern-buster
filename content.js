// Content Script: content.js

// Function to check if a DOM element is visible
function isVisible(element) {
    return !!element && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}

// Function to detect and handle sneaking
function detectAndHandleSneaking() {
    // Example: Check if there's a hidden element trying to sneak information
    const hiddenElement = document.querySelector('.hidden-element');
    if (isVisible(hiddenElement)) {
        // Optionally, block, remove, or handle the hidden element
        hiddenElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'sneaking' });
    }
}

// Function to detect and handle confirmshaming
function detectAndHandleConfirmshaming() {
    // Example: Check if there's a confirmshaming modal
    const confirmshamingModal = document.querySelector('.confirmshaming-modal');
    if (isVisible(confirmshamingModal)) {
        // Optionally, block, close, or handle the modal
        confirmshamingModal.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'confirmshaming' });
    }
}

// Function to detect and handle bait and switch
function detectAndHandleBaitAndSwitch() {
    // Example: Check if there's a bait and switch element
    const baitAndSwitchElement = document.querySelector('.bait-and-switch-element');
    if (isVisible(baitAndSwitchElement)) {
        // Optionally, block, remove, or handle the element
        baitAndSwitchElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'baitAndSwitch' });
    }
}

// Function to detect and handle misdirection
function detectAndHandleMisdirection() {
    // Example: Check if there's a misdirection element
    const misdirectionElement = document.querySelector('.misdirection-element');
    if (isVisible(misdirectionElement)) {
        // Optionally, block, remove, or handle the element
        misdirectionElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'misdirection' });
    }
}

// Function to detect and handle hidden cost
function detectAndHandleHiddenCost() {
    // Example: Check if there's a hidden cost element
    const hiddenCostElement = document.querySelector('.hidden-cost-element');
    if (isVisible(hiddenCostElement)) {
        // Optionally, block, remove, or handle the element
        hiddenCostElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'hiddenCost' });
    }
}

// Function to detect and handle roach motel
function detectAndHandleRoachMotel() {
    // Example: Check if there's a roach motel element
    const roachMotelElement = document.querySelector('.roach-motel-element');
    if (isVisible(roachMotelElement)) {
        // Optionally, block, remove, or handle the element
        roachMotelElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'roachMotel' });
    }
}

// Function to detect and handle privacy suckering
function detectAndHandlePrivacySuckering() {
    // Example: Check if there's a privacy suckering element
    const privacySuckeringElement = document.querySelector('.privacy-suckering-element');
    if (isVisible(privacySuckeringElement)) {
        // Optionally, block, remove, or handle the element
        privacySuckeringElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'privacySuckering' });
    }
}

// Function to detect and handle obfuscation
function detectAndHandleObfuscation() {
    // Example: Check if there's an obfuscation element
    const obfuscationElement = document.querySelector('.obfuscation-element');
    if (isVisible(obfuscationElement)) {
        // Optionally, block, remove, or handle the element
        obfuscationElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'obfuscation' });
    }
}

// Function to detect and handle false urgency
function detectAndHandleFalseUrgency() {
    // Example: Check if there's a false urgency element
    const falseUrgencyElement = document.querySelector('.false-urgency-element');
    if (isVisible(falseUrgencyElement)) {
        // Optionally, block, remove, or handle the element
        falseUrgencyElement.style.display = 'none';
        
        // Optionally, inform the background script about the detected pattern
        chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'falseUrgency' });
    }
}

// Run detection logic when the page is fully loaded
window.addEventListener('load', () => {
    detectAndHandleSneaking();
    detectAndHandleConfirmshaming();
    detectAndHandleBaitAndSwitch();
    detectAndHandleMisdirection();
    detectAndHandleHiddenCost();
    detectAndHandleRoachMotel();
    detectAndHandlePrivacySuckering();
    detectAndHandleObfuscation();
    detectAndHandleFalseUrgency();
});
