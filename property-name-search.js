// This functions searchs the entire JS space for objects that have a certain property name
deepLookForPropertyName = (name) => {
    window.lmayoDeepSearchSet = new Set();
    // navigator.hardwareConcurrency
    const candidates = [window];
    let solution = [];
    // Candidates is an array that can have up to any single object existing
    for (let i = 0; i < candidates.length; i++) {
//         console.log(i);
        // Candidate is the object we're checking
        const candidate = candidates[i];
        window.lmayoDeepSearchSet.add(candidate);
        const properties = Object.getOwnPropertyNames(candidate);
        // If the object we checking has the property. Jackpot!
        if (properties.includes(name)) {
            solution.push(candidate);
        } else {
            // Else we check among his children
            for (const property of properties) {
                let child;
                try {
                    child = candidate[property];
                } catch {
                    // Sometimes a property is a getter, if we fail to get it beacuse of the getter failing we just ignore it
                    child = null;
                }
                // We don't want any functions or any other things, just plain objects
                if (typeof child === 'object' && child != null && !window.lmayoDeepSearchSet.has(child)) {
                    candidates.push(child);
                }
            }
        }
    }
    return solution;
}
