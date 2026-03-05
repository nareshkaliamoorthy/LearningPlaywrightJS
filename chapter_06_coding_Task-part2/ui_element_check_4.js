let element_is_present = false;
let element_is_displayed = false;
let element_is_enabled = false;
let element_state = null;
let SEVERITY = null;
let ACTION = null;

if ((element_is_present ===true) && (element_is_displayed===true) && (element_is_enabled===true)){
    element_state = "READY";
    SEVERITY = element_state === "READY" ? "OK" : "";
    ACTION = "Element is visible, displayed and enabled. All Good!";
}
else if ((element_is_present ===true) && (element_is_displayed===true) && (element_is_enabled===false)){
    element_state = "DISABLED";
    SEVERITY = element_state === "DISABLED" ? "WARNING" : "";
    ACTION = "Element is visible but disabled. Wait for enable state or check preconditions";
}
else if ((element_is_present ===true) && ((element_is_displayed===false) || (element_is_enabled===false))){
    element_state = "HIDDEN";
    SEVERITY = element_state === "HIDDEN" ? "WARNING" : "";
    ACTION = "Element is visible but not displayed. Wait for element to be loaded or check preconditions";
}
else if ((element_is_present ===false) || (element_is_displayed===false) || (element_is_enabled===false)){
    element_state = "NOT FOUND";
    SEVERITY = element_state === "NOT FOUND" ? "CRITICAL" : "";
    ACTION = "Element is not visible / not displayed / disabled . Wait for element to be attached to DOM or check preconditions";
}




console.log(`STATUS: ${element_state} SEVERITY: ${SEVERITY} ACTION: ${ACTION}`)
