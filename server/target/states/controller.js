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
        const states = await entity_1.default.find();
        return states;
    }
    async createState(state) {
        console.log("state", state);
        let statePosition = await entity_1.default.getMaxPosition();
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
    async updateState(stateId, update) {
        console.log("update", update);
        const state = await entity_1.default.findOneById(stateId);
        if (!state) {
            throw new routing_controllers_1.NotFoundError('Cannot find state');
        }
        return entity_1.default.merge(state, update).save();
    }
    async deleteState(stateid) {
        const state = await entity_1.default.findOneById(stateid);
        if (!state)
            throw new routing_controllers_1.NotFoundError("State Not Found");
        return state.remove();
    }
    async changeStateOrder(stateid) {
        const state = await entity_1.default.findOneById(stateid);
        if (!state)
            throw new routing_controllers_1.NotFoundError('Cannot find state');
        const previousState = await entity_1.default.findOne({ position: state.position - 1 });
        if (!previousState)
            throw new routing_controllers_1.NotFoundError('Cannot find state');
        Object.assign(state, { position: state.position - 1 });
        Object.assign(previousState, { position: previousState.position + 1 });
        return state.save(), previousState.save();
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
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "createState", null);
__decorate([
    routing_controllers_1.Patch('/states/:id'),
    routing_controllers_1.OnUndefined(400),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "updateState", null);
__decorate([
    routing_controllers_1.Delete('/states/:stateid([0-9]+)'),
    __param(0, routing_controllers_1.Param('stateid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "deleteState", null);
__decorate([
    routing_controllers_1.Patch('/states/:id'),
    routing_controllers_1.OnUndefined(400),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "changeStateOrder", null);
StateController = __decorate([
    routing_controllers_1.JsonController()
], StateController);
exports.default = StateController;
//# sourceMappingURL=controller.js.map