import React,  { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization, withAuthentication } from '../components/Session';
import withPage from '../components/layout/page';
import Head from '../components/layout/head';
import Menu from '../components/Menu';
import Setting from '../components/Setting';

class Admin extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return  (<div className="admin-page">
		<Head title="Admin page"/>
		<div id="layout">
			<a href="#menu" id="menuLink" className="menu-link" >
				<span></span>
			</a>
			<Menu />
			<div id="main">
				<Setting />
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