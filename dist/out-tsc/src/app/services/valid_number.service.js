export function validNumber() {
    return function (c) {
        if (c.value == null || c.value.length == 0) {
            return null;
        }
        console.log(c.value);
        var subscription = c.valueChanges.subscribe(function (x) {
            console.log(x);
            c.updateValueAndValidity();
            subscription.unsubscribe();
        });
        return c.value.length > 0 ? { 'notequal': true } : null;
    };
}
//# sourceMappingURL=valid_number.service.js.map