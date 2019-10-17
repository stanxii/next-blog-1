import React,  { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization, withAuthentication } from '../components/Session';
import withPage from '../components/layout/page';
import Head from '../components/layout/head';
import Menu from '../components/Menu';

class Admin extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return  (<div className="admin-page">
		<Head title="title"/>
		<div id="layout">
			<a href="#menu" id="menuLink" className="menu-link" >
				<span></span>
			</a>
			<Menu />
			<div id="main">
				<div className="header">
					<h1>Page Title</h1>
					<h2>A subtitle for your page goes here</h2>
				</div>

				<div className="content">
					<h2 className="content-subhead">How to use this layout</h2>
					<p>
						To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
					</p>

					<h2 className="content-subhead">Now Let's Speak Some Latin</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<div className="pure-g">
						<div className="pure-u-1-4">
							<img className="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake" />
						</div>
						<div className="pure-u-1-4">
							<img className="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train" />
						</div>
						<div className="pure-u-1-4">
							<img className="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store" />
						</div>
						<div className="pure-u-1-4">
							<img className="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain" />
						</div>
					</div>

					<h2 className="content-subhead">Try Resizing your Browser</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
		<style jsx>{`
		  body {
				color: #777;
		  }

		  .pure-img-responsive {
				max-width: 100%;
				height: auto;
		  }

			#layout {
				position: relative;
				left: 0;
				padding-left: 0;
			}
			@media (min-width: 48em) {
				.header,
				.content {
					padding-left: 2em;
					padding-right: 2em;
				}

				#layout {
					padding-left: 150px;
					left: 0;
				}
			}
		`}</style>
	  </div>)
	}
}
const isLoggedIn = user => !!user;
export default compose(
	withAuthentication,
	withAuthorization(isLoggedIn),
  withPage,
)(Admin);