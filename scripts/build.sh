rm -rf lib || true
mkdir lib

which cargo > /dev/null || \
		(echo 'Please, install rust' && exit 1)
git clone https://github.com/Hywan/gutenberg-parser-rs.git -b 'master' --single-branch --depth 1  library
rm -rf library/.git --force
(cd library && just build-wasm) || exit 1

rm -rf lib/bin || true
mkdir lib/bin 

ls library/bindings/wasm/bin/

mv library/bindings/wasm/bin/gutenberg_post_parser.wasm lib/bin/gutenberg_post_parser.wasm
mv library/bindings/wasm/bin/gutenberg_post_parser.mjs src/gutenberg_post_parser.js
rm -rf library || true