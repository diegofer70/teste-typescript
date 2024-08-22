"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
console.log(1);
const execRequest = async () => {
    const res = await (0, axios_1.default)('https://api.discogs.com/releases/23949476?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM');
    console.log(res.data.artists_sort);
    console.log(res.data.title);
};
execRequest();