<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>ChatGPT package</td>
        <td>July 23, 2024</td>
        <td>Detailed description of the API of the ChatGPT package.</td>
    </tr>
    </tbody>
</table>

## Overview

The ChatGPT package has the following features:

- Authorization with API Token

Please make sure you take a look at the documentation from ChatGPT as features are based on its API:

- [API Reference](https://platform.openai.com/docs/introduction)

## Quick start

Once you configured the package, you can list current models with this call:

```js
for(var model of pkg.chatgpt.api.get("/models").data)
{ 
    log(JSON.stringify(model))
}
```

Or you can generate a completion with this call:

```js
var res = pkg.chatgpt.api.post("/completions", {
    prompt: "Once upon a time",
    model: "text-davinci-003",
    max_tokens: 5
})
```

## Configuration

Before configuring the package you will need to create an account in OpenAI:
[OpenAI login](https://platform.openai.com/signup?launch)

Once you have your account you will be able to configure the package.

### API Token

The API token of the account. This field is required. [API Token list](https://platform.openai.com/account/api-keys)

### Organization ID

The organization ID of the account. This field is optional. [Organization ID](https://platform.openai.com/account/org-settings)

## Configuration Parameters
Field names to use the parameters with dynamic configuration.

Name (Dynamic Config param name) - Type
* API Token (apiToken) - Text
* Organization ID (organizationId) - Text

# Javascript API

The Javascript API of the chatgpt package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`PUT`,`PATCH`,`DELETE` requests to the [chatgpt API](https://platform.openai.com/docs/introduction) like this:
```javascript
var response = pkg.chatgpt.api.get('/v1/models')
var response = pkg.chatgpt.api.post('/v1/edits', body)
var response = pkg.chatgpt.api.post('/v1/edits')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Dependencies
* HTTP Service (v1.6.7)

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
