/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CLICK_THREAD: null,
    CREATE_MESSAGE: null,
    RECEIVE_RAW_CREATED_MESSAGE: null,
    RECEIVE_RAW_MESSAGES: null,
    NEW_USER: null
  }),
	routes: keyMirror({
		'MAIN':null,
		'NEW_USER':null,
		'MILITARY':null,
		'TREASURY':null,
		'WONDER':null,
		'CIVILIAN':null,
		'COMMERCIAL':null,
		'GUILD':null,
		'SCIENCE':null
	})

};
