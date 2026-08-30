var precisionClientBuildMode = "release";
var loadingScreenDataURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAC4jAAAuIwF4pT92AAALIklEQVR4nO3YP25UZx+G4TOfLBoUcIoUUWIl4o8iuUxDzRboKFgCDRtgDWmygWyBnobGDb0thECkSBEJGMDGeOyTXXy/4r6uDTzvnDkzuvVu1nVdAICW/00fAAD4/xMAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIL2pg/Asg7vb4b3GXR8fDz6/r19+3b684/uv3r1anT/3bt3o/sHBwej+3fu3Bndf/z48ej/rxsAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACC9qYPwKxv376tk/vXrl3bTO7/888/o5///Px8cn758uXL6P779+9H9z9+/Di6v91uR/evX78+ur+/v5/ePzo6Gv3/cQMAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQ3vQBWDaT47vdbp3c3263o/uXl5eT88u3b99G9z9+/Di6//79+9H9Dx8+jO5//vx5dP+HH34Y3b958+bo/vfffz+6f+/evdH/fzcAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAE7U0fgFkXFxej+7vdbnT/8vJydP/s7Gx0//79+5vh/cl54l68eLEuYW4AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAI2ps+QN3Z2dk6ub/b7Sbnl6urq6X8+bfb7eg+lN24cWMpcwMAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQZl3X6TOkffr0afQLOD09nZxfLi4uRvd//vnnzeT+s2fPRr//k5OTyfnlyZMno8+fWc+fPx99/+/fv59+/9wAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQtFnXdSk7Pz8ffQCnp6eT88vXr19H93/88cfN6AHinj59Ovr+v379enJ++euvv7x/g16+fDn6/v3+++/p798NAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQZt1XZeyz58/jz6A09PTyfnl4uJidP+nn37ajB6AUQ8ePBj9/R0cHEzOL3/88Uf6/T8+Ph79/n/77bf083cDAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABA0GZd16Xsw4cPow/g69evk/PL+fn56P4vv/yyGT0AaU+fPh39/d+5c2dyfnn06NHo7+/Nmzejz//XX39N//+4AQCAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIGizrutS9u+//44+gPPz88n55fT0dHT/7t27m9EDwKBnz56N/v/cunVrcn45PDz0+x/kBgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKC9JW63243uX15eju6fnZ2N7kPZ/v7+6P7h4eFm9ACMcgMAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQ3hJ3dXU1ur/b7Ub3t9vt6H7dw4cP18n97777bnJ+uX379uj+3bt3R/cfPHiwGT0AaW4AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAI2qzrupT9/fffow9gu91Ozi+vX78e3T85ORndf/Xq1ej+n3/+uRk9AJDlBgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKDNuq7TZ0g7Ojoa/QLu3bu3mdwHYIYbAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAlp7/AAbvB6t5AnlsAAAAAElFTkSuQmCC";

/*
 * Copyright (c) 2024 lax1dude. All Rights Reserved.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 * 
 */

function bootstrapLog(level, msg) {
	if(typeof precisionClientBuildMode === "string" && precisionClientBuildMode === "release" && level < 2) {
		return;
	}
	const levelName = ["DEBUG", "INFO", "WARN", "ERROR"][level] || "UNKNOWN";
	const line = "[Precision Client][" + new Date().toISOString() + "][bootstrap/" + levelName + "] " + msg;
	if(level >= 3) {
		console.error(line);
	}else if(level === 2) {
		console.warn(line);
	}else if(level === 1) {
		console.info(line);
	}else {
		console.debug(line);
	}
}

/**
 * @param {*} msg
 */
function logInfo(msg) {
	bootstrapLog(1, msg);
}

/**
 * @param {*} msg
 */
function logWarn(msg) {
	bootstrapLog(2, msg);
}

/**
 * @param {*} msg
 */
function logError(msg) {
	bootstrapLog(3, msg);
}

/** @type {function(string,number):ArrayBuffer|null} */
var decodeBase64Impl = null;

/**
 * @return {function(string,number):ArrayBuffer}
 */
