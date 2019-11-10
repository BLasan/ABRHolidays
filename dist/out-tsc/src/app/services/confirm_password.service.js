export function confirmPassword(controlNameToCompare) {
    return function (c) {
        if (c.value == null || c.value.length == 0) {
            return null;
        }
        // console.log(c.value)
        var controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function (x) {
                // console.log(x)
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'notequal': true } : null;
    };
}
//# sourceMappingURL=confirm_password.service.js.map