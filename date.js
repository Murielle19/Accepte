"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Date1;
(function (Date1_1) {
    var Date1 = /** @class */ (function () {
        function Date1(ye, mo, da) {
            this.ye = ye;
            this.mo = mo;
            this.da = da;
        }
        Object.defineProperty(Date1.prototype, "year", {
            get: function () {
                return this.ye;
            },
            set: function (new_year) {
                this.ye = new_year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Date1.prototype, "month", {
            get: function () {
                return this.mo;
            },
            set: function (new_month) {
                this.mo = new_month;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Date1.prototype, "day", {
            get: function () {
                return this.da;
            },
            set: function (new_day) {
                this.da = new_day;
            },
            enumerable: true,
            configurable: true
        });
        Date1.prototype.toString = function () {
            return this.ye + '-' + this.mo + '-' + this.da;
        };
        Date1.prototype.create = function (n_year, n_month, n_day) {
            return n_year + '-' + n_month + '-' + n_day;
        };
        Date1.prototype.setdate = function (new_year, new_month, new_day) {
            this.ye = new_year;
            this.mo = new_month;
            this.da = new_day;
            return new_year + '-' + new_month + '-' + new_day;
        };
        Date1.prototype.yesterday = function () {
            var day = this.da, mon = this.mo, yea = this.ye;
            toString();
            if (this.da - 1 == 0 || this.mo - 1 == 0) {
                if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
                    this.da = 30;
                }
                else if (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12) {
                    if (mon == 1) {
                        this.mo = 12;
                        this.ye = yea - 1;
                    }
                    this.da = 31;
                }
            }
            else {
                this.da = day - 1;
            }
            return toString();
        };
        Date1.prototype.tomorrow = function () {
            var day = this.da, mon = this.mo, yea = this.ye;
            toString();
            if (day + 1 == 31) {
                mon = this.mo;
                if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
                    this.mo = mon + 1;
                }
            }
            else if (day + 1 >= 2 && day + 1 < 30) {
                this.da = day++;
            }
            if (day + 1 == 32) {
                mon = this.mo;
                if (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12) {
                    if (mon == 12) {
                        this.mo = 1;
                        this.ye = yea + 1;
                    }
                    this.mo = mon++;
                }
            }
            return toString();
        };
        Date1.prototype.addday = function (n) {
            var day = this.da;
            this.da = day + n;
            return toString();
        };
        Date1.prototype.subday = function (n) {
            var day = this.da;
            this.da = day + 1;
            return toString();
        };
        Date1.prototype.adddmonth = function (n) {
            var day = this.mo;
            this.mo = day + n;
            return toString();
        };
        Date1.prototype.submonth = function (n) {
            var day = this.mo;
            this.mo = day - n;
            return toString();
        };
        Date1.prototype.addyear = function (n) {
            var day = this.ye;
            this.ye = day + n;
            return toString();
        };
        Date1.prototype.subyear = function (n) {
            var day = this.ye;
            this.ye = day - n;
            return toString();
        };
        return Date1;
    }());
    Date1_1.Date1 = Date1;
})(Date1 = exports.Date1 || (exports.Date1 = {}));
