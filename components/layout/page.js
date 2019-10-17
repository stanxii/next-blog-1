import React, { Component } from 'react';
import { withAuthentication } from '../Session';

const Page = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div className="page-component">
          <WrappedComponent {...this.props} />
          <style jsx global>{`
            html, body {
              font-family: open sans,sans-serif;
            }
            body {
              font: 11px menlo;
              background-color: #333;
              color: #fff;
              padding: 0;
              margin: 0;
            }
            a {
              color: rgb(166, 226, 44);
            }
            p {
              font-size: 14px;
            }
          `}</style>
        </div>
      )
    }
  }
}

export default Page;