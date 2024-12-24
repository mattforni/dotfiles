; (function () {
	const vscode = acquireVsCodeApi();
	const chatgptSvg = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6" role="img"><title>ChatGPT</title><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>`;
	const userSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 avatar"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`;
	const clipboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>`;
	const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`;
	const insertSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>`;
	const copedSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;
	const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 md:m-0" stroke-width="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg>`;
	const editSvg = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
	const clearSvg = `<svg t="1676466716218" class="h-4 w-4 icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2778" width="200" height="200"><path d="M752.3 91.3l-34.7-16.8c-26.1-12.6-57.5-1.7-70.1 24.5L531.8 338.4l-6.9-3.4c-64.1-30.9-141.1-4.1-172 60l-10 20.7 375.2 181.2 10-20.7c30.9-64.1 4.1-141.1-60-172l-6.9-3.3 115.6-239.4c12.6-26.2 1.7-57.6-24.5-70.2zM702 630L326.3 448.6c-22.9 30-52.5 63.8-90.1 97.4-57.5 51.4-114.5 85.3-159.6 107.4 13.1 41.4 40.8 61.3 60.3 82.3 7.2 7.8 118.3-112.3 126.3-104.6 8 7.7-87 143.1-78.3 150.6 25.9 22.2 55 43.4 86.7 63.3 6.5 4.1 145.1-185 151.3-181.6 12.4 6.8-87.9 217.4-74.8 223.7 13 6.3 26.1 12.2 39.1 17.7 45.1 19 89.9 33 132.8 42.2 13.1 2.8 82-234.4 94.6-232.5 12.7 1.9-30.8 242.9-18.7 243.9 36.5 3 70.6 1.9 100.9-3.3-10.5-54.4-18.2-124.6-12.5-205.8 3.2-44.5 9.9-84.5 17.7-119.3z" p-id="2779" fill="#bfbfbf"></path></svg>`;
	const regenerateSvg = `<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>`;
	const markdownSvg = `<svg class="w-6 h-6" t="1687004795634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6710" width="200" height="200"><path d="M85.333333 682.666667 85.333333 341.333333 170.666667 341.333333 298.666667 469.333333 426.666667 341.333333 512 341.333333 512 682.666667 426.666667 682.666667 426.666667 462.08 298.666667 590.08 170.666667 462.08 170.666667 682.666667 85.333333 682.666667M682.666667 341.333333 810.666667 341.333333 810.666667 512 917.333333 512 746.666667 704 576 512 682.666667 512 682.666667 341.333333Z" p-id="6711"></path></svg>`;
	let stopSrollToBottom = false;
	function throttle(func, delay) {
		let lastCall = 0;
		return function () {
			const now = Date.now();
			if (now - lastCall < delay) {
				return;
			}
			lastCall = now;
			return func.apply(this, arguments);
		}
	}
	function utf8_to_b64(str) {
		return btoa(new TextEncoder().encode(str).reduce((data, byte) => data + String.fromCharCode(byte), ''));
	}

	function b64_to_utf8(str) {
		return new TextDecoder().decode(Uint8Array.from(atob(str), c => c.charCodeAt(0)));
	}
	function getAskBtnWrapper(message) {
		let encodedMessage = utf8_to_b64(JSON.stringify(message));
		return `
			<div class="flex justify-between items-center">
			    <button class="clear-btn p-1.5 flex items-center rounded-lg" title="clear question">
				  ${clearSvg}
				</button>
				<button class="regenerate-btn p-1.5 flex items-center rounded-lg" title="regenerate response">
				  ${regenerateSvg}
				</button>
				<button class="edit-btn p-1.5 flex items-center rounded-lg" title="edit and ask again">
				  ${editSvg}
				</button>
				<input type="hidden" value="${encodedMessage}"/>
			</div>
		`;
	}
	function getAnswerBtnWrapper() {
		return `
			<div class="flex justify-between items-center">
				<button class="copy-answer-btn p-1.5 flex items-center rounded-lg" title="copy to clipboard">
				  ${clipboardSvg}
				</button>
				<button class="insert-answer-btn p-1.5 flex items-center rounded-lg" title="insert at cursor">
				  ${insertSvg}
				</button>
				<button class="opennew-answer-btn p-1.5 flex items-center rounded-lg" title="insert into new file">
				  ${plusSvg}
				</button>
				<button class="export-markdown-btn p-1.5 flex items-center rounded-lg" title="export markdown">
				  ${markdownSvg}
				</button>
			</div>
		`;
	}
	function getCodeBtnWrapper() {
		return `
			<div class="flex justify-between items-center">
				<button class="copy-code-btn p-1.5 flex items-center rounded-lg" title="copy to clipboard">
				  ${clipboardSvg}
				</button>
				<button class="insert-code-btn p-1.5 flex items-center rounded-lg" title="insert at cursor">
				  ${insertSvg}
				</button>
				<button class="opennew-code-btn p-1.5 flex items-center rounded-lg" title="insert into new file">
				  ${plusSvg}
				</button>
			</div>
		`;
	}
	function highlightBlock(str, lang) {
		let block = `<pre class="code-block-wrapper"><div class="code-block-header flex justify-between items-center"><span>${lang}</span>${getCodeBtnWrapper()}</div><code class="hljs language-${lang}`;
		if (str.length > 1800) {
			block += ` code-block-body">${str}</code><div class="code-block-footer flex justify-end items-center">${getCodeBtnWrapper()}</div>`;
		} else {
			block += ` code-block-body code-block-body-end">${str}</code>`;
		}
		block += `</pre>`;
		return block;
	}
	var markdown = window.markdownit({
		linkify: true,
		highlight(code, language = 'javascript') {
			const validLang = !!(language && hljs.getLanguage(language))
			if (validLang) {
				return highlightBlock(hljs.highlight(language, code, true).value, language)
			}
			return highlightBlock(hljs.highlightAuto(code).value, '')
		}
	});
	const qaList = document.getElementById('qa-list');
	const askButton = document.getElementById('ask-button');
	const questionInput = document.getElementById('question-input');
	const stopGenerating = document.getElementById('stop-generating');
	const selectModel = document.getElementById('select-model');
	const selectLanguage = document.getElementById('select-language');
	const selectTemperature = document.getElementById('select-temperature');
	const toggleSidebar = document.getElementById('toggle-side-bar');
	const sidebar = document.getElementById('sidebar');
	const conversations = document.getElementById('conversations');
	let prompts = document.getElementById('prompts');
	const scrollToBottom = throttle(() => {
		if (stopSrollToBottom) return;
		requestAnimationFrame(() => {
			qaList.scrollTop = qaList.scrollHeight;
		})
	}, 500);
	qaList.addEventListener("scroll", throttle(() => {
		const nearBottom = qaList.scrollHeight - qaList.scrollTop - qaList.clientHeight <= 50;
		stopSrollToBottom = !nearBottom;
	}, 500));
	let totalMsg = '';
	window.addEventListener('message', (event) => {
		const message = event.data;
		// 获取prompt和代码
		const { type, value, code, status, content, languageId = 'javascript' } = message;
		//判断消息的类型
		switch (type) {
			//如果是增加提问
			case 'addQuestion':
				let valueHtml = '';
				if (value) {
					//把value转化为源代码的形式
					valueHtml = `${markdown.render(value)}`;
				}
				let codeHtml = '';
				if (code) {
					//把code转化为源代码的形式
					codeHtml = `${markdown.render(`\`\`\`${languageId}\r\n${code}\r\n\`\`\``)}`;
				}
				qaList.innerHTML += `
				<div class="question-container bg-gray-600 text-white rounded my-1 p-3">
				  <div class="flex justify-between items-center">
				    <div class="flex items-center font-bold">${userSvg}<span class="ml-1">You</span></div>
					${getAskBtnWrapper(message)}
				  </div>
				  <p>${valueHtml}</p>
				  ${codeHtml}
			    </div>
			`;
				scrollToBottom();
				startLoading();
				break;
			case 'addResponse':
				let answerHTml = '';
				if (status === 'start') {
					totalMsg = value;
					answerHTml = markdown.render(totalMsg);
					qaList.innerHTML += `
					<div class="answer-container p-3 rounded-t">
					  <div class="flex justify-between items-center">
						<div class="flex items-center">${chatgptSvg}<span class="ml-1">ChatGPT</span></div>
						${getAnswerBtnWrapper()}
					  </div>
					  <input  type="hidden" value="${totalMsg}"/>
					  <div class="mt-1 responseContent  pb-3">${answerHTml}</div>
				    </div>
				`;
					scrollToBottom()
				} else if (status === 'continue') {
					const responseContents = document.querySelectorAll('.responseContent');
					const responseContent = responseContents[responseContents.length - 1];
					if (responseContent) {
						totalMsg += value;
						answerHTml = markdown.render(totalMsg)
						responseContent.innerHTML = answerHTml;
						responseContent.previousElementSibling.value = totalMsg;
						scrollToBottom()
					}
				} else {
					scrollToBottom()
					stopLoading();
					stopSrollToBottom = false;
				}
				break;
			case 'requestError':
				stopLoading();
				break;
			case 'clearList':
				qaList.innerHTML = '';
				break;
			case 'refreshConversations':
				conversations.innerHTML = content;
				break;
			case 'focusInput':
				questionInput.focus();
				break;
			case 'showConversation':
				renderConversation(content);
				break;
			case 'refreshPrompts':
				prompts.innerHTML = content;
				if (!message.silent) {
					if (prompts.children && prompts.children.length > 0) {
						prompts.classList.remove('hidden');
						focusSelectedPrompt();
					}
				}
				break;
			default:
				break;
		}
	});
	function focusSelectedPrompt() {
		if (prompts && prompts.children.length > 0) {
			let promptItems = Array.from(prompts.children);
			promptItems[selectedIndex]?.focus();
			promptItems[selectedIndex]?.children[1]?.classList.remove('hidden');
		}
	}
	/**
	 * 通过用户在输入框中的内容进行提问
	 */
	function askQuestionByInputValue() {
		// 检查输入框的值是否存在且长度大于零。input.value 表示输入框的当前值
		if (questionInput.value?.length > 0) {
			lastValue = questionInput.value;
			//使用 vscode.postMessage 方法将消息发送给 VS Code 编辑器
			vscode.postMessage({
				type: 'askChatGPT',//消息的类型为 'askChatGPT'
				value: questionInput.value,//表示输入框的值，作为用户的提问内容。
			});
			askButton.disabled = true;
			askButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			questionInput.value = '';//将输入框的值设置为空字符串，以清除输入框中的文本内容
		}
	}
	/**
	 * 处理按下事件
	 * @param {*} event 事件对象
	 * @returns 
	 */
	function handleKeydown(event) {
		//用于检查按下的键是否是回车键（Enter）且没有按下 Shift 键。
		//如果同时满足这两个条件，即按下的键是回车键且没有按下 Shift 键，将执行条件语句中的代码块。
		if (!event.shiftKey && event.keyCode === 13) {
			//它用于从输入框中获取问题的值并将其发送给 VS Code 编辑器。
			askQuestionByInputValue();
			//阻止事件的默认行为发生
			//阻止默认行为是为了阻止按下回车键后，防止触发表单提交或换行等默认行为。
			event.preventDefault();
			//返回 false 也是为了阻止事件的默认行为，与 event.preventDefault() 的作用相同。
			return false;
		} else if (event.target.value === '' && event.key === '/') {
			if (prompts.children && prompts.children.length > 0) {
				prompts.classList.remove('hidden');
				prompts.children[selectedIndex]?.focus();
				prompts.children[selectedIndex]?.children[1]?.classList.remove('hidden');
			}
		}
	}
	function copyCode(targetButton) {
		let codeElement = targetButton?.parentElement?.parentElement?.parentElement?.lastElementChild;
		if (codeElement?.tagName !== 'CODE') {
			codeElement = codeElement.previousElementSibling;
		}
		let value = codeElement?.textContent;
		if (!value) return;
		navigator.clipboard
			.writeText(value)
			.then(() => {
				targetButton.innerHTML = copedSvg;
				setTimeout(() => {
					targetButton.innerHTML = clipboardSvg;
				}, 1500);
			});
	}
	function insertCodeToCursor(targetButton) {
		let codeElement = targetButton?.parentElement?.parentElement?.parentElement?.lastElementChild;
		if (codeElement?.tagName !== 'CODE') {
			codeElement = codeElement.previousElementSibling;
		}
		let value = codeElement?.textContent;
		if (!value) return;
		vscode.postMessage({
			type: 'insertToCursor',
			value
		});
	}
	function insertCodeToNewTab(targetButton) {
		let codeElement = targetButton?.parentElement?.parentElement?.parentElement?.lastElementChild;
		if (codeElement?.tagName !== 'CODE') {
			codeElement = codeElement.previousElementSibling;
		}
		let value = codeElement?.textContent;
		if (!value) return;
		vscode.postMessage({
			type: 'insertToNewTab',
			value
		});
	}
	function copyAnswer(targetButton) {
		const value = targetButton?.parentElement?.parentElement?.nextElementSibling.value;
		if (!value) return;
		navigator.clipboard
			.writeText(value)
			.then(() => {
				//表示复制操作成功
				targetButton.innerHTML = copedSvg;
				//在 1500 毫秒（1.5 秒）后将 targetButton 的 HTML 内容更改回 clipboardSvg
				setTimeout(() => {
					targetButton.innerHTML = clipboardSvg;
				}, 1500);
			});
	}
	function insertAnswerToCursor(targetButton) {
		const value = targetButton?.parentElement?.parentElement?.nextElementSibling?.value;
		if (!value) return;
		vscode.postMessage({
			type: 'insertToCursor',
			value
		});
	}
	function insertAnswerToNewTab(targetButton) {
		const value = targetButton?.parentElement?.parentElement?.nextElementSibling?.value;
		if (!value) return;
		vscode.postMessage({
			type: 'insertToNewTab',
			value
		});
	}
	function onQuestionInputChange() {
		if (questionInput.value.trim() === '') {
			askButton.disabled = true;
			askButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		} else {
			askButton.disabled = false;
			askButton.style.backgroundColor = 'rgb(171, 104, 255)';
		}
	}
	function startLoading() {
		askButton.innerHTML = `<span></span><span></span><span></span>`;
		stopGenerating?.classList?.remove('hidden');
	}
	function stopLoading() {
		askButton.innerHTML = arrowSvg;
		stopGenerating?.classList?.add('hidden');
	}
	function renderConversation(conversation) {
		const { messages } = conversation;
		const messagesHtml = messages.slice(1).map((message) => {
			const { role, content } = message;
			const contentHtml = markdown.render(content)
			let html = '';
			if (role === 'user') {
				html += `
				<div class="question-container bg-gray-600 text-white rounded  my-1 p-3">
				  <div class="flex justify-between items-center">
				  <div class="flex items-center">${userSvg}<span class="ml-1">You</span></div>
				  ${getAskBtnWrapper({ type: 'addQuestion', value: message.content })}
				  </div>
				  <p>${contentHtml}</p>
			    </div>`;
			} else {
				html += `
				<div class="answer-container  rounded-t p-3">
					<div class="flex justify-between items-center">
					<div class="flex items-center">${chatgptSvg}<span class="ml-2">ChatGPT</span></div>
					${getAnswerBtnWrapper()}
					</div>
					<input  type="hidden" value="${content}"/>
					<div class="mt-2 responseContent pb-3">${contentHtml}</div>
				</div>`;
			}
			return html;
		}
		).join('');
		qaList.innerHTML = messagesHtml;
		scrollToBottom();
	}
	function stopGeneratingResponse() {
		vscode.postMessage({ type: 'stopGenerating' });
		askButton.disabled = true;
		askButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		stopLoading();
	}
	function editAndReSend(targetButton) {
		const messageValue = targetButton.parentElement.lastElementChild.value;
		let decodedMessage = JSON.parse(b64_to_utf8(messageValue));
		const { value, code, languageId = 'javascript' } = decodedMessage || {};
		let inputValue = '';
		if (value) {
			inputValue += value;
		}
		if (code) {
			inputValue += `\r\n\`\`\`${languageId}\r\n${code}\r\n\`\`\``;
		}
		questionInput.value = inputValue;
		questionInput.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
		onQuestionInputChange();
	}
	function regenerateReseponse(targetButton) {
		editAndReSend(targetButton);
		askQuestionByInputValue()
	}
	function clearQuestion(targetButton) {
		const questionContainer = targetButton.parentElement.parentElement.parentElement;
		const responseContainer = questionContainer.nextElementSibling;
		questionContainer?.remove();
		responseContainer?.remove();
	}
	function handleModel() {
		//获取当前选中的值
		const value = selectModel.value;
		//向 VS Code 编辑器发送消息
		vscode.postMessage({
			type: 'changeModel',
			value
		});
	}
	function handleLanguage() {
		const value = selectLanguage.value;
		vscode.postMessage({
			type: 'changeLanguage',
			value
		});
	}
	function handleTemperature() {
		const value = selectTemperature.value;
		vscode.postMessage({
			type: 'changeTemperature',
			value
		});
	}
	function startNewChat() {
		vscode.postMessage({
			type: 'startNewChat'
		});
	}
	function exportMarkdown(targetButton) {
		const value = targetButton?.parentElement?.parentElement?.nextElementSibling.value;
		if (!value) return;
		vscode.postMessage({
			type: 'exportMarkdown',
			value
		});
	}
	function deleteConversation(targetButton) {
		vscode.postMessage({
			type: 'deleteConversation',
			value: targetButton.dataset.id
		});
	}
	function showConversation(targetButton) {
		const editConversations = document.querySelectorAll('.edit-conversation');
		const deleteConversations = document.querySelectorAll('.delete-conversation');
		[...editConversations, ...deleteConversations].forEach(item => item.classList.add('hidden'));
		const editConversation = targetButton.parentElement.nextElementSibling;
		const deleteConversation = editConversation.nextElementSibling;
		[editConversation, deleteConversation].forEach(item => item.classList.remove('hidden'));
		vscode.postMessage({
			type: 'showConversation',
			value: targetButton.dataset.id
		});
	}
	function editConversation(targetButton) {
		const conversationContent = targetButton.previousElementSibling;
		const conversationContentButton = conversationContent.firstElementChild;
		const conversationContentInput = conversationContentButton.nextElementSibling;
		conversationContentInput.value = b64_to_utf8(conversationContentInput.value);
		conversationContentButton.classList.add('hidden');
		conversationContentInput.classList.remove('hidden');
		conversationContentInput.focus();
		conversationContentInput.select();
		conversationContentInput.setSelectionRange(0, 0);
		const deleteConversation = targetButton.nextElementSibling;
		const confirmEditConversation = deleteConversation.nextElementSibling;
		const cancelEditConversation = confirmEditConversation.nextElementSibling;
		targetButton.classList.add('hidden');
		deleteConversation.classList.add('hidden');
		confirmEditConversation.classList.remove('hidden');
		cancelEditConversation.classList.remove('hidden');
	}
	function confirmEditonversation(targetButton) {
		const deleteConversation = targetButton.previousElementSibling;
		const editConversation = deleteConversation.previousElementSibling;
		const conversationContent = editConversation.previousElementSibling;
		const conversationContentButton = conversationContent.firstElementChild;
		const conversationContentInput = conversationContentButton.nextElementSibling;
		conversationContentButton.classList.remove('hidden');
		conversationContentInput.classList.add('hidden');
		const cancelEditConversation = targetButton.nextElementSibling;
		targetButton.classList.add('hidden');
		cancelEditConversation.classList.add('hidden');
		const newTitle = conversationContentInput.value;
		if (newTitle) {
			conversationContentButton.innerHTML = newTitle;
			vscode.postMessage({
				type: 'changeConversationTitle',
				id: targetButton.dataset.id,
				title: newTitle
			});
		}
		conversationContentInput.value = utf8_to_b64(conversationContentInput.value)
	}

	function cancelEditonversation(targetButton) {
		const confirmEditConversation = targetButton.previousElementSibling;
		const deleteConversation = confirmEditConversation.previousElementSibling;
		const editConversation = deleteConversation.previousElementSibling;
		const conversationContent = editConversation.previousElementSibling;
		const conversationContentButton = conversationContent.firstElementChild;
		const conversationContentInput = conversationContentButton.nextElementSibling;
		conversationContentButton.classList.remove('hidden');
		conversationContentInput.classList.add('hidden');
		deleteConversation.classList.remove('hidden');
		editConversation.classList.remove('hidden');
		confirmEditConversation.classList.add('hidden');
		targetButton.classList.add('hidden');
		conversationContentInput.value = utf8_to_b64(conversationContentInput.value)
	}
	function deleteAllConversations() {
		vscode.postMessage({
			type: 'deleteAllConversations'
		});
	}
	function toggleSidebarView() {
		sidebar.classList.toggle('hidden');
	}
	function handleConversationsDown(event) {
		if (event.target.classList.contains('edit-conversation-area')) {
			if (!event.shiftKey && event.keyCode === 13) {
				event.preventDefault();
				confirmEditonversation(event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling)
				return false;
			}
		}
	}
	let selectedIndex = 0;
	function handleClick(event) {
		//方法用于从当前元素开始向上遍历，查找最近的父级元素中是否存在 'button' 标签
		const targetButton = event.target.closest('button');
		if (targetButton?.classList?.contains('copy-code-btn')) {
			event.preventDefault();
			copyCode(targetButton);
		} else if (targetButton?.classList?.contains('insert-code-btn')) {
			event.preventDefault();
			insertCodeToCursor(targetButton);
		} else if (targetButton?.classList?.contains('opennew-code-btn')) {
			event.preventDefault();
			insertCodeToNewTab(targetButton);
		} else if (targetButton?.classList?.contains('copy-answer-btn')) {
			event.preventDefault();
			copyAnswer(targetButton);
		} else if (targetButton?.classList?.contains('insert-answer-btn')) {
			event.preventDefault();
			insertAnswerToCursor(targetButton);
		} else if (targetButton?.classList?.contains('opennew-answer-btn')) {
			event.preventDefault();
			insertAnswerToNewTab(targetButton);
		} else if (targetButton?.classList?.contains('regenerate-btn')) {
			event.preventDefault();
			regenerateReseponse(targetButton);
		} else if (targetButton?.classList?.contains('edit-btn')) {
			event.preventDefault();
			editAndReSend(targetButton);
		} else if (targetButton?.classList?.contains('new-chat')) {
			event.preventDefault();
			startNewChat();
		} else if (targetButton?.classList?.contains('export-markdown-btn')) {
			event.preventDefault();
			exportMarkdown(targetButton);
		} else if (targetButton?.classList?.contains('delete-conversation')) {
			event.preventDefault();
			deleteConversation(targetButton);
		} else if (targetButton?.classList?.contains('delete-all-conversations')) {
			event.preventDefault();
			deleteAllConversations(targetButton);
		} else if (targetButton?.classList?.contains('conversation-content')) {
			event.preventDefault();
			showConversation(targetButton);
		} else if (targetButton?.classList?.contains('edit-conversation')) {
			event.preventDefault();
			editConversation(targetButton);
		} else if (targetButton?.classList?.contains('confirm-edit-conversation')) {
			event.preventDefault();
			confirmEditonversation(targetButton);
		} else if (targetButton?.classList?.contains('cancel-edit-conversation')) {
			event.preventDefault();
			cancelEditonversation(targetButton);
		} else if (targetButton?.classList?.contains('delete-prompt')) {
			event.preventDefault();
			deletePrompt(targetButton);
		} else if (targetButton?.classList?.contains('clear-btn')) {
			event.preventDefault();
			clearQuestion(targetButton);
		}
		if (event.target.classList.contains('prompt')) {
			prompts.classList.add('hidden');
			selectedIndex = Number(event.target.dataset.index);
			let inputContent = event.target.dataset?.content?.trim();
			if (!inputContent) {
				inputContent = event.target.dataset?.title?.trim();
			}
			if (!inputContent) {
				inputContent = event.target.textContent;
			}
			if (inputContent) {
				questionInput.value = inputContent + '\r\n';
				questionInput.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
				questionInput.focus();
			}
		} else {
			if (!prompts.classList.contains('hidden')) {
				prompts.classList.add('hidden');
			}
		}
	}
	function deletePrompt(targetButton) {
		vscode.postMessage({
			type: 'deletePrompt',
			index: targetButton.dataset.index
		});
	}
	function handleArrowKey(event) {
		if (prompts.classList.contains('hidden')) return;
		let promptItems = Array.from(prompts.children);
		let total = promptItems.length;
		event.preventDefault();
		let oldSelectedItem;
		switch (event.key) {
			case 'ArrowDown':
				oldSelectedItem = promptItems[selectedIndex];
				selectedIndex++;
				if (selectedIndex >= total) {
					selectedIndex = 0;
				}
				oldSelectedItem?.children[1]?.classList.add('hidden');
				focusSelectedPrompt();
				break;
			case 'ArrowUp':
				oldSelectedItem = promptItems[selectedIndex];
				selectedIndex--;
				if (selectedIndex < 0) {
					selectedIndex = total - 1;
				}
				oldSelectedItem?.children[1]?.classList.add('hidden');
				focusSelectedPrompt();
				break;
			case 'Enter':
				prompts.classList.add('hidden');
				let textContent = prompts?.children[selectedIndex]?.firstElementChild?.dataset?.content?.trim();
				if (textContent) {
					questionInput.value = textContent + '\r\n';
					questionInput.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
					questionInput.focus();
				}
				break;
			case 'Escape':
				prompts.classList.add('hidden');
				questionInput.focus();
				break;
			default:
				break;
		}
	}
	askButton.addEventListener('click', askQuestionByInputValue);
	questionInput.addEventListener('input', onQuestionInputChange);
	questionInput?.addEventListener('keydown', handleKeydown);
	stopGenerating?.addEventListener('click', stopGeneratingResponse);
	selectModel?.addEventListener('change', handleModel);
	selectLanguage?.addEventListener('change', handleLanguage);
	selectTemperature?.addEventListener('change', handleTemperature);
	toggleSidebar?.addEventListener('click', toggleSidebarView);
	conversations?.addEventListener('keydown', handleConversationsDown);
	document.addEventListener('click', handleClick);
	document.addEventListener('keydown', handleArrowKey);
	window.addEventListener('DOMContentLoaded', () => {
		questionInput.focus();
	});
})();
