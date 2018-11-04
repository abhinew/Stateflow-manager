"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("./entity");
const routing_controllers_1 = require("routing-controllers");
let StateController = class StateController {
    async getStates() {
        const states = await entity_1.State.find();
        return states;
    }
    async createState(state) {
        let statePosition = await entity_1.State.getMaxPosition();
        let lastPosition = statePosition.position;
        console.log("statePosition", statePosition);
        if (lastPosition <= 0) {
            lastPosition = 1;
            state.position = lastPosition;
        }
        else {
            state.position = lastPosition + 1;
        }
        return state.save();
    }
};
__decorate([
    routing_controllers_1.Get("/states"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StateController.prototype, "getStates", null);
__decorate([
    routing_controllers_1.Post('/state'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.State]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "createState", null);
StateController = __decorate([
    routing_controllers_1.JsonController()
], StateController);
exports.default = StateController;
//# sourceMappingURL=controller.js.map