function createBase64Decoder() {
	const revLookup = [];
	const code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (var i = 0, len = code.length; i < len; ++i) {
		revLookup[code.charCodeAt(i)] = i;
	}

	revLookup["-".charCodeAt(0)] = 62;
	revLookup["_".charCodeAt(0)] = 63;

	/**
	 * @param {string} b64
	 * @param {number} start
	 * @return {!Array<number>}
	 */
	function getLens(b64, start) {
		const len = b64.length - start;
		if (len % 4 > 0) {
			throw new Error("Invalid string. Length must be a multiple of 4");
		}
		var validLen = b64.indexOf("=", start);
		if (validLen === -1) {
			validLen = len;
		}else {
			validLen -= start;
		}
		const placeHoldersLen = validLen === len ? 0 : 4 - (validLen % 4);
		return [validLen, placeHoldersLen];
	}
	
	/**
	 * @param {string} b64
	 * @param {number} start
	 * @return {ArrayBuffer}
	 */
	function decodeImpl(b64, start) {
		var tmp;
		const lens = getLens(b64, start);
		const validLen = lens[0];
		const placeHoldersLen = lens[1];
		const arr = new Uint8Array(((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen);
		var curByte = 0;
		const len = (placeHoldersLen > 0 ? validLen - 4 : validLen) + start;
		var i;
		for (i = start; i < len; i += 4) {
			tmp = (revLookup[b64.charCodeAt(i)] << 18) |
				(revLookup[b64.charCodeAt(i + 1)] << 12) |
				(revLookup[b64.charCodeAt(i + 2)] << 6) |
				revLookup[b64.charCodeAt(i + 3)]
			arr[curByte++] = (tmp >> 16) & 0xFF
			arr[curByte++] = (tmp >> 8) & 0xFF
			arr[curByte++] = tmp & 0xFF
		}
		if (placeHoldersLen === 2) {
			tmp = (revLookup[b64.charCodeAt(i)] << 2) |
				(revLookup[b64.charCodeAt(i + 1)] >> 4)
			arr[curByte++] = tmp & 0xFF
		}else if (placeHoldersLen === 1) {
			tmp = (revLookup[b64.charCodeAt(i)] << 10) |
				(revLookup[b64.charCodeAt(i + 1)] << 4) |
				(revLookup[b64.charCodeAt(i + 2)] >> 2)
			arr[curByte++] = (tmp >> 8) & 0xFF
			arr[curByte++] = tmp & 0xFF
		}
		return arr.buffer;
	}
	
	return decodeImpl;
}

/**
 * @param {string} url
 * @param {number} start
 * @return {ArrayBuffer}
 */
function decodeBase64(url, start) {
	if(!decodeBase64Impl) {
		decodeBase64Impl = createBase64Decoder();
	}
	return decodeBase64Impl(url, start);
}

/**
 * @param {number} ms
 * @return {!Promise}
 */
function asyncSleep(ms) {
	return new Promise(function(resolve) {
		setTimeout(resolve, ms);
	});
}

/**
 * @param {string} url
 * @param {number} ms
 * @return {!Promise}
 */
function preloadImage(url, ms) {
	return new Promise(function(resolve) {
		const imgObj = new Image();
		imgObj.addEventListener("load", resolve);
		imgObj.addEventListener("error", function() {
			logWarn("Failed to preload image: " + url);
			resolve();
		});
		imgObj.src = url;
		setTimeout(resolve, ms);
	});
}

/**
 * @param {string} url
 * @return {!Promise<ArrayBuffer>}
 */
function downloadURL(url) {
	return new Promise(function(resolve) {
		fetch(url, { "cache": "force-cache" })
			.then(function(res) {
				return res.arrayBuffer();
			})
			.then(resolve)
			.catch(function(ex) {
				logError("Failed to fetch URL! " + ex);
				resolve(null);
			});
	});
}

/**
 * precision-client fork: fetch with streaming progress (used for the EPW
 * download so the loading bar reflects actual network progress). Falls back
 * to a plain arrayBuffer fetch if Content-Length / streams are unavailable.
 * @param {string} url
 * @param {function(number, number)} onProgress called with (receivedBytes, totalBytes)
 * @return {!Promise<ArrayBuffer>}
 */
function downloadURLWithProgress(url, onProgress) {
	return new Promise(function(resolve) {
		fetch(url, { "cache": "force-cache", "mode": "cors" })
			.then(function(res) {
				var total = parseInt(/** @type {string} */ (res.headers.get("Content-Length") || "0"), 10);
				if(res.body && total > 0) {
					var reader = res.body.getReader();
					var received = 0;
					var chunks = [];
					(function pump() {
						reader.read().then(function(result) {
							if(result.done) {
								var arr = new Uint8Array(received);
								var off = 0;
								for(var i = 0; i < chunks.length; ++i) {
									arr.set(chunks[i], off);
									off += chunks[i].length;
								}
								resolve(arr.buffer);
								return;
							}
							chunks.push(result.value);
							received += result.value.length;
							onProgress(received, total);
							pump();
						}).catch(function(ex) {
							logError("Failed to fetch URL! " + ex);
							resolve(null);
						});
					})();
				}else {
					res.arrayBuffer().then(resolve).catch(function(ex) {
						logError("Failed to fetch URL! " + ex);
						resolve(null);
					});
				}
			})
			.catch(function(ex) {
				logError("Failed to fetch URL! " + ex);
				resolve(null);
			});
	});
}

/**
 * @param {string} url
 * @return {!Promise<ArrayBuffer>}
 */
function downloadDataURL(url) {
	if(!url.startsWith("data:application/octet-stream;base64,")) {
		return downloadURL(url);
	}else {
		return new Promise(function(resolve) {
			downloadURL(url).then(function(res) {
				if(res) {
					resolve(res);
				}else {
					logWarn("Failed to decode base64 via fetch, doing it the slow way instead...");
					try {
						resolve(decodeBase64(url, 37));
					}catch(ex) {
						logError("Failed to decode base64! " + ex);
						resolve(null);
					}
				}
			});
		});
	}
}

/**
 * @param {HTMLElement} rootElement
 * @param {string} msg
 */
function displayInvalidEPW(rootElement, msg) {
	const downloadFailureMsg = /** @type {HTMLElement} */ (document.createElement("h2"));
	downloadFailureMsg.style.color = "#AA0000";
	downloadFailureMsg.style.padding = "25px";
	downloadFailureMsg.style.fontFamily = "sans-serif";
	downloadFailureMsg.style["marginBlock"] = "0px";
	downloadFailureMsg.appendChild(document.createTextNode(msg));
	rootElement.appendChild(downloadFailureMsg);
	const downloadFailureMsg2 = /** @type {HTMLElement} */ (document.createElement("h4"));
	downloadFailureMsg2.style.color = "#AA0000";
	downloadFailureMsg2.style.padding = "25px";
	downloadFailureMsg2.style.fontFamily = "sans-serif";
	downloadFailureMsg2.style["marginBlock"] = "0px";
	downloadFailureMsg2.appendChild(document.createTextNode("Try again later"));
	rootElement.style.backgroundColor = "white";
	rootElement.appendChild(downloadFailureMsg2);
}

window.main = async function() {
	if(typeof window.eaglercraftXOpts === "undefined") {
		const msg = "window.eaglercraftXOpts is not defined!";
		logError(msg);
		alert(msg);
		return;
	}
	
	const containerId = window.eaglercraftXOpts.container;
	if(typeof containerId !== "string") {
		const msg = "window.eaglercraftXOpts.container is not a string!";
		logError(msg);
		alert(msg);
		return;
	}
	
	var assetsURI = window.eaglercraftXOpts.assetsURI;
	if(typeof assetsURI !== "string") {
		if((typeof assetsURI === "object") && (typeof assetsURI[0] === "object") && (typeof assetsURI[0]["url"] === "string")) {
			assetsURI = assetsURI[0]["url"];
		}else {
			const msg = "window.eaglercraftXOpts.assetsURI is not a string!";
			logError(msg);
			alert(msg);
			return;
		}
	}
	
	if(assetsURI.startsWith("data:")) {
		delete window.eaglercraftXOpts.assetsURI;
	}
	
	const rootElement = /** @type {HTMLElement} */ (document.getElementById(containerId));

	if(!rootElement) {
		const msg = "window.eaglercraftXOpts.container \"" + containerId + "\" is not a known element id!";
		logError(msg);
		alert(msg);
		return;
	}

	// precision-client fork: the root stays black behind the transparent splash
	// until the live canvas is ready beneath it.
	rootElement.style.backgroundColor = "black";
	
	var node;
	while(node = rootElement.lastChild) {
		rootElement.removeChild(node);
	}
	
	const splashElement = /** @type {HTMLElement} */ (document.createElement("div"));
	splashElement.style.position = "relative";
	splashElement.style.width = "100%";
	splashElement.style.height = "100%";
	// precision-client fork: reuse the menu's static logo and animate only opacity.
	// Opacity can stay on the browser compositor while startup occupies the main
	// thread; a static logo is the fallback when Web Animations is unavailable.
	var loadingLogo = null;
	var loadingLogoAnimation = null;
	var reduceLoadingMotion = typeof window.matchMedia === "function"
			&& window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if(typeof loadingScreenDataURI === "string") {
		loadingLogo = /** @type {HTMLImageElement} */ (document.createElement("img"));
		loadingLogo.src = loadingScreenDataURI;
		loadingLogo.alt = "";
		loadingLogo.draggable = false;
		loadingLogo.style.position = "absolute";
		loadingLogo.style.left = "50%";
		loadingLogo.style.top = "50%";
		// The opaque 448px bbox starts at (64,64) in the 512px image, so its
		// center is 56.25% of the padded box. Align that content center to screen.
		loadingLogo.style.transform = "translate3d(-56.25%, -56.25%, 0)";
		loadingLogo.style.opacity = reduceLoadingMotion ? "1" : String(235.0 / 255.0);
		loadingLogo.style.pointerEvents = "none";
		loadingLogo.style.willChange = "opacity, transform";
		loadingLogo.style.backfaceVisibility = "hidden";
		loadingLogo.style.setProperty("image-rendering", "pixelated");
		splashElement.appendChild(loadingLogo);
	}
	rootElement.appendChild(splashElement);
	if(loadingLogo && !reduceLoadingMotion && typeof loadingLogo.animate === "function") {
		loadingLogoAnimation = loadingLogo.animate([
			{ opacity: 235.0 / 255.0, easing: "cubic-bezier(0.37, 0, 0.63, 1)" },
			{ opacity: 1.0, easing: "cubic-bezier(0.37, 0, 0.63, 1)" },
			{ opacity: 235.0 / 255.0 }
		], {
			duration: 2000,
			iterations: Infinity
		});
	}

	// precision-client fork: the loading progress bar is driven by real progress:
	// bootstrap EPW download (0-15%) -> loader decompression (15-50%)
	// -> wasm compile (55%) -> java boot milestones (60-100%).
	const loadingBarTrack = /** @type {HTMLElement} */ (document.createElement("div"));
	loadingBarTrack.style.position = "absolute";
	loadingBarTrack.style.left = "50%";
	loadingBarTrack.style.transform = "translateX(-50%)";
	const loadingBarHeight = 22;
	// precision-client fork: same universal perceptual radius family as the in-game
	// UI (6.5 at a 26-unit short edge, square-root scaled, capped at half the short
	// edge and at the 6.5 maximum):
	//   min(6.5, loadingBarHeight/2, 6.5 * sqrt(loadingBarHeight / 26)).
	const loadingBarRadius = Math.min(6.5, loadingBarHeight * 0.5, 6.5 * Math.sqrt(loadingBarHeight / 26));
	loadingBarTrack.style.height = loadingBarHeight + "px";
	loadingBarTrack.style.borderRadius = loadingBarRadius + "px";
	loadingBarTrack.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
	loadingBarTrack.style.overflow = "hidden";
	loadingBarTrack.style.zIndex = "2";
	const loadingBarFill = /** @type {HTMLElement} */ (document.createElement("div"));
	loadingBarFill.style.width = "100%";
	loadingBarFill.style.height = "100%";
	loadingBarFill.style.borderRadius = loadingBarRadius + "px";
	loadingBarFill.style.backgroundColor = "#FFFFFF";
	// Reveal a full-size rounded shape through a rounded clip. Scaling the fill
	// itself compressed its horizontal corner radii near 0%, and the animated
	// glow forced extra paint work during startup.
	loadingBarFill.style.clipPath = "inset(0 100% 0 0 round " + loadingBarRadius + "px)";
	loadingBarFill.style.willChange = "clip-path";
	loadingBarFill.style.transition = "clip-path 150ms cubic-bezier(0.22, 1, 0.36, 1)";
	loadingBarTrack.appendChild(loadingBarFill);
	// Mark the bar so the runtime can re-parent and exit it above the live menu.
	loadingBarTrack.classList.add("_eaglercraftX_loading_bar_element");
	splashElement.appendChild(loadingBarTrack);

	// The shared 512px logo has a 448px opaque bbox. Keep its dimensions tied to
	// the modern UI's fixed 1280x720 / 1.7736 reference instead of the viewport,
	// so the loading handoff has the same physical scale at every resolution.
	const loadingUiDesignHeight = 720.0;
	const loadingUiScale = 1.7736;
	const loadingLogoPx = (112.0 / 1080.0) * loadingUiDesignHeight * loadingUiScale;
	const loadingLogoImagePx = (128.0 / 1080.0) * loadingUiDesignHeight * loadingUiScale;
	var layoutLoadingScreen = function() {
		var w = splashElement.clientWidth;
		var h = splashElement.clientHeight;
		if(w <= 0 || h <= 0) {
			return;
		}
		if(loadingLogo) {
			loadingLogo.style.width = loadingLogoImagePx + "px";
			loadingLogo.style.height = loadingLogoImagePx + "px";
		}
		var gap = Math.max(18, loadingLogoPx * 0.22);
		loadingBarTrack.style.top = ((h / 2.0) + (loadingLogoPx / 2.0) + gap) + "px";
		loadingBarTrack.style.width = Math.max(100, loadingLogoPx * 1.7) + "px";
	};
	layoutLoadingScreen();
	window.addEventListener("resize", layoutLoadingScreen);

	/**
	 * Global setter used by every phase of the client loading pipeline.
	 * Rounded clip updates preserve the pill geometry without changing layout.
	 * @param {number} pct absolute 0-100 percentage of client load
	 */
	var setLoadingProgress = function(pct) {
		pct = Math.max(0, Math.min(100, pct));
		// Reserve a rounded cap based on the same relative radius as the track.
		var capPx = loadingBarRadius * 2.0 * (1.0 - pct / 100.0);
		loadingBarFill.style.clipPath = pct <= 0.0 ? "inset(0 100% 0 0 round " + loadingBarRadius + "px)"
				: "inset(0 calc(" + (100.0 - pct) + "% - " + capPx + "px) 0 0 round "
						+ loadingBarRadius + "px)";
	};
	window["__eaglercraftXSetLoadingProgress"] = setLoadingProgress;

	// The splash is re-parented twice during boot. Keep cleanup with the element
	// so normal and error teardown can release browser-only work from any phase.
	var loadingScreenDisposed = false;
	var disposeLoadingScreen = function() {
		if(loadingScreenDisposed) return;
		loadingScreenDisposed = true;
		window.removeEventListener("resize", layoutLoadingScreen);
		if(loadingLogoAnimation) {
			loadingLogoAnimation.cancel();
			loadingLogoAnimation = null;
		}
		if(window["__eaglercraftXSetLoadingProgress"] === setLoadingProgress) {
			delete window["__eaglercraftXSetLoadingProgress"];
		}
	};
	splashElement._pcDisposeLoadingScreen = disposeLoadingScreen;
	loadingBarTrack._pcDisposeLoadingScreen = disposeLoadingScreen;

	// allow the screen to update
	await asyncSleep(20);
	
	/** @type {ArrayBuffer} */
	var theEPWFileBuffer;
	if(assetsURI.startsWith("data:")) {
		logInfo("Downloading EPW file \"<data: " + assetsURI.length + " chars>\"...");
		theEPWFileBuffer = await downloadDataURL(assetsURI);
	}else {
		logInfo("Downloading EPW file \"" + assetsURI + "\"...");
		theEPWFileBuffer = await downloadURLWithProgress(assetsURI, function(received, total) {
			// EPW download maps to 0-15% of the overall client load
			window["__eaglercraftXSetLoadingProgress"]((received / total) * 15.0);
		});
	}
	window["__eaglercraftXSetLoadingProgress"](15);
	
	var isInvalid = false;
	if(!theEPWFileBuffer) {
		isInvalid = true;
	}else if(theEPWFileBuffer.byteLength < 384) {
		logError("The EPW file is too short");
		isInvalid = true;
	}
	
	if(isInvalid) {
		disposeLoadingScreen();
		rootElement.removeChild(splashElement);
		const msg = "Failed to download EPW file!";
		displayInvalidEPW(rootElement, msg);
		logError(msg);
		return;
	}
	
	const dataView = new DataView(theEPWFileBuffer);
	
	if(dataView.getUint32(0, true) !== 608649541 || dataView.getUint32(4, true) !== 1297301847) {
		logError("The file is not an EPW file");
		isInvalid = true;
	}
	
	const phileLength = theEPWFileBuffer.byteLength;
	if(dataView.getUint32(8, true) !== phileLength) {
		logError("The EPW file is the wrong length");
		isInvalid = true;
	}

	if(isInvalid) {
		disposeLoadingScreen();
		rootElement.removeChild(splashElement);
		const msg = "EPW file is invalid!";
		displayInvalidEPW(rootElement, msg);
		logError(msg);
		return;
	}

	// precision-client fork: the EPW splash image slot has been removed entirely
	// (the loading screen is the bootstrap overlay); the loader
	// offsets below are validated against the trimmed EPW header layout.

	// allow the screen to update
	await asyncSleep(20);

	const loaderJSOffset = dataView.getUint32(132, true);
	const loaderJSLength = dataView.getUint32(136, true);
	const loaderWASMOffset = dataView.getUint32(148, true);
	const loaderWASMLength = dataView.getUint32(152, true);
	
	if(loaderJSOffset < 0 || loaderJSOffset + loaderJSLength > phileLength
			|| loaderWASMOffset < 0 || loaderWASMOffset + loaderWASMLength > phileLength) {
		logError("The EPW file contains an invalid offset (component: loader)");
		isInvalid = true;
	}

	if(isInvalid) {
		disposeLoadingScreen();
		rootElement.removeChild(splashElement);
		const msg = "EPW file is invalid!";
		displayInvalidEPW(rootElement, msg);
		logError(msg);
		return;
	}

	const loaderJSSlice = new Uint8Array(theEPWFileBuffer, loaderJSOffset, loaderJSLength);
	const loaderJSURL = URL.createObjectURL(new Blob([ loaderJSSlice ], { "type": "text/javascript;charset=utf-8" }));
	logInfo("Loaded loader.js: " + loaderJSURL);
	const loaderWASMSlice = new Uint8Array(theEPWFileBuffer, loaderWASMOffset, loaderWASMLength);
	const loaderWASMURL = URL.createObjectURL(new Blob([ loaderWASMSlice ], { "type": "application/wasm" }));
	logInfo("Loaded loader.wasm: " + loaderWASMURL);

	const optsObj = {};
	for(const [key, value] of Object.entries(window.eaglercraftXOpts)) {
		if(key !== "container" && key !== "assetsURI") {
			optsObj[key] = value;
		}
	}

	window.__eaglercraftXLoaderContextPre = {
		"rootElement": rootElement,
		"eaglercraftXOpts": optsObj,
		"theEPWFileBuffer": theEPWFileBuffer,
		"loaderWASMURL": loaderWASMURL
	};

	logInfo("Appending loader.js to document...");

	const scriptElement = /** @type {HTMLScriptElement} */ (document.createElement("script"));
	scriptElement.type = "text/javascript";
	scriptElement.src = loaderJSURL;
	document.head.appendChild(scriptElement);

};

