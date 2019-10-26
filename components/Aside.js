import React, { useState, useEffect } from 'react';
import { withFirebase } from '../components/firebase';
const profile = {
  avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
  name:'Going: Tràn viên lập trình đống đống',
  author: 'Vu Vy',
  bios: 'Thủa nhỏ, ờ nhà trồng cafe, lại thích xem khoa học, mê khám phá máy tính. Thế nên lớn lên làm dev vừa được ngồi uống cafe, vừa ngồi gõ máy tính'
}


const Aside = (props) => {
  const [setting, setSetting] = useState({ title: '', author: '' });
  const { firebase } = props;
  useEffect(() => {
    firebase.getPageSetting(setSetting);
  },[]);

  return (<div className="left-aside">
  <div>
    <figure className="avatar">
      <img className="avatar-img" src={setting.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000'} height="100" width="100" />
    </figure>
    <h2 className="name"> <a href="/"> {setting.title} </a></h2>
    <div className="author"> by <span> {setting.author} </span> </div>
    <p className="bios"> {setting.bio} </p>
  </div>
  <div className="social-link">
    {
      setting.links && setting.links.map((social, ind) => (
        <a key={ind} href={social.url} rel="noopener noreferrer" target="blank">{social.title}</a>
      ))
    }
  </div>
  <style jsx>{`
    .left-aside {
      float: left;
      width: 300px;
      height: 100vh;
      background: #2b2b2b;
      text-align: right;
      padding: 0 20px;
    }
    .avatar {
      margin-top: 50px;
      margin-right: 0px;
    }
    .avatar-img {
      border-radius: 50%;
    }
    .author {
      color: rgb(230, 213, 113);
      font-size: 17px;
      text-transform: uppercase;
    }
    .name {}
    .name a {
      color: rgb(233, 36, 108);
      font-size: 22px;
      line-height: 35px;
    }
    .bios {
      line-height: 20px;
    }
    .social-link {
      position: relative;
      padding-top: 25px;
    }
    .social-link a {
      text-decoration: none;
      display: block;
      margin: 8px 0;
      font-size: 14px;
    }
    .social-link:before {
      content: " ";
      display: block;
      width: 80px;
      height: 5px;
      background: rgb(103,215,238);
      float: right;
    }
  `}</style>
</div>)
}

export default withFirebase(Aside);

