/**
 * See https://inlang.com
 */
export async function defineConfig(env) {
	const { default: pluginJson } = await env.$import(
		'https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@2/dist/index.js'
	);

	const { default: standardLintRules } = await env.$import(
		'https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js'
	);
	
	return {
		referenceLanguage: 'English',
		plugins: [pluginJson({ 
			pathPattern: 'src/data/languages/{language}.json',
			variableReferencePattern: ["{", "}"],
		}), standardLintRules()]
	};
}
