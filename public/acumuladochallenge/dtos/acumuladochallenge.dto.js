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
exports.UpdateAcumuladochallengeDto = exports.CreateAcumuladochallengeDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAcumuladochallengeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rank: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, plate: { required: true, type: () => String }, categoria: { required: true, type: () => String }, total: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateAcumuladochallengeDto.prototype, "rank", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateAcumuladochallengeDto.prototype, "nombre", void 0);
__decorate([
    class_validator_1.IsDate(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateAcumuladochallengeDto.prototype, "plate", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateAcumuladochallengeDto.prototype, "categoria", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateAcumuladochallengeDto.prototype, "total", void 0);
exports.CreateAcumuladochallengeDto = CreateAcumuladochallengeDto;
class UpdateAcumuladochallengeDto extends swagger_1.PartialType(CreateAcumuladochallengeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAcumuladochallengeDto = UpdateAcumuladochallengeDto;
//# sourceMappingURL=acumuladochallenge.dto.js.map