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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entity_1 = require("../products/entity");
let State = class State extends typeorm_1.BaseEntity {
    static getMaxPosition() {
        return this.createQueryBuilder("state")
            .select('max(state.position) as "position"')
            .getRawOne();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], State.prototype, "stateid", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], State.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], State.prototype, "position", void 0);
__decorate([
    typeorm_1.OneToMany(_ => entity_1.default, product => product.state),
    __metadata("design:type", Array)
], State.prototype, "products", void 0);
State = __decorate([
    typeorm_1.Entity()
], State);
exports.default = State;
//# sourceMappingURL=entity.js.map