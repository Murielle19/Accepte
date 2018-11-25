"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task;
(function (Task_1) {
    var Task = /** @class */ (function () {
        function Task(content, date, priority, checked) {
            this._checked = false;
            this._content = content;
            this._date = date;
            this._priority = priority;
            this._checked = checked;
        }
        Object.defineProperty(Task.prototype, "content", {
            get: function () {
                return this._content;
            },
            set: function (content) {
                this._content = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Task.prototype, "date", {
            get: function () {
                return this._date;
            },
            set: function (date) {
                this._date = date;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Task.prototype, "priority", {
            get: function () {
                return this._priority;
            },
            set: function (priority) {
                this._priority = priority;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Task.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (checked) {
                this._checked = checked;
            },
            enumerable: true,
            configurable: true
        });
        Task.prototype.add = function (content, date, priority) {
            var id = Math.random() * 58;
            return id;
        };
        Task.prototype.update = function (content, date, priority, checked) {
            this._content = content;
            this._date = date;
            this._priority = priority;
            this._checked = checked;
        };
        Task.prototype.close = function (checked) {
            return true;
        };
        Task.prototype.toString = function () {
            var tache = " CONTENU : " + this._content + "\n DATE : " + this._date + "\n PRIORITE : " + this._priority + "\n ETAT : " + this._checked;
            return tache;
        };
        return Task;
    }());
    Task_1.Task = Task;
})(Task = exports.Task || (exports.Task = {}));
