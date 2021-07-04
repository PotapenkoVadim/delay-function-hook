import { useEffect, useState } from 'react';
export function useDelayFunction() {
    var _a = useState(null), timerID = _a[0], setTimerID = _a[1];
    useEffect(function () { return function () { return clearTimeout(timerID); }; }, [timerID]);
    return function (callback, miliseconds) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var timer = setTimeout(function () { return callback.apply(void 0, args); }, miliseconds);
        setTimerID(timer);
    };
}
