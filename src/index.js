import { Gutenberg_Post_Parser } from './gutenberg_post_parser.js';
import fs from 'fs';
import util from 'util';
import path from "path"

class Gutenberg_Post_Parser_NodeJS extends Gutenberg_Post_Parser {
    constructor(Block, Phrase, wasmURL) {
        super(Block, Phrase, wasmURL, new util.TextEncoder(), new util.TextDecoder());
    }

    instantiateWASM(url, importObject) {
        const buffer = fs.readFileSync(url);

        return this._wasm = WebAssembly.instantiate(buffer, {}).then(obj => obj.instance);
    }
}

class Block {
    constructor(name, attributes, children) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
}

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
}


export default new Gutenberg_Post_Parser_NodeJS(Block, Phrase, path.resolve(__dirname, '../lib/bin/gutenberg_post_parser.wasm'));
