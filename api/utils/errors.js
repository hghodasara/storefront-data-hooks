"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigcommerceNetworkError = exports.BigcommerceApiError = exports.BigcommerceGraphQLError = void 0;
// Used for GraphQL errors
var BigcommerceGraphQLError = /** @class */ (function (_super) {
    __extends(BigcommerceGraphQLError, _super);
    function BigcommerceGraphQLError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BigcommerceGraphQLError;
}(Error));
exports.BigcommerceGraphQLError = BigcommerceGraphQLError;
var BigcommerceApiError = /** @class */ (function (_super) {
    __extends(BigcommerceApiError, _super);
    function BigcommerceApiError(msg, res, data) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'BigcommerceApiError';
        _this.status = res.status;
        _this.res = res;
        _this.data = data;
        return _this;
    }
    return BigcommerceApiError;
}(Error));
exports.BigcommerceApiError = BigcommerceApiError;
var BigcommerceNetworkError = /** @class */ (function (_super) {
    __extends(BigcommerceNetworkError, _super);
    function BigcommerceNetworkError(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'BigcommerceNetworkError';
        return _this;
    }
    return BigcommerceNetworkError;
}(Error));
exports.BigcommerceNetworkError = BigcommerceNetworkError;
