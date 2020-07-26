const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://live.ke.com.pk/');

	await page.evaluate(scriptText => {
	  const el = document.createElement('script');
	  el.type = 'text/javascript';
	  el.textContent = scriptText;
	  document.body.parentElement.appendChild(el);
	}, scriptToInject);

	//console.log(await page.content());
	await page.screenshot({path: 'screenshot.png'});
	await browser.close();
	
})();

const scriptToInject = `
char1Array = []
char2Array = []
char3Array = []
char4Array = []
char5Array = []
char6Array = []

captcha = jQuery(".realperson-text").text()

for(i=0;i<=6;i++){
	
	line = captcha.slice(54*i, 54*(i+1))
	char1 = line.slice(0, 9)
	char2 = line.slice(9, 18)
	char3 = line.slice(18, 27)
	char4 = line.slice(27, 36)
	char5 = line.slice(36, 45)
	char6 = line.slice(45, 54)
	char1Array.push([char1])
	char2Array.push([char2])
	char3Array.push([char3])
	char4Array.push([char4])
	char5Array.push([char5])
	char6Array.push([char6])
}

var alphabet = { 
	"A" : "   *     ,  * *    ,  * *    , *   *   , *****   ,*     *  ,*     *  ", 
	"B" : "******   ,*     *  ,*     *  ,******   ,*     *  ,*     *  ,******   ",
	"C" : " *****   ,*     *  ,*        ,*        ,*        ,*     *  , *****   ",
	"D" : "******   ,*     *  ,*     *  ,*     *  ,*     *  ,*     *  ,******   ",
	"E" : "*******  ,*        ,*        ,****     ,*        ,*        ,*******  ",
	"F" : "*******  ,*        ,*        ,****     ,*        ,*        ,*        ",
	"G" : " *****   ,*     *  ,*        ,*        ,*   ***  ,*     *  , *****   ",
	"H" : "*     *  ,*     *  ,*     *  ,*******  ,*     *  ,*     *  ,*     *  ",
	"I" : "*******  ,   *     ,   *     ,   *     ,   *     ,   *     ,*******  ",
	"J" : "      *  ,      *  ,      *  ,      *  ,      *  ,*     *  , *****   ",
	"K" : "*     *  ,*   **   ,* **     ,**       ,* **     ,*   **   ,*     *  ",
	"L" : "*        ,*        ,*        ,*        ,*        ,*        ,*******  ",
	"M" : "*     *  ,**   **  ,* * * *  ,*  *  *  ,*     *  ,*     *  ,*     *  ",
	"N" : "*     *  ,**    *  ,* *   *  ,*  *  *  ,*   * *  ,*    **  ,*     *  ",
	"O" : " *****   ,*     *  ,*     *  ,*     *  ,*     *  ,*     *  , *****   ",
	"P" : "******   ,*     *  ,*     *  ,******   ,*        ,*        ,*        ",
	"Q" : " *****   ,*     *  ,*     *  ,*     *  ,*   * *  ,*    *   , **** *  ",
	"R" : "******   ,*     *  ,*     *  ,******   ,*   *    ,*    *   ,*     *  ",
	"S" : " *****   ,*     *  ,*        , *****   ,      *  ,*     *  , *****   ",
	"T" : "*******  ,   *     ,   *     ,   *     ,   *     ,   *     ,   *     ",
	"U" : "*     *  ,*     *  ,*     *  ,*     *  ,*     *  ,*     *  , *****   ",
	"V" : "*     *  ,*     *  , *   *   , *   *   ,  * *    ,  * *    ,   *     ",
	"W" : "*     *  ,*     *  ,*     *  ,*  *  *  ,* * * *  ,**   **  ,*     *  ",
	"X" : "*     *  , *   *   ,  * *    ,   *     ,  * *    , *   *   ,*     *  ",
	"Y" : "*     *  , *   *   ,  * *    ,   *     ,   *     ,   *     ,   *     ",
	"Z" : "*******  ,     *   ,    *    ,   *     ,  *      , *       ,*******  ",
};

solvedCaptcha = "";
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char1Array.toString());
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char2Array.toString());
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char3Array.toString());
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char4Array.toString());
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char5Array.toString());
solvedCaptcha += Object.keys(alphabet).find(key => alphabet[key] === char6Array.toString());

jQuery("#txtCaptchaEnquiryLogin").val(solvedCaptcha)
`;

