This is a project forked from https://github.com/Yidadaa/ChatGPT-Next-Web. The goal is to add support for Anthropic Claude, and to introduce plugin capabilities similar to ChatGPT Web.

## plugin[**WIP**]

To simplify implementation, the plugin is implemented through hook methods, mainly in two ways:
1. After the user asks a question, the plugin executes and returns the result as additional information to the context to be handed to the AI. This feature is mainly used in intelligent Q&A scenarios.
2. After receiving an answer from the AI, the plugin processes the information obtained from the AI's response and displays the returned result as an answer. This feature is mainly used for calling other platform operations, such as painting.

