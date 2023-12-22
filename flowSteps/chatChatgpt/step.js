/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.chatChatgpt = function (inputs) {

	var inputsLogic = {
		model: inputs.model || "",
		messages: inputs.messages || {},
		max_tokens: inputs.max_tokens || 16,
		temperature: inputs.temperature || 1,
		top_p: inputs.top_p || 1,
		n: inputs.n || 1,
		user: inputs.user || ""
	};

	var options = {
		path: "/v1/chat/completions",
		body: inputsLogic
	}

	options= setApiUri(options);
	options= setAuthorization(options);
	options= setRequestHeaders(options);

	return httpService.post(options);
}

function setApiUri(options) {
	var url = options.path || "";
	options.url = config.get("OPENAI_API_BASE_URL") + url;
	sys.logs.debug('[chatgpt] Set url: ' + options.path + "->" + options.url);
	return options;
}

function setRequestHeaders(options) {
	var headers = options.headers || {};
	headers = mergeJSON(headers, {"Content-Type": "application/json"});
	if (config.get("organizationId"))
		headers = mergeJSON(headers, {"OpenAI-Organization": config.get("organizationId")});

	options.headers = headers;
	return options;
}

function setAuthorization(options) {
	sys.logs.debug('[chatgpt] Setting header token oauth');
	var authorization = options.authorization || {};
	authorization = mergeJSON(authorization, {
		type: "oauth2",
		accessToken: config.get("apiToken"),
		headerPrefix: "Bearer"
	});
	options.authorization = authorization;
	return options;
}

function mergeJSON (json1, json2) {
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}
