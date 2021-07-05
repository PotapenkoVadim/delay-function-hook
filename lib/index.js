import { useEffect, useState } from 'react';
export function useDelayFunction() {
    var _a = useState(null), timerID = _a[0], setTimerID = _a[1];
    useEffect(function () { return function () { return clearTimeout(timerID); }; }, [timerID]);
    return function (callback, milliseconds) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve) {
            var timer = setTimeout(function () {
                var result = callback.apply(void 0, args);
                resolve(result);
            }, milliseconds);
            setTimerID(timer);
        });
    };
}